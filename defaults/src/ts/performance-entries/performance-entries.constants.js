var performance_entries_interfaces_1 = require('./performance-entries.interfaces');
exports.cleanObjectProperties = function (dirtyObj, propKeys) {
    var cleanSingleObj = function (singleObj, _propKeys) {
        var cleanObj = {};
        _propKeys.forEach(function (key) { return singleObj && singleObj[key] !== undefined && (cleanObj[key] = singleObj[key]); });
        return cleanObj;
    };
    return Array.isArray(dirtyObj) ? dirtyObj.map(function (_obj) { return cleanSingleObj(_obj, propKeys); }) : cleanSingleObj(dirtyObj, propKeys);
};
exports.resourceProps = [
    'initiatorType',
    'nextHopProtocol',
    'workerStart',
    'redirectStart',
    'redirectEnd',
    'fetchStart',
    'domainLookupStart',
    'domainLookupEnd',
    'connectStart',
    'connectEnd',
    'secureConnectionStart',
    'requestStart',
    'responseStart',
    'responseEnd',
    'transferSize',
    'encodedBodySize',
    'decodedBodySize',
    'name',
    'entryType',
    'startTime',
    'duration'
];
exports.navigationProps = [
    'requestStart',
    'responseStart',
    'responseEnd',
    'redirectStart',
    'fetchStart',
    'domainLookupStart',
    'domainLookupEnd',
    'connectStart',
    'connectEnd',
    'domInteractive',
    'domComplete',
    'domContentLoadedEventEnd',
    'domLoading',
    'loadEventEnd',
    'loadEventStart'
];
exports.paintProps = ['name', 'startTime', 'duration'];
exports.getEntries = function (type, data) {
    switch (type) {
        case performance_entries_interfaces_1.PerformanceEntryType.RESOURCE:
            return exports.cleanObjectProperties(data || performance.getEntriesByType(performance_entries_interfaces_1.PerformanceEntryType.RESOURCE), exports.resourceProps);
            as;
            any[];
        case performance_entries_interfaces_1.PerformanceEntryType.NAVIGATION:
            return exports.cleanObjectProperties(data || performance.getEntriesByType(performance_entries_interfaces_1.PerformanceEntryType.NAVIGATION)[0], exports.navigationProps);
            as;
            any[];
        case performance_entries_interfaces_1.PerformanceEntryType.PAINT:
            return exports.cleanObjectProperties(data || performance.getEntriesByType(performance_entries_interfaces_1.PerformanceEntryType.PAINT), exports.paintProps);
            as;
            any[];
    }
};
exports.getAllPerformanceEntries = function () {
    return (_a = {},
        _a[performance_entries_interfaces_1.PerformanceEntryType.RESOURCE] = exports.getEntries(performance_entries_interfaces_1.PerformanceEntryType.RESOURCE),
        _a[performance_entries_interfaces_1.PerformanceEntryType.NAVIGATION] = exports.getEntries(performance_entries_interfaces_1.PerformanceEntryType.NAVIGATION),
        _a[performance_entries_interfaces_1.PerformanceEntryType.PAINT] = exports.getEntries(performance_entries_interfaces_1.PerformanceEntryType.PAINT),
        _a
    );
    ;
    var _a;
};
// export const getEntriesDiff = (allEntries1: obj, allEntries2: any[]) => {
//     const ddif
//     return allEntries1.map(e1 => )
// }
