import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/useAuth";


const Add_A_Job = () => {

    const {user, webUrl} = UseAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newObject = {
      ...data ,
      feedBack: ""
    }
    axios.post(`${webUrl}/newAddedJob`, newObject,
    {
      "Content-Type": "application/json",
    }
    )
    .then(res=> {
        Swal.fire({
            icon: "success",
            title: "Ya!..",
            text: `Request to CEO successfully.`
          })
    })
};

  return (
    <div className="md:w-2/5 px-6 min-h-screen overflow-hidden bg-white">
      <div className="my-48 md:my-0">
        <div className="bg-customGold border-b-black border-b-[3px] py-24 flex items-center justify-center my-10">
            <div className="text-4xl font-semibold ">
              <p>
                You Can Add Jobs Here As An Hr
              </p>
            </div>
          </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="py-5 font-semibold text-gray-800 text-base">
            Job Name
          </p>
          <div className="relative z-0 w-full mb-6 group">
            <select {...register("job_name")} className="select select-info w-full max-w-xs text-gray-800">
              <option className="text-gray-800" value="Technical Support Specialist">Technical Support Specialist</option>
              <option className="text-gray-800" value="Computer Programmer">Computer Programmer</option>
              <option className="text-gray-800" value="Data Analyst">Data Analyst</option>
              <option className="text-gray-800" value="Web Developer">Web Developer</option>
              <option className="text-gray-800" value="Sofware Engineer">Sofware Engineer</option>
              <option className="text-gray-800" value="Cybersecurity Specialist">Cybersecurity Specialist</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("photoURL")}
              type="url"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Job Post Image
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("hr_name")}
              type="text"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              readOnly
              value={user?.displayName || ""}
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Hr Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              {...register("hr_email")}
              type="email"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              readOnly
              value={user?.email || ""}
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Hr Email
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                {...register("vacancy")}
                type="number"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Vacancy
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                {...register("salary")}
                type="number"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Salary
              </label>
            </div>
            <div className="relative z-0 w-full group mb-6">
              <input
                {...register("description")}
                type="text"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
                placeholder=" "
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description
              </label>
            </div>
            <div className="hidden"><input type="number" {...register("enrolled")} defaultValue="0" /></div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                {...register("status")}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value="pending"
                readOnly
              />
            </div>
          </div>
          <input
            type="submit"
            className="bg-customGold px-5 py-2.5 text-base font-medium shadow cursor-pointer text-black mt-6 border-b-black border-b-[2px]"
            value="Req To CEO"
          />
        </form>
      </div>
    </div>
  );
};

export default Add_A_Job;