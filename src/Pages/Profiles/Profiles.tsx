import TableData from "../../components/TableData";
import { useAppSelector } from "../../hooks/hooks";
import {ProfilesModel, PropertyType} from "../../models/models";
import { fetchProfiles, selectAllProfiles, selectTotalProfiles } from "../../store/ProfilesSlice/ProfilesSlice";
import * as React from "react";

export default function Profiles() {
    const profiles: ProfilesModel[] = useAppSelector(selectAllProfiles);
    const totalItems = useAppSelector(selectTotalProfiles);

    const properties = ['id', 'country', 'marketplace'] as PropertyType[];
    return (
        <TableData
            data={profiles}
            totalItems={totalItems}
            fetchData={fetchProfiles}
            properties={properties}
        />
    )
}
