import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllExams=createAsyncThunk(
    "exam/allExams",
    async ()=>{
        const response = await axios.get(`http://localhost:8002/exam/allExams`);
        return response.data;
    }
)
export const addExam = createAsyncThunk(
    "exam/addExam",
    async (exam)=>{
        const response = await axios.post(`http://localhost:8002/exam/addExam`, exam);
        return response.data;
    }
)
export const getExamsForUser = createAsyncThunk(
    "exam/getExamsForUser",
    async (userId)=>{
        const response = await axios.get(`http://localhost:8002/exam/getByUserId/${userId}`);
        return response.data;
    }
)
export const getExamById = createAsyncThunk(
    "exam/getExamById",
    async (examId)=>{
        const response = await axios.get(`http://localhost:8002/exam/getExam/${examId}`);
        return response.data;
    }
)
export const getExamBySubject = createAsyncThunk(
    "exam/getExamBySubject",
    async (subjectName)=>{
        const response = await axios.get(`http://localhost:8002/exam/getExamOnSubjectName/${subjectName}`);
        return response.data;
    }
)
const initialState = {
    examList:[],
    selectedExam:[]
}
const examSlice = createSlice({
    name:"exam",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getAllExams.fulfilled,(state,action)=>{
            state.examList = action.payload;
        })
        builder.addCase(getAllExams.pending,(state,action)=>{

        })
        builder.addCase(addExam.fulfilled,(state,action)=>{
            state.examList.push(action.payload);
        })
        builder.addCase(getExamsForUser.fulfilled,(state,action)=>{
            state.examList = action.payload;
        })
        builder.addCase(getExamById.fulfilled,(state,action)=>{
            state.selectedExam = action.payload;
        })
        builder.addCase(getExamBySubject.fulfilled,(state,action)=>{
            state.selectedExam = action.payload;
        })
    }
})

const {reducer}=examSlice;
export default reducer;