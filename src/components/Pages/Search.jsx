import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Instance} from '../../config/Instance'
import SearchCard from '../card/SearchCard'
import {QueryClient, useQuery, useQueryClient} from '@tanstack/react-query'
import { data } from 'react-router'
import { ApiHandle } from '../../API/instanceFetchUser'
import { div } from 'framer-motion/client'
import { toast } from 'react-toastify'



const Search = () => {
  let currUser =useSelector((state)=>state.auth.currUser);
  console.log(currUser);
  
  const gender = currUser?.gender;
  // useEffect(()=>{
  //  if(gender){
  //    ApiHandle(gender);
  //  }
  // },[gender])


  // Queries
  const {isPending,data,isError,error}= useQuery({ queryKey: ['searchUser'], queryFn: ()=>ApiHandle(gender),
   
    staleTime:Infinity
  })
  console.log(data)

  if (isPending)
    return (
      <div className="flex items-center justify-center h-screen bg-yellow-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-700 font-medium text-lg">Loading...</p>
        </div>
      </div>
    );
console.log(data);



  return (
    <div> 
{/* 
      {
      data.map((elem)=>{
        return <SearchCard />
      })} */}
      
    </div>
  )
}

export default Search