import React from 'react';

import { Navigate } from 'react-router-dom';
import useAuth from './Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();


    // we'hv to wait here 
    if (loading) return <h1 className="text-5xl">Loading</h1>
    // 

    if (!user?.email) {
        return <Navigate to='/login' />
    }



    return children;
};

export default PrivateRoute;