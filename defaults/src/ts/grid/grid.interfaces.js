(function (FilterCombineLogic) {
    FilterCombineLogic[FilterCombineLogic["AND"] = 'and'] = "AND";
    FilterCombineLogic[FilterCombineLogic["OR"] = 'or'] = "OR";
})(exports.FilterCombineLogic || (exports.FilterCombineLogic = {}));
var FilterCombineLogic = exports.FilterCombineLogic;
(function (FilterOperator) {
    FilterOperator[FilterOperator["EQUAL_TO"] = 'eq'] = "EQUAL_TO";
    FilterOperator[FilterOperator["LIKE"] = 'like'] = "LIKE";
    FilterOperator[FilterOperator["CONTAINS"] = 'contains'] = "CONTAINS";
    FilterOperator[FilterOperator["NOT_EQUAL_TO"] = 'neq'] = "NOT_EQUAL_TO";
    FilterOperator[FilterOperator["LESS_THAN"] = 'lt'] = "LESS_THAN";
    FilterOperator[FilterOperator["GREATER_THAN"] = 'gt'] = "GREATER_THAN";
    FilterOperator[FilterOperator["LESS_THAN_OR_EQUAL_TO"] = 'lte'] = "LESS_THAN_OR_EQUAL_TO";
    FilterOperator[FilterOperator["GREATER_THAN_OR_EQUAL_TO"] = 'gte'] = "GREATER_THAN_OR_EQUAL_TO";
    FilterOperator[FilterOperator["UNLIKE"] = 'unlike'] = "UNLIKE";
    FilterOperator[FilterOperator["ISNULL"] = 'isnull'] = "ISNULL";
    FilterOperator[FilterOperator["DOES_NOT_CONTAIN"] = 'doesnotcontain'] = "DOES_NOT_CONTAIN";
})(exports.FilterOperator || (exports.FilterOperator = {}));
var FilterOperator = exports.FilterOperator;
(function (SortDirection) {
    SortDirection[SortDirection["ASC"] = 'asc'] = "ASC";
    SortDirection[SortDirection["DESC"] = 'desc'] = "DESC";
})(exports.SortDirection || (exports.SortDirection = {}));
var SortDirection = exports.SortDirection;
