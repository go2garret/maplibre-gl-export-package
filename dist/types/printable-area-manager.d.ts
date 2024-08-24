import { type Map as MaplibreMap } from 'maplibre-gl';
import { type Map as MapboxMap } from 'mapbox-gl';
export default class PrintableAreaManager {
    protected map: MaplibreMap | MapboxMap | undefined;
    protected width: number;
    protected height: number;
    protected unit: string;
    protected svgCanvas: SVGElement | undefined;
    protected svgPath: SVGElement | undefined;
    constructor(map: MaplibreMap | MapboxMap | undefined);
    private mapResize;
    updateArea(width: number, height: number): void;
    protected generateCutOut(): void;
    destroy(): void;
    protected toPixels(length: number, conversionFactor?: number): number;
}
//# sourceMappingURL=printable-area-manager.d.ts.map