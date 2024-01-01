import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/useAuth";

// const token = localStorage.getItem("access-token");
const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const { normalRegister, updateUser, webUrl } = UseAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data?.password !== data?.confirm_password) {
      setErrorMsg("Password didn't match. Check Again");
      return;
    }
    normalRegister(data?.email, data?.password)
      .then(() => {
        updateUser(data?.name, data?.photoURL)
          .then(() => {
            axios
              .post(`${webUrl}/users/reg`,
                { name: data?.name, email: data?.email, photo: data?.photoURL },
                {
                  "Content-Type": "application/json",
                }
              )
              .then((data) => {
                if (data.data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: "Ya!..",
                    text: `Sign up successful.`,
                  }),
                    navigate("/");
                }
              });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "OOps!..Sign up failed",
              text: `${error.message}`,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "OOps!..",
          text: `Sign up failed. Use a new email.`,
        });
      });
  };
  return (
    <div className="md:mt-20 mt-52">
      <div className="overflow-hidden min-h-screen">
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center pb-6">
              <h1 className="text-3xl font-bold sm:text-3xl text-customGold">
                REGISTER
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div>
                <label className="sr-only">Name</label>
                <div className="relative">
                  <input
                    {...register("name")}
                    type="text"
                    required
                    className="w-full rounded-lg border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="enter your name"
                  />
                  {errors?.name && (
                    <span className="text-red-500 font-light">
                      Name is required.
                    </span>
                  )}
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
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <input
                    {...register("email")}
                    type="email"
                    required
                    className="w-full rounded-lg border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="Enter email"
                  />
                  {errors?.email && (
                    <span className="text-red-500 font-light">
                      Email field is required
                    </span>
                  )}
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
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      pattern: /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.{6,})/,
                    })}
                    type="password"
                    required
                    className="w-full rounded-lg border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="Enter password"
                  />
                  {errors?.password && (
                    <span className="text-red-500 font-light">
                      The password should not less than 6 characters. Use at least
                      one capital letter and special character.
                    </span>
                  )}
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
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    {...register("confirm_password")}
                    className="w-full rounded-lg border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="Type password again"
                  />
                  {errors?.confirm_password && (
                    <span className="text-red-500 font-light">
                      Confirm Password field is required
                    </span>
                  )}
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
              <div>
                <label htmlFor="email" className="sr-only">
                  Photo Url
                </label>
                <div className="relative">
                  <input
                    {...register("photoURL")}
                    type="url"
                    required
                    className="w-full rounded-lg border-gray-200 text-gray-900 p-4 pe-12 text-base font-medium shadow-sm"
                    placeholder="Enter photo url"
                  />
                  {errors?.photoURL && (
                    <span className="text-red-500 font-light">
                      This field is required too
                    </span>
                  )}
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
              <div className="flex items-center justify-between">
                <p className="text-base font-medium text-customGray">
                  Have Account?
                  <a className="underline ml-3" href="/login">
                    Sign In
                  </a>
                </p>
                <input
                  type="submit"
                  className="hover:bg-customGold bg-customGold active:bg-custom transition duration-500 px-5 py-4 text-base font-semibold text-white cursor-pointer hover:font-bold rounded-md"
                  value="Sign Up"
                />
              </div>
            </form>
            {errorMsg && (
              <p className="text-red-500 font-semibold text-center text-base my-7">
                {errorMsg}
              </p>
            )}
          </div>
          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt="Welcome"
              src="https://lh3.googleusercontent.com/p/AF1QipOp-zvRIpidecDU9RPBPZ23lTiJM4aPBYVDOhzu=s680-w680-h510"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
