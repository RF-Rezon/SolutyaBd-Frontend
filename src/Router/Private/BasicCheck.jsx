import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/useAuth";
import Spninner from "../../Utils/Spninner";

const BasicCheck = ({ children }) => {
  const {LogOut, user, loading } = UseAuth();
  const navigate = useNavigate();

  const alertHandler = () => {
    Swal.fire({
      title: "NO LOGGED IN!",
      text: `You have to log in first.`,
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go to login page",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  };

  const alertHandler2 = () => {
    Swal.fire({
      title: "You are not allowed as a normal user.",
      text: `You have to be positioned as an "Hr" declared by the CEO!`,
      icon: "error",
    }).then(() => {
      LogOut();
    });
  };



  if (loading) {
    return <Spninner />;
  }
  if (!user || !user?.email) {
    alertHandler();
  }else if(!user?.role == "admin" || !user?.role == "hr" ){
    alertHandler2();
  } 
  
  else {
    return children;
  }
};

export default BasicCheck;
