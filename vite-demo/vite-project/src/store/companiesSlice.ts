import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Company, getCompanies } from '../api/getCompanies';
import { RootState } from './store';

interface CompaniesState {
    companies: Company[]
}

export const fetchCompanies = createAsyncThunk(
    'companies/fetchCompanies',
    async (data, thunkAPI) => {
        const accessToken = (thunkAPI.getState() as RootState).login.loggedInUser?.accessToken;
        const response = await getCompanies(accessToken || "");
        return response;
    }
)

const initialState = { companies: [] } as CompaniesState

const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCompanies.fulfilled, (state, action) => {
          state.companies = action.payload;
        })
      }

})

//export const { } = companiesSlice.actions
export default companiesSlice.reducer