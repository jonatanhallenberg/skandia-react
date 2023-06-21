import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { loginUser } from '../api/loginUser';

interface LoginState {
  isLoggedIn: boolean,
  loggedInUser?: {
    accessToken: string,
    refreshToken: string
  }
}

interface LoginActionType {
  username: string,
  password: string
}

const initialState = { isLoggedIn: false } as LoginState
console.log('initialState', initialState);

export const logIn = createAsyncThunk(
  'login/logIn',
  async ({ username, password }: LoginActionType, thunkAPI) => {
    const response = await loginUser(username, password);
    return response;
  }
)

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // logIn(state, action: PayloadAction<LoginActionType>) {
    //   state.isLoggedIn = true;
    //   state.loggedInUser = action.payload;
    // },
    logOut(state) {
      state.isLoggedIn = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.loggedInUser = action.payload;
    })
  }
})

export const { logOut } = loginSlice.actions
export default loginSlice.reducer