import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/HomePage'
import FavPage from './components/favs/FavPage'
import LoginPage from './components/login/LoginPage'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favs" element={<FavPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}