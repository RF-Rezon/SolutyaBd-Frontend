import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "./useAuth";


const useHr = () => {
    const {user, loading, webUrl} = UseAuth();
    
    const {data: is_Hr , isLoading: is_Hr_loading} = useQuery({
        queryKey: ['isHr', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${webUrl}/users/hr/${user?.email}`, 
              );
            return res.data.hr;
        }
    })
    
    return [is_Hr , is_Hr_loading];
    
}
export default useHr;