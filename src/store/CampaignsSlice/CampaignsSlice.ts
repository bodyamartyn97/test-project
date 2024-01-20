import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CampaignModel } from '../../models/models';
import type { RootState } from '../store';
import getFilteredData from '../../common/getFilteredData';
import { SortTypes } from '../../models/sortModel';


// const CAMPAIGNS_URL = 'https://658c101f859b3491d3f56763.mockapi.io/accounts';
const CAMPAIGNS_URL = './src/data/campaigns-db.json';

export const fetchCampaigns: AsyncThunk = createAsyncThunk(
    'campaigns/fetchCampaigns',
    async ({ sort, searchBy, searchValue, currentPage, itemsPerPage }: SortTypes) => {
        const response = await axios.get(CAMPAIGNS_URL);
        return getFilteredData({ searchBy, searchValue, currentPage, sort, itemsPerPage, response: response.data });
    }
);

interface CampaignState {
    campaigns: CampaignModel[],
    totalItems: number
}

const initialState: CampaignState = {
    campaigns: [],
    totalItems: 0
};


const campaignsSlice = createSlice({
    name: 'campaigns',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampaigns.fulfilled, (state, action) => {
                state.campaigns = action.payload.data;
                state.totalItems = action.payload.totalItems;
            })
    },
});

export const selectAllCampaigns = (state: RootState) => state.campaigns.campaigns;
export const selectTotalCampaigns = (state: RootState) => state.campaigns.totalItems;

export default campaignsSlice.reducer;
