import TableData from "../../components/TableData";
import { useAppSelector } from "../../hooks/hooks";
import {AccountsModel, CampaignModel, ProfilesModel, PropertyType} from "../../models/models";
import { fetchAccounts, selectAllAccounts, selectTotalItems } from "../../store/AccountsSlice/AccountsSlice";
import * as React from "react";

export default function Accounts() {

    const accounts: AccountsModel[] | CampaignModel[] | ProfilesModel[] | [] = useAppSelector(selectAllAccounts);
    const totalItems = useAppSelector(selectTotalItems);

    const properties = ['id', 'email', 'authToken', 'creationDate'] as PropertyType[];
    return (
        <TableData
            data={accounts}
            totalItems={totalItems}
            fetchData={fetchAccounts}
            properties={properties}
        />
    )
}
