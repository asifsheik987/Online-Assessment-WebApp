import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllQuestions = createAsyncThunk(
    "question/getAllQuestions",
    async ()=>{
        const response = await axios.get(`http://localhost:8002/questions/allQuestions`);
        return response.data;
    }
)
const initialState = {
    questionList:[],
    selectedQ:[],
    isLoading:false
}
const questionSlice = createSlice({
    name:"question",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getAllQuestions.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(getAllQuestions.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.questionList = action.payload;
        })
        builder.addCase(getAllQuestions.rejected,(state,action)=>{
            state.isLoading = false;
        })
    }

})
const {reducer} =questionSlice;
export default reducer;
    