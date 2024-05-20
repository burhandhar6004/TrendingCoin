import React from 'react'
import useAuthStatus from '../Hooks/useAuthStatus'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const  {loggedin , checkStatus } = useAuthStatus()

    if(checkStatus){
        return(
            <h1> Loading......</h1>
        )
    }

    return loggedin ? <Outlet/> : <Navigate to={"/"}/>
}

export default PrivateRoutes