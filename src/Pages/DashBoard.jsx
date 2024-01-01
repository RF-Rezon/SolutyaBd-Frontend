import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import Spninner from "../Utils/Spninner";
import useHr from './../Hooks/useHr';

const DashBoard = () => {
 
  const [is_Admin, is_Admin_Loading] = useAdmin();
  const [is_Hr , is_Hr_loading] = useHr();

  if (is_Admin_Loading) return <Spninner/>
  if (is_Hr_loading) return <Spninner/>

  return (
    <>
      <div className="md:mt-20 mt-52 mx-auto md:pl-60">
        <div className="drawer lg:drawer-open min-h-screen pt-16">
          <input id="my-drawer-2 " type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet />
          </div>
          <div className="drawer-side">
            <ul className="menu p-4 w-[20%] h-full text-base-content">
              {is_Admin ? (
                <div>
                  <li>
                    <Link className="text-gray-800 font-medium bg-customGold hover:bg-white hover:text-black my-3" to="ManageJobsByCEO">All Jobs</Link>
                  </li>
                  <li>
                    <Link className="text-gray-800 font-medium bg-customGold hover:bg-white hover:text-black my-3" to="manageMembersByCEO">All Members Of Solutya</Link>
                  </li>
                </div>
              ) : is_Hr ? (
                <div>
                  <li>
                    <Link className="text-gray-800 font-medium bg-customGold hover:bg-white hover:text-black my-3" to="add_a_job">Add Jobs</Link>
                  </li>
                  <li>
                    <Link className="text-gray-800 font-medium bg-customGold hover:bg-white hover:text-black my-3" to="My_PostedJobs">My Requested Jobs</Link>
                  </li>
                </div>
              ) : (
                <div>
                  
                  <li>
                    <Link className="text-gray-800 font-medium bg-customGold hover:bg-white hover:text-black my-3" to="enrolled">Message For you.</Link>
                  </li>
                </div>
              )
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;