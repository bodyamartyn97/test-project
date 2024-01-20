import Table from 'react-bootstrap/Table';
import PaginationBasic from './PaginationBasic';
import TableRow from './TableRow';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { ColumnSort } from './ColumnSort';
import FilteredComponent from './FilteredComponent';
import { PropertyType, TableDataType } from '../models/models';
import * as React from "react";
import { AsyncThunk } from "@reduxjs/toolkit";

interface TableProps {
    data: TableDataType[],
    totalItems: number,
    properties: Array<PropertyType>,
    fetchData: AsyncThunk
}

const TableData: React.FC<TableProps> =
    ({ data, totalItems, properties, fetchData }) => {

        const dispatch = useAppDispatch();
        const [sort, setSort] = useState({ active: properties[0], direction: 'asc' });
        const [currentPage, setCurrentPage] = useState<number>(1);
        const [searchValue, setSearchValue] = useState<string>('');
        const [searchBy, setSearchBy] = useState<string>(properties[0]);
        const itemsPerPage = 10;

        useEffect(() => {
            dispatch(fetchData({ sort, searchBy, searchValue, currentPage, itemsPerPage }));
        }, [sort.active, sort.direction, searchBy, searchValue, currentPage, dispatch, fetchData, sort])

        const onChangeColumnSort = useCallback((property: PropertyType) => {
            let direction;
            if (property === sort.active) {
                direction = sort.direction === 'asc' ? 'desc' : 'asc';
            } else {
                direction = 'asc';
            }

            setSort({ active: property, direction: direction })
        }, [sort]);

        const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

        const onChangeSearchValue = (value: string) => {
            setSearchValue(value);
            setCurrentPage(1);
        }

        return (
            <>
                <div className="container__filter">
                    <FilteredComponent
                        properties={properties}
                        searchValue={searchValue}
                        onChangeSearchValue={onChangeSearchValue}
                        setSearchBy={setSearchBy}
                    />
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            {properties.map((item) => {
                                return <ColumnSort key={item} sort={sort} onChange={onChangeColumnSort} property={item} />
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: TableDataType) =>
                            <TableRow key={item.id} item={item} properties={properties} />)}
                    </tbody>
                </Table>
                <PaginationBasic paginate={paginate} elementsPerPage={itemsPerPage} totalElements={totalItems} />
            </>

        );
    }

export default TableData;
