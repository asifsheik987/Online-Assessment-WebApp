import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllQuestions = createAsyncThunk(
    "question/getAllQuestions",
    async ()=>{
        const response = await axios.get(`http://localhost:8002/questions/allQuestions`);
        return response.data;
    }
)
export const getQuestionsBySubject = createAsyncThunk(
    "geustion/getQuestionBySubject",
    async (subjectName)=>{
        const response = await axios.get(`http://localhost:8002/questions/getQuestionsBySubject/${subjectName}`);
        return response.data;
    }
)
export const getQuestionsForExam = createAsyncThunk(
    "question/getQForExam",
    async (examId)=>{
        const response = await axios.get(`http://localhost:8002/questions/getQuestionsForExam/${examId}`);
        return response.data;
    }
)
export const addQToExam = createAsyncThunk(
    "question/addQToExam",
    async ({examId,questionId})=>{
        const response = await axios.put(`http://localhost:8002/questions/addQuestionToExam/${examId}/${questionId}`);
        return response.data;
    }
)
export const addNewQuestion = createAsyncThunk(
    "question/newQuestion",
    async (question)=>{
        const response = await axios.post("http://localhost:8002/questions/addQuestion", question);
        return response.data;
    }
)
export const updateQuestion = createAsyncThunk(
    "question/updateQuestion",
    async ({questionId,updatedQ})=>{
        const response = await axios.put(`http://localhost:8002/questions/question/${questionId}`, updatedQ);
        return response.data;
    }
)
export const deleteQuestn = createAsyncThunk(
    "question/deleteQuestion",
    async (questionId)=>{
        const response = await axios.delete(`http://localhost:8002/questions/deleteQuestion/${questionId}`);
        return response.data;
    }
)
export const deleteQFromExam = createAsyncThunk(
    "question/delQFromExam",
    async ({examId,questionId})=>{
        const response = await axios.put(`http://localhost:8002/questions/deleteQuestionFromExam/${examId}/${questionId}`);
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
        builder.addCase(getQuestionsBySubject.fulfilled,(state,action)=>{
            state.selectedQ = action.payload;
            state.isLoading = false;
        })
        builder.addCase(addQToExam.fulfilled,(state,action)=>{
            //state.selectedQ = action.payload;
            state.isLoading = false;
        })
        builder.addCase(addNewQuestion.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.questionList.push(action.payload);
        })
        builder.addCase(getQuestionsForExam.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.selectedQ = action.payload;
        })
        builder.addCase(updateQuestion.fulfilled,(state,action)=>{
            state.isLoading = false;
        })
        builder.addCase(deleteQuestn.fulfilled,(state,action)=>{
            state.isLoading = false;
        })
        builder.addCase(deleteQFromExam.fulfilled,(state,action)=>{
            state.isLoading = false;
        })
    }

})
const {reducer} =questionSlice;
export default reducer;
    