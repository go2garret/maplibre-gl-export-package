import { type Map as MaplibreMap } from 'maplibre-gl';
import { type Map as MapboxMap } from 'mapbox-gl';
import { ExportLayoutOptions } from './interfaces';
export default class CrosshairManager {
    private map;
    private width;
    private height;
    private svgCanvas;
    private xLine;
    private yLine;
    private color;
    protected exportLayoutOptions: ExportLayoutOptions;
    constructor(map: MaplibreMap | MapboxMap | undefined, exportLayoutOptions: ExportLayoutOptions);
    create(): void;
    private updateValues;
    private mapResize;
    private updateCanvas;
    private createCanvas;
    private createLine;
    destroy(): void;
}
//# sourceMappingURL=crosshair-manager.d.ts.map