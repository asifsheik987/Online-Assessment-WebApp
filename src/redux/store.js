import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/AuthSlice";
import subjectReducer from "./slices/SubjectSlice";
import examReducer from "./slices/examSlice"
import questionReducer from "./slices/QuestionSlice"
import resultReducer from "./slices/ResultSlice"

const store = configureStore({
    reducer:{
        auth:authReducer,
        subject:subjectReducer,
        exam:examReducer,
        question:questionReducer,
        result:resultReducer
    }
})

export default store;
