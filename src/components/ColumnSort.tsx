import {PropertyType} from "../models/models";
import * as React from "react";

interface ColumnTypes {
    property: PropertyType,
    name?: string,
    sort: {
        direction: string,
        active: string
    },
    onChange: (prop: PropertyType) => void
}

export function ColumnSort({ property, name, sort, onChange }: ColumnTypes) {

    return (
        <>
            <th onClick={() => onChange(property)}>
                <div className="growth__block">
                    {name || property}
                    <span></span>
                    {sort.active === property ?
                        <span
                            className={`growth__element ${sort.direction === 'asc' ? 'grow-down' : 'grow-up'}`}
                        >
                        </span> : ''}
                </div>
            </th>
        </>
    )
}
