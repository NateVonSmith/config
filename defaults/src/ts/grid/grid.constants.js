exports.applyFilter = function (filters, data) {
    return data.filter(function (item) { return filters.some(function (_a) {
        var field = _a.field, value = _a.value;
        return value === null || item[field] === value;
    }); });
};
