import { createSlice } from "@reduxjs/toolkit";


let initialState =()=>{
    usersHandler : []
}
createSlice({
    name:'formUpload',
    initialState,
    reducers:{
        uploadData: (state, action) => {
        const newData = action.payload;
        //    let user = usersHandler.find((elem)=> elem === newData)
        //     if(user){
                
        //     }
        //     else{
        //         state.usersHandler.push()
        //     }
      

    },
    }
})