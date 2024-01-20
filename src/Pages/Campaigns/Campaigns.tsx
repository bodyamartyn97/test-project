import TableData from "../../components/TableData";
import { useAppSelector } from "../../hooks/hooks";
import {CampaignModel, PropertyType} from "../../models/models";
import { fetchCampaigns, selectAllCampaigns, selectTotalCampaigns } from "../../store/CampaignsSlice/CampaignsSlice";
import * as React from "react";

export default function Campaigns() {
    const campaigns: CampaignModel[] = useAppSelector(selectAllCampaigns);
    const totalItems = useAppSelector(selectTotalCampaigns);

    const properties = ['id', 'clicks', 'cost', 'creationDate'] as PropertyType[];
    return (
        <TableData
            data={campaigns}
            totalItems={totalItems}
            fetchData={fetchCampaigns}
            properties={properties}
        />
    )
}
