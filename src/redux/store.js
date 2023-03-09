import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/AuthSlice";
import subjectReducer from "./slices/SubjectSlice";
import examReducer from "./slices/examSlice"
import questionReducer from "./slices/QuestionSlice"

const store = configureStore({
    reducer:{
        auth:authReducer,
        subject:subjectReducer,
        exam:examReducer,
        question:questionReducer
    }
})

export default store;
