import React from 'react'
import { Navigate, Outlet } from 'react-router'
const ProtectedRoute = ({ user, loading }) => {
    if (loading) {
        return <p>Checking authentication...</p>
    }
    return (
        user
            ? <Outlet />
            : <Navigate to="/login" replace />
    )
}

export default ProtectedRoute
