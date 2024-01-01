import { motion } from 'framer-motion';
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/useAuth";

const Nav = () => {
 
 
  const { user, LogOut } = UseAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to log out surely??`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: `Logged Out Sucessfully`,
            }),
              navigate("/");
          })
          .catch((error) => {});
      }
    });
  };
  return (
    <div>
      <header className="fixed top-0 w-full z-50 bg-custom bg-opacity-90 border-white py-10 pb-28 border-b-[3px] md:pb-3 md:py-3 border-b-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex md:flex-row flex-col h-16 items-center justify-between gap-4">
            <motion.div whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }} className="md:flex md:items-center md:gap-12">
            
              <Link className="block text-teal-600" to="/">
                <span className="sr-only"></span>
                <p className="text-2xl font-semibold">Solutya DashBoard</p>
              </Link>
             
            </motion.div>

            <div>  
              <nav aria-label="Global">
                <ul className="flex items-center md:gap-8 gap-4 text-sm">
                 
                  <motion.li whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  
                    <NavLink
                      className="text-lg font-medium hover:font-semibold transition-all 0.3 sec ease-in-out"
                      to="/jobs"
                      activeClassName="active"
                    >
                      Jobs
                    </NavLink>
                    
                  </motion.li>

                  <motion.li whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                 
                    <NavLink
                      className="text-lg font-medium hover:font-semibold transition-all 0.3 sec ease-in-out text-red"
                      to="/dashboard"
                      activeClassName="active"
                    >
                      Dashboard
                    </NavLink>
                   
                  </motion.li>
                  {user && (
                    <>
                      <motion.li whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                        <Link className="avatar" to="/">
                          {user?.photoURL && (
                            <motion.div whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-full">
                              <img src={user?.photoURL} />
                            </motion.div>
                          )}
                        </Link>
                      </motion.li>
                    </>
                  )}
                </ul>
              </nav>
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              {!user ? (
                <motion.div whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                  
                  <Link
                    className=" hover:bg-custom bg-customGold active:bg-custom transition duration-500 px-5 py-2.5 text-base font-medium shadow cursor-pointer rounded-md"
                    to="/login"
                  >
                    Sign In
                  </Link>
                  
                </motion.div>
              ) : (
                <motion.div whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                 
                  <Link
                    className=" hover:bg-custom bg-customGold active:bg-custom transition duration-500 px-5 py-2.5 text-base font-medium shadow cursor-pointer rounded-md"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Link>
                 
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
