import { type Map as MaplibreMap } from 'maplibre-gl';
import { type Map as MapboxMap } from 'mapbox-gl';
import PrintableAreaManager from './printable-area-manager';
import { ExportLayoutOptions } from './interfaces';
export default class PrintableAreaRuler extends PrintableAreaManager {
    private rulerSvg;
    constructor(map: MaplibreMap | MapboxMap | undefined, exportLayoutOptions: ExportLayoutOptions);
    updateArea(width: number, height: number): void;
    protected generateCutOut(): void;
    destroy(): void;
    private drawRuler;
    private addRulerLabels;
    addRulerTickMarks(cutoutWidth: number, cutoutHeight: number, startX: number, endX: number, startY: number, endY: number): void;
    private createLabel;
    private createLine;
}
//# sourceMappingURL=printable-area-ruler.d.ts.map