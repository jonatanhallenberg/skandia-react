import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice';
import companiesReducer from './companiesSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer,
        companies: companiesReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch