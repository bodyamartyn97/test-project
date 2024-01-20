import { PropertyType, TableDataType } from "../models/models";
import * as React from "react";
import TableDataDate from "./TableDataDate";

interface PropTypes {
    item: TableDataType,
    properties: Array<PropertyType>
}

export default function TableRow({ item, properties }: PropTypes) {

    return (
        <tr>
            {properties.map((prop) =>
                <td key={item.id + prop} className={prop}>
                    {(prop as string === 'creationDate') ? <TableDataDate date={item[prop]} /> : item[prop]}
                </td>
            )}
        </tr>
    )
}
