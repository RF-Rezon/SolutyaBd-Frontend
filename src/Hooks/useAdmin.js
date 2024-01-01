import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading, webUrl } = UseAuth();

  const { data: is_Admin, isLoading: is_Admin_Loading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${webUrl}/users/admin/${user?.email}`, 
      );
      return res.data.admin;
    },
  });
  return [is_Admin, is_Admin_Loading];
};
export default useAdmin;
