import React, {useEffect, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const LoginPage = () => {
  const {user, loginUser} =useAuth()
  const naviagete = useNavigate()
  const loginForm = useRef(null)

  useEffect(()=>{
    if(user) {
      naviagete('/')
    }
  }, [])

  const handleSubmit =(e) => {
    e.preventDefaul()
    console.log('Form submitted')
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value
    const userInfo = {email, password}
    loginUser(userInfo)
  }

  return (
    <div>
     <form ref={loginForm} onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='enter username'/>
        <input type='password' name='password' placeholder='enter password'/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default LoginPage
