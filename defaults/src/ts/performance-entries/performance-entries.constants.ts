import { PerformanceEntryType, AllPerformanceEntries, PerformanceEntryTypes } from './performance-entries.interfaces';

export const cleanObjectProperties = (dirtyObj, propKeys) => {
    const cleanSingleObj = (singleObj, _propKeys) => {
        const cleanObj = {};
        _propKeys.forEach((key) => singleObj && singleObj[key] !== undefined && (cleanObj[key] = singleObj[key]));
        return cleanObj;
    };

    return Array.isArray(dirtyObj) ? dirtyObj.map((_obj) => cleanSingleObj(_obj, propKeys)) : cleanSingleObj(dirtyObj, propKeys);
};

export const resourceProps: string[] = [
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

export const navigationProps: string[] = [
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

export const paintProps: string[] = ['name', 'startTime', 'duration'];

export const getEntries = (type: PerformanceEntryType) => {
    switch (type) {
        case PerformanceEntryType.RESOURCE:
            return cleanObjectProperties(performance.getEntriesByType(PerformanceEntryType.RESOURCE), resourceProps);
        case PerformanceEntryType.NAVIGATION:
            return cleanObjectProperties(
                performance.getEntriesByType(PerformanceEntryType.NAVIGATION)[0],
                navigationProps
            );
        case PerformanceEntryType.PAINT:
            return cleanObjectProperties(performance.getEntriesByType(PerformanceEntryType.PAINT), paintProps);
    }
};

export const getAllPerformanceEntries = (): AllPerformanceEntries | any => {
    return {
        [PerformanceEntryType.RESOURCE]: getEntries(PerformanceEntryType.RESOURCE),
        [PerformanceEntryType.NAVIGATION]: getEntries(PerformanceEntryType.NAVIGATION),
        [PerformanceEntryType.PAINT]: getEntries(PerformanceEntryType.PAINT)
    };;
};

// export const getEntriesDiff = (allEntries1: obj, allEntries2: any[]) => {
//     const ddif
//     return allEntries1.map(e1 => )
// }
