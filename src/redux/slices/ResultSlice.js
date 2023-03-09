import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    resultList:[],
    selectedResult:[],
    isLoading:false
};

const resultSlice = createSlice({
    name:"result",
    initialState,
    extraReducers:(builder)=>{
        
    }
})