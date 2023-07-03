import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
  const naviagete = useNavigate()
  const {user} = useAuth()
  return (
    <>
    <Link to='/'>Home</Link>    <span> | </span>
    {user ? (
      <>
      <p>Logout</p>
      {/*  */}
     </>
    ) : (
      <Link to='/login'>Log In</Link>
    )}
    {user && <p>Hi {user.username}</p>}
      </>
  )
}

export default Header
