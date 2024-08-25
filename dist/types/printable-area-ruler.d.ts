import { type Map as MaplibreMap } from 'maplibre-gl';
import { type Map as MapboxMap } from 'mapbox-gl';
import PrintableAreaManager from './printable-area-manager';
export default class PrintableAreaRuler extends PrintableAreaManager {
    private rulerSvg;
    constructor(map: MaplibreMap | MapboxMap | undefined);
    updateArea(width: number, height: number): void;
    protected generateCutOut(): void;
    destroy(): void;
    private drawRuler;
    private addRulerLabels;
    addRulerTickMarks(cutoutWidth: any, cutoutHeight: any, startX: any, endX: any, startY: any, endY: any): void;
    private createLabel;
    private createLine;
}
//# sourceMappingURL=printable-area-ruler.d.ts.map