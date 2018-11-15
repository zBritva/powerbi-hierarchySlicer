import IInteractivityService = powerbi.extensibility.utils.interactivity.IInteractivityService;
import SelectableDataPoint = powerbi.extensibility.utils.interactivity.SelectableDataPoint;
module powerbi.extensibility.visual {
    export interface HierarchySlicerDataPoint extends SelectableDataPoint {
        value: string;
        tooltip: string;
        level: number;
        mouseOver?: boolean;
        mouseOut?: boolean;
        isSelectAllDataPoint?: boolean;
        selectable?: boolean;
        partialSelected: boolean;
        id: {}; // SQExpr;
        isLeaf: boolean;
        isExpand: boolean;
        isHidden: boolean;
        ownId: string;
        parentId: string;
        order: number;
        filterTarget: IFilterTarget;
    }

    export interface HierarchySlicerData {
        dataPoints: HierarchySlicerDataPoint[];
        hasSelectionOverride?: boolean;
        settings: HierarchySlicerSettings;
        levels: number;
    }

    export interface HierarchySlicerBehaviorOptions {
        hostServices: IVisualHost;
        expanders: d3.Selection<any>;
        slicerBodySpinner: d3.Selection<any>;
        slicerContainer: d3.Selection<any>;
        slicerItemContainers: d3.Selection<any>;
        slicerItemLabels: d3.Selection<any>;
        slicerItemInputs: d3.Selection<any>;
        slicerClear: d3.Selection<any>;
        slicerExpand: d3.Selection<any>;
        slicerCollapse: d3.Selection<any>;
        headerSpinner: d3.Selection<any>;
        dataPoints: HierarchySlicerDataPoint[];
        interactivityService: IInteractivityService;
        slicerSettings: HierarchySlicerSettings;
        levels: number;
        dataView: powerbi.DataView;
    }

    export interface HierarchySlicerTreeViewOptions {
        enter: (selection: d3.Selection<any>) => void;
        exit: (selection: d3.Selection<any>) => void;
        update: (selection: d3.Selection<any>) => void;
        // loadMoreData: () => void;
        baseContainer: d3.Selection<any>;
        rowHeight: number;
        viewport: IViewport;
        scrollEnabled: boolean;
        // isReadMode: () => boolean;
    }

    export interface IHierarchySlicerTreeView {
        data(data: any[], dataIdFunction: (d) => {}, dataAppended: boolean): IHierarchySlicerTreeView;
        rowHeight(rowHeight: number): IHierarchySlicerTreeView;
        viewport(viewport: IViewport): IHierarchySlicerTreeView;
        render(): void;
        empty(): void;
    }
}