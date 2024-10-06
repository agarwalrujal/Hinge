import React from 'react'
import LoginPage from './pages/LoginPage'
import { GoogleOAuthProvider } from '@react-oauth/google'


const App = () => {
  return (
    <GoogleOAuthProvider clientId='127286865235-du28eiuu7qbiv4p6f1c64eijq1bv5odn.apps.googleusercontent.com'>
     
     <LoginPage />
    </GoogleOAuthProvider>
  )
}

export default App
