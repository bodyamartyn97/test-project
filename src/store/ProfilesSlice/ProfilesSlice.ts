import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProfilesModel } from '../../models/models';
import type { RootState } from '../store';
import getFilteredData from '../../common/getFilteredData';
import { SortTypes } from '../../models/sortModel';

const PROFILES_URL = './src/data/profiles-db.json';

export const fetchProfiles: AsyncThunk = createAsyncThunk(
    'profiles/fetchProfiles',
    async ({ sort, searchBy, searchValue, currentPage, itemsPerPage }: SortTypes) => {
        const response = await axios.get(PROFILES_URL);
        return getFilteredData({ searchBy, searchValue, currentPage, sort, itemsPerPage, response: response.data });
    }
);

interface ProfilesState {
    profiles: ProfilesModel[] | [],
    totalItems: number
}

const initialState: ProfilesState = {
    profiles: [],
    totalItems: 0
};


const profilesSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfiles.fulfilled, (state, action) => {
                state.profiles = action.payload.data;
                state.totalItems = action.payload.totalItems;
            })
    },
});

export const selectAllProfiles = (state: RootState) => state.profiles.profiles;
export const selectTotalProfiles = (state: RootState) => state.profiles.totalItems;

export default profilesSlice.reducer;
