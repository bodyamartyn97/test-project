import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AccountsModel } from '../../models/models';
import type { RootState } from '../store';
import getFilteredData from '../../common/getFilteredData';
import { SortTypes } from '../../models/sortModel';

const ACCOUNTS_URL = './src/data/accounts-db.json';

export const fetchAccounts: AsyncThunk = createAsyncThunk(
    'accounts/fetchAccounts',
    async ({ sort, searchBy, searchValue, currentPage, itemsPerPage }: SortTypes) => {
        const response = await axios.get(ACCOUNTS_URL);

        return getFilteredData({ searchBy, searchValue, currentPage, sort, itemsPerPage, response: response.data });
    }
);

interface AccountsState {
    accounts: AccountsModel[] | []
    totalItems: number
}

const initialState: AccountsState = {
    accounts: [],
    totalItems: 0
};


const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccounts.fulfilled, (state: AccountsState, action) => {
                state.accounts = action.payload.data;
                state.totalItems = action.payload.totalItems;
            })
    },
});

export const selectAllAccounts = (state: RootState) => state.accounts.accounts;
export const selectTotalItems = (state: RootState) => state.accounts.totalItems;

export default accountsSlice.reducer;
