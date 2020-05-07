
export interface Grid {
    data?: any[];
    columns: ColumnConfig[];
    sort?: Sort;
    filters?: Filter[];
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
    options?: string[] | number[] | boolean[];
}

export interface Sort {
    field: string;
    dir: SortDirection;
}

export enum FilterCombineLogic {
    AND = 'and',
    OR = 'or'
}

export enum FilterOperator {
    EQUAL_TO = 'eq',
    LIKE = 'like',
    CONTAINS = 'contains',
    NOT_EQUAL_TO = 'neq',
    LESS_THAN = 'lt',
    GREATER_THAN = 'gt',
    LESS_THAN_OR_EQUAL_TO = 'lte',
    GREATER_THAN_OR_EQUAL_TO = 'gte',
    UNLIKE = 'unlike',
    ISNULL = 'isnull',
    DOES_NOT_CONTAIN = 'doesnotcontain'
}

export enum SortDirection {
    ASC = 'asc',
    DESC = 'desc'
}