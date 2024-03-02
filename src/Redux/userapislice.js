import { baseURL } from "../Components/Api/Url"
import { apiSlice } from "./apislice"
 
const USERS_URL = `${baseURL}account`

export const userapislice = apiSlice.injectEndpoints({
   endpoints:(builder) =>({
       login : builder.mutation({
           query:(data)=>({
               url : `${USERS_URL}/login/`,
               method : 'POST',
               body : data
           })
       }),
       logout : builder.mutation({
           query:()=>({
               url : `${USERS_URL}/userlogout/`,
               method : 'POST',
              
           })
       }),
   })
})

export const {useLoginMutation,useLogoutMutation}=userapislice