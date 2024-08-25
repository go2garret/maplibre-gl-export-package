import { type Map as MaplibreMap } from 'maplibre-gl';
import { type Map as MapboxMap } from 'mapbox-gl';
import { ExportLayoutOptions } from './interfaces';
export default class PrintableAreaManager {
    protected map: MaplibreMap | MapboxMap | undefined;
    protected width: number;
    protected height: number;
    protected unit: string;
    protected svgCanvas: SVGElement | undefined;
    protected svgPath: SVGElement | undefined;
    protected exportLayoutOptions: ExportLayoutOptions;
    constructor(map: MaplibreMap | MapboxMap | undefined, exportLayoutOptions: ExportLayoutOptions);
    private mapResize;
    updateArea(width: number, height: number): void;
    protected generateCutOut(): void;
    destroy(): void;
    protected toPixels(length: number, conversionFactor?: number): number;
}
//# sourceMappingURL=printable-area-manager.d.ts.map