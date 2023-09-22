import { createContext, useContext } from 'react';

export type LoginState = {
    isLoggedIn: boolean,
    loggedInUser?: {
        accessToken: string,
        refreshToken: string
    }
}

export type UserContextType = {
    userState: LoginState,
    setUserState: (newState: LoginState) => void
}

export const UserContext = createContext<UserContextType>({
    userState: {
        isLoggedIn: false
    },
    setUserState: () => { console.log(' Not implemented! ')}
});

export const useUserContext = () => useContext(UserContext);