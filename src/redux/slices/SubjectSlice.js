import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllSubjects = createAsyncThunk(
    "subject/allSubjects",
    async ()=>{
        const response = await axios.get(`http://localhost:8002/subjects/allSubjects`);
        return response.data;
    }

);
export const addSubject = createAsyncThunk(
    "subject/addSubject",
    async (subject)=>{
        const response = await axios.post(`http://localhost:8002/subjects/addSubject`, subject);
        console.log(response);
        return response.data;
       
    }
);
export const deleteSubject = createAsyncThunk(
    "subject/deleteSubject",
    async (id)=>{
       const response = await axios.delete(`http://localhost:8002/subjects/deleteSubject/${id}`);
       return response.data;
    }
);

const initialState = {
    subjectList:[]
}

const subjectSlice = createSlice({
    name:"subject",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getAllSubjects.fulfilled,(state,action)=>{
            state.subjectList = action.payload;
        })
        builder.addCase(getAllSubjects.pending,(state,action)=>{

        })
        builder.addCase(addSubject.fulfilled,(state,action)=>{
            state.subjectList.push(action.payload);
        })
        builder.addCase(deleteSubject.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.subjectList=state.subjectList.filter((subject)=>(subject.id)!==action.payload);
        })

    }

})

const {reducer} = subjectSlice;
export default reducer;