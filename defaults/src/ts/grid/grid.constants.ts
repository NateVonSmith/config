import { Filter } from "./grid.interfaces";

export const applyFilter = (filters: Filter[], data) => {
    return data.filter((item) => filters.some(({ field, value }) => value === null || item[field] === value));
};
