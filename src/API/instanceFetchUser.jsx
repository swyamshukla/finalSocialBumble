import {Instance} from '../config/Instance'




export let ApiHandle =async(gender)=>{
  try{

   let response = await Instance.get(`?gender=${gender.toLowerCase()}&results=100`)
   let data =  response.data
   return data
  }
  catch(error){
    console.log(error)
    throw(error)
  }
}

