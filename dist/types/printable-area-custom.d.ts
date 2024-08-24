import { type Map as MaplibreMap } from 'maplibre-gl';
import { type Map as MapboxMap } from 'mapbox-gl';
import PrintableAreaManager from './printable-area-manager';
export default class PrintableAreaCustom extends PrintableAreaManager {
    private width;
    private height;
    private svgCanvas;
    private svgPath;
    private rulerSvg;
    constructor(map: MaplibreMap | MapboxMap | undefined);
    private generateCutOut;
    destroy(): void;
    private drawRuler;
    private addRulerLabels;
    addRulerTickMarks(cutoutWidth: any, cutoutHeight: any, startX: any, endX: any, startY: any, endY: any): void;
    private createLabel;
    private createLine;
}
//# sourceMappingURL=printable-area-custom.d.ts.map