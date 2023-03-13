import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStudentResult = createAsyncThunk(
    "result/getStudentResults",
    async (userName)=>{
        const response = await axios.get(`http://localhost:8002/result/resultForStudent/${userName}`);
        return response.data;
    }
)
export const addResult = createAsyncThunk(
    "result/addResult",
    async (data)=>{
        const response = await axios.post(`http://localhost:8002/result/addResult`, data);
        return response.data;
    }
)

const initialState = {
    resultList:[],
    selectedResult:[],
    isLoading:false
};

const resultSlice = createSlice({
    name:"result",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getStudentResult.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(getStudentResult.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.resultList=action.payload;
        })
        builder.addCase(addResult.fulfilled,(state,action)=>{
            state.selectedResult = action.payload;
            state.isLoading = false;
        })
        
    }
})

const { reducer } = resultSlice;
export default reducer;