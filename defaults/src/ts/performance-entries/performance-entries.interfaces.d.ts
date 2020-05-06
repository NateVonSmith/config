export declare enum PerformanceEntryType {
    RESOURCE,
    NAVIGATION,
    PAINT,
}
export interface AllPerformanceEntries {
}
export interface Resource {
    connectEnd: number;
    connectStart: number;
    decodedBodySize: number;
    domainLookupEnd: number;
    domainLookupStart: number;
    duration: number;
    encodedBodySize: number;
    entryType: string;
    fetchStart: number;
    initiatorType: string;
    name: string;
    nextHopProtocol: string;
    redirectEnd: number;
    redirectStart: number;
    requestStart: number;
    responseEnd: number;
    responseStart: number;
    secureConnectionStart: number;
    startTime: number;
    transferSize: number;
    workerStart: number;
}
export interface Navigation {
    requestStart: number;
    responseStart: number;
    responseEnd: number;
    redirectStart: number;
    fetchStart: number;
    domainLookupStart: number;
    domainLookupEnd: number;
    connectStart: number;
    connectEnd: number;
    domInteractive: number;
    domComplete: number;
    domContentLoadedEventEnd: number;
    domLoading: number;
    loadEventEnd: number;
    loadEventStart: number;
}
export interface Paint {
    name: string;
    startTime: number;
    duration: number;
}
