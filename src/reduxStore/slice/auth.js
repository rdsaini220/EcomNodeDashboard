import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
    user: {},
    isToken: '',
    isLogout: false,
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    // Login slices 
        requestLogin: (state) => {
            return { 
                ...state, 
                isLoading: true,
                isError: false,
                isSuccess: false,
                message: '',
                user: {},
                isToken: '',
                isLogout: false,
            }
        },
        successLogin: (state, action) => {
            return {
                ...state,
                isSuccess: true,
                isLoading: false,
                message: action.payload.message,
                user: action.payload.data,
                isToken: action.payload.token,
            }
        },
        failedLogin: (state, action) => {
            return { 
                ...state, 
                isSuccess: false,
                isLoading: false,
                isError: true,
                message: action.payload.message,
                user: {},
                isToken: ''
            }
        },
    // Logout slices 
        requestLogout: (state) => {
            return { 
                ...state, 
                isLoading: true 
            }
        },
        successLogout: (state, action) => {
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: action.payload.success,
                message: action.payload.message,
                user: {},
                isToken: '',
                isLogout: true,
            }
        },
        failedLogout: (state, action) => {
            return { 
                ...state, 
                isLoading: false,
                isSuccess: false,
                isError: action.payload.success,
                message: action.payload.message,
                user: {},
                isToken: ''
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { 
    requestLogin, successLogin, failedLogin, 
    requestLogout, successLogout, failedLogout } = userSlice.actions

export default userSlice.reducer