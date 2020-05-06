import { PerformanceEntryType, AllPerformanceEntries } from './performance-entries.interfaces';
export declare const cleanObjectProperties: (dirtyObj: any, propKeys: any) => any;
export declare const resourceProps: string[];
export declare const navigationProps: string[];
export declare const paintProps: string[];
export declare const getEntries: (type: PerformanceEntryType, data?: any) => any[];
export declare const getAllPerformanceEntries: () => AllPerformanceEntries;
