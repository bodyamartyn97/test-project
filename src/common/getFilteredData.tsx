import {sortBy} from 'lodash';
import {PropertyType, TableDataType} from '../models/models';

interface FilteredModels {
    searchBy: PropertyType,
    searchValue: string,
    currentPage: number,
    sort: {
        active: string,
        direction: string
    },
    itemsPerPage: number,
    response: TableDataType[]
}


export default function getFilteredData(
    {
        searchBy,
        searchValue,
        currentPage,
        sort,
        itemsPerPage,
        response
    }: FilteredModels) {

    const filteredData = response.filter(obj =>
        (obj[searchBy] as number | string).toString().toLowerCase().includes(searchValue.toLowerCase()));

    let data;

    if (sort.direction === 'asc') {
        data = sortBy(filteredData, [sort.active])
    } else {
        data = sortBy(filteredData, [sort.active]).reverse();
    }

    const sliceFrom = (currentPage - 1) * itemsPerPage;
    data = data.slice(sliceFrom, sliceFrom + itemsPerPage);

    console.log('getFiltered', data);
    return {
        data: data,
        totalItems: filteredData.length
    }
}
