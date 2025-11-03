import React from 'react'
import { getUserFromToken } from '../../lib/auth'
import { Navigate } from 'react-router'


const ProtectedRoute = ({ children }) => {
    const user = getUserFromToken()
    if (!user) return <Navigate to="/login" replace />
    return children
}

export default ProtectedRoute