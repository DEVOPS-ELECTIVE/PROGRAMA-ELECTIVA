import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../modules/auth/pages/login/login'
import Register from '../modules/auth/pages/register/register'
import ForgotPassword from '../modules/auth/pages/forgot.password/forgot.password'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot.password" element={<ForgotPassword />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter

