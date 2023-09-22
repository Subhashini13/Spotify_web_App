import React, { useState, useEffect} from 'react'
import axios from 'axios';
export default function useAuth() {
 const [accessToken,setAccesstoken] =useState()
 const [refreshToken, setRefreshToken] = useState()
 const [expiresIn, setExpiresIn] = useState()

 useEffect(() => {
   axios.post('http://localhost:3002/login',{
    code,
   }).then(res =>{
    console.log(res.data)
   })
 
   
 }, [code])
 
}
