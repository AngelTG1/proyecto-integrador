import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRouters({children}) {

    const { state } = useLocation()


    return state?.logged ? children : <Navigate to="/login" />;

}