import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = ""
        }
    },
    extraReducers: (builder) => {

    }
})

export const {reset} = authSlice.actions

export default authSlice.reducer