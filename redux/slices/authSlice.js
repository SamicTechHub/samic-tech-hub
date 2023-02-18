import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
    auth: {user: null, isLoggedIn: false, token: null, loggedOutFrom: null}
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action){
            state.auth.user = action.payload,
            state.auth.isLoggedIn = true,
            state.auth.token = action.payload.token
            state.auth.loggedOutFrom = null
        },
        logOut(state){
            state.auth.user = null,
            state.auth.isLoggedIn = false
            state.auth.token = null
        },
        clearToken(state){
            state.auth.token = null
        },
        addToken(state, action){
            state.auth.token = action.payload
        },
        logOutFalse(state){
            state.auth.isLoggedIn = false
        },
        clearUserInfo(state){
            state.auth.user = null
        },
        logInRedirect(state, action){
            state.auth.loggedOutFrom = action.payload
        },
        updateUserInfo(state, action){
            state.auth.user = action.payload
        },
            // Special reducer for hydrating the state. Special case for next-redux-wrapper
        extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
            ...state,
            ...action.payload.auth,
            };
        },
        },
    }
})

export const {login, logOut, clearToken, addToken, logOutFalse, clearUserInfo, logInRedirect, updateUserInfo} = authSlice.actions
export default authSlice.reducer