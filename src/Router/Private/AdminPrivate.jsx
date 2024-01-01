import { Navigate, useLocation } from "react-router";

import UseAuth from "../../Hooks/useAuth";
import Spninner from "../../Utils/Spninner";
import useAdmin from './../../Hooks/useAdmin';


const AdminPrivate = ({ children }) => {
    const { user, loading } = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <Spninner/>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/"></Navigate>
};

export default AdminPrivate;