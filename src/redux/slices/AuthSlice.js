import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../authentication/services/AuthenticationService";

const user =JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
    "auth/register",
    async({username,email,password})=>{
        const response = await authService.register(username,email,password);
        console.log(response);
        return response;
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async({username,password})=>{
        const response = await authService.login(username,password);
        return {user: response};
    }
);
export const logout = createAsyncThunk(
    "auth/logout",
    async ()=>{
     await authService.logout();
    } 
);

const initialState = user
?{isLoggedIn:true,user}
:{isLoggedIn:false,user:null};

const authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers:{
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },

    }
})
const {reducer} =authSlice;
export default reducer;