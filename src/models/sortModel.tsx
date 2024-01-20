import {PropertyType} from "./models";

export interface SortTypes {
    sort: {
        active: PropertyType,
        direction: 'asc' | 'desc'
    },
    searchBy: PropertyType,
    searchValue: string,
    currentPage: number,
    itemsPerPage: number
}
