import React from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../../Hooks/useAuth';
import useHr from '../../Hooks/useHr';
import Spninner from '../../Utils/Spninner';

const HrPrivate = ({children}) => {
    const { user, loading } = UseAuth();
    const [is_Hr , is_Hr_loading] = useHr();

    if(loading || is_Hr_loading){
        return <Spninner/>
    }

    if (user && is_Hr) {
        return children;
    }
    return <Navigate to="/"></Navigate>
};

export default HrPrivate;