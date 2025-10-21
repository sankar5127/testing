import { createSlice } from "@reduxjs/toolkit";

const adminReducer = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        create: (state,action) => {
            return [...state,action.payload];
        },
        update: (state,action) => {
            let {name, email} = action.payload;
            /*
            let existUsers = state.filter((user) => user.name != name);
            return [...existUsers, action.payload];
            */
           let existUsers = state.map((user) => (user.name == name) ? {...user, email:email} : user);
            return existUsers;
        }   
    }
});

export const {create,update} = adminReducer.actions;
export default adminReducer.reducer;
