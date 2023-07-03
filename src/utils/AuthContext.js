import {useContext, useState, useEffect, createContext} from 'react'
import { json } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    localStorage.getItem('authToken')
    const [authTokens, setAuthTokens] = useState(null)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(false)
    // let history =useHistory()

    useEffect(()=>{
        setLoading(false)
    }, [])
    
    const loginUser= async (e) => {
        e.preventDefault()  
        let response = await fetch(
          //'http://127.0.0.1:8000/api/token', 
           'http://localhost:3000/login',
          {
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        if(response.status ==200){
          console.log(response.status)
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authToken', JSON.stringify(data))
            // history.push('/')
        }else{
          console.log(response.status)
          alert('somthing went wrong')
        }
    }
    const logoutUser=() => {
        setAuthTokens()
    }
    const registerUser =(userInfo) => {

    }
    const checkUserStatus={
        
    }
    const contextData={
        user:user,
        loginUser:loginUser,
        logoutUser,
        registerUser,
    }
    return (
      <AuthContext.Provider value={contextData}>
        {loading ?<p>loading...</p> : children}
      </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext