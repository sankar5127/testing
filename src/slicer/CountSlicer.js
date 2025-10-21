import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state+1;
        },
        decrement: (state) => {
            return state-1;
        },
        reset: (state) => {
            return 0;
        }
    }
});
export const {increment, decrement,reset} = counterReducer.actions;
export default counterReducer.reducer;