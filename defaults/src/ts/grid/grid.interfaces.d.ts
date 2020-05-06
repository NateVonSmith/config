export interface Grid {
    data?: any[];
    columns: ColumnConfig[];
    sort?: Sort;
    filter?: Filter[];
    limitTo?: number;
}
export interface ColumnConfig {
    headerText: string;
    headerClass?: string;
    dataProp: string;
    dataClass?: string;
    dataFormatFunc?: Function;
}
export interface Filter {
    field: string;
    operator: FilterOperator;
    value: string | number | boolean;
}
export interface Sort {
    field: string;
    dir: SortDirection;
}
export declare const enum FilterCombineLogic {
    AND,
    OR,
}
export declare enum FilterOperator {
    EQUAL_TO,
    LIKE,
    CONTAINS,
    NOT_EQUAL_TO,
    LESS_THAN,
    GREATER_THAN,
    LESS_THAN_OR_EQUAL_TO,
    GREATER_THAN_OR_EQUAL_TO,
    UNLIKE,
    ISNULL,
    DOES_NOT_CONTAIN,
}
export declare enum SortDirection {
    ASC,
    DESC,
}
