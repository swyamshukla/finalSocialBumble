import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  regUser: JSON.parse(localStorage.getItem("users")) || [],
  uploadData: JSON.parse(localStorage.getItem("upload")) || [],
  currUser: JSON.parse(localStorage.getItem("log")) || null,
};

let authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.regUser.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.regUser));
    },

    login: (state, action) => {
      state.currUser = action.payload;
      localStorage.setItem("log", JSON.stringify(state.currUser));
    },

    logout: (state) => {
      localStorage.removeItem("log");
      state.currUser = null;
    },
    uploadData:(state,action)=>{
      let formData  = action.payload;
      regUser.find((elem)=> elem.email === formData.email)
    }


  },
});

export const { signup, login, logout, uploadData } = authSlice.actions;
export default authSlice.reducer;
