import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseURL } from '../Components/Api/Url';


// const baseQuery=fetchBaseQuery({baseUrl:'http://www.shop-electron.shop/api/'})
const baseQuery=fetchBaseQuery({baseUrl:baseURL})

// const baseQuery=fetchBaseQuery({baseUrls:"http://127.0.0.1:8000"})


export const apiSlice=createApi({
    baseQuery,
    tagTypes:['User'],
    endpoints:(builder)=>({})
})