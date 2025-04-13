import { Map as MaplibreMap, StyleSpecification } from 'maplibre-gl';
import 'js-loading-overlay';
import { DPIType, Format, FormatType, Size, SizeType, Unit, UnitType } from './interfaces';
import {
	MapGeneratorBase,
	defaultAttributionOptions,
	defaultExportLayoutOptions,
	defaultMarkerCirclePaint,
	defaultNorthIconOptions
} from './map-generator-base';
import * as fs from 'fs';
import * as path from 'path';

export default class MapGenerator extends MapGeneratorBase {
	/**
	 * Constructor
	 * @param map MaplibreMap object
	 * @param size layout size. default is A4
	 * @param dpi dpi value. deafult is 300
	 * @param format image format. default is PNG
	 * @param unit length unit. default is mm
	 * @param fileName file name. default is 'map'
	 */
	constructor(
		map: MaplibreMap,
		size: SizeType = Size.A4,
		dpi: DPIType = 300,
		format: FormatType = Format.PNG,
		unit: UnitType = Unit.mm,
		fileName = 'map',
		markerCirclePaint = defaultMarkerCirclePaint,
		attributionOptions = defaultAttributionOptions,
		northIconOptions = defaultNorthIconOptions,
		exportLayoutOptions = defaultExportLayoutOptions
	) {
		super(
			map,
			size,
			dpi,
			format,
			unit,
			fileName,
			'maplibregl-marker',
			markerCirclePaint,
			'maplibregl-ctrl-attrib-inner',
			attributionOptions,
			northIconOptions,
			exportLayoutOptions
		);
	}

	protected getRenderedMap(container: HTMLElement, style: StyleSpecification) {
		// Render map
		const renderMap: MaplibreMap = new MaplibreMap({
			container,
			style,
			center: this.map.getCenter(),
			zoom: this.map.getZoom(),
			bearing: this.map.getBearing(),
			pitch: this.map.getPitch(),
			interactive: false,
			preserveDrawingBuffer: true,
			fadeDuration: 0,
			// attributionControl: false,
			// hack to read transfrom request callback function
			// eslint-disable-next-line
			// @ts-ignore
			transformRequest: (this.map as unknown)._requestManager._transformRequestFn
		});

		const terrain = (this.map as MaplibreMap).getTerrain();
		if (terrain) {
			// if terrain is enabled, restore pitch correctly
			renderMap.setMaxPitch(85);
			renderMap.setPitch(this.map.getPitch());
		}

		// the below code was added by https://github.com/watergis/maplibre-gl-export/pull/18.
		const images = ((this.map as MaplibreMap).style.imageManager || {}).images || [];
		Object.keys(images).forEach((key) => {
			if (!images[key].data) return;
			const addImageOptions = {
				pixelRatio: 2
			}

			this.log("Add Image 2x");

			renderMap.addImage(key, images[key].data, addImageOptions);
		});

		return renderMap;
	}


	/**
	 * Simple function to log a message to a text file
	 * @param message - The message to log
	 * @param filename - Name of the log file (default: 'log.txt')
	 */
	protected log(
		message: string,
		filename: string = 'log.txt'
	): void {
		try {
		// Create log path in src directory
		const logPath = path.join('src', filename);

		// Add timestamp and newline
		const entry = `[${new Date().toISOString()}] ${message}\n`;

		// Append to file (creates file if it doesn't exist)
		fs.appendFileSync(logPath, entry);
		} catch (error) {
		console.error('Failed to write to log file:', error);
		}
	}

	protected renderMapPost(renderMap: MaplibreMap) {
		const terrain = (this.map as MaplibreMap).getTerrain();
		if (terrain) {
			// if terrain is enabled, set terrain for rendered map object
			renderMap.setTerrain({
				source: terrain.source,
				exaggeration: terrain.exaggeration
			});
		}

		return renderMap;
	}
}
