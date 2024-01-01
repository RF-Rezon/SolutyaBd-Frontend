import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "./../../Hooks/useAuth";


const Login = () => {

  const navigate = useNavigate();
  const { normalLogin, LoginWithGoogle, webUrl } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const handleGoogleLogin = () => {

    LoginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        axios.post(`${webUrl}/users/log`, { name: loggedUser?.displayName, email: loggedUser?.email , photo: loggedUser?.photoURL})
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Ya!..",
            text: `Sign in successfully with google.`
          }),
            navigate("/dashboard");
        });
      })
      .catch((err)=>{
        Swal.fire({
          icon: "error",
          title: "Oops!..",
          text: `Sign in problem with google. NB: ${err.message}`
        })
      })
     
  };

  const onSubmit = (data) => {
    normalLogin(data?.email, data?.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Ya!..",
          text: `Sign in successfully.`,
        }),
          navigate("/dashboard");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "OOps!..",
          text: `${err.message}`
        })
        navigate("/");
      });
  };

  const handleHide = () => {};

  return (
    <div className="md:mt-20 mt-52">
      <div className="overflow-hidden min-h-screen">
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center pb-6">
              <h1 className="text-3xl font-bold sm:text-3xl text-customGold">LOGIN</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label className="sr-only">Email</label>
                <div className="relative">
                  <input
                    {...register("email")}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-base font-medium shadow-sm text-gray-900 "
                    placeholder="Enter email"
                    type="email"
                  />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label className="sr-only">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    {...register("password")}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-base font-medium shadow-sm text-gray-900"
                    placeholder="Enter password"
                  />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      onClick={handleHide}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-customGray">
                  No account?
                  <a className="underline ml-3" href="/register">
                    Sign up
                  </a>
                </p>
                <input
                  type="submit"
                  className="hover:bg-customGold bg-customGold active:bg-custom transition duration-500 px-5 py-3 text-base font-semibold text-white cursor-pointer hover:font-bold rounded-md"
                  value="Sign In"
                />
              </div>
            </form>
            <div
              onClick={handleGoogleLogin}
              className="cursor-pointer bg-black w-3/5 p-5 flex items-center justify-center my-7 mx-auto mt-20 border-2 border-white rounded-md"
            >
              <div className="mx-auto">
                <FaGoogle fill="white" />
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt="Welcome"
              src="https://lh3.googleusercontent.com/p/AF1QipOWhldyamYKg2A6UE8tfr_ucKrYEwF5_3xkLUNt=s680-w680-h510"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;