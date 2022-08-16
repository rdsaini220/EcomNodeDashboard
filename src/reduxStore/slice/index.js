import { combineReducers } from '@reduxjs/toolkit'
import authSlice from "./auth.js"

const rootReducers = combineReducers({
    auth: authSlice,
})

export default rootReducers;