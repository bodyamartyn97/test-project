import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from './AccountsSlice/AccountsSlice';
import profilesReducer from './ProfilesSlice/ProfilesSlice';
import campaignsReducer from './CampaignsSlice/CampaignsSlice';
// ...

export const store = configureStore({
    reducer: {
        accounts: accountsReducer,
        profiles: profilesReducer,
        campaigns: campaignsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;