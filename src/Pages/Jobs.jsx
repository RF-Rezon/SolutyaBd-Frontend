import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/useAuth";
import Spninner from "../Utils/Spninner";

const Jobs = () => {
  const { user, webUrl} = UseAuth();
  const navigate = useNavigate();


  const fetchednewAddedJob = async () => {
    const res = await axios.get(`${webUrl}/newAddedJob`);
    return res?.data;
  };

  const handleTakingClass = (specificClass) => {
   
    // const obj = {
    //   email: user?.email,
    //   name: user?.displayName,
    //   jobName: specificClass?.c_name,
    //   hrName: specificClass?.name,
    //   hrEmail: specificClass?.email,
    //   vacancy: specificClass?.av_seats,
    //   salary: specificClass?.price,
    //   jobPostPhoto: specificClass?.photoURL,
    // };
    if (!user) {
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
        }
      });
    } else {
      Swal.fire({
        title: `Hello! ${user.displayName}`,
        text: "Do you wanna be part of our family?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
              icon: "success",
              title: "Thanks for apply. We will arrange a meeting soon."
            });
          };
        })
      };
    };

  const {
    data: addedNewJobs = [],
    isLoading,
    refetch,
  } = useQuery(["added_new_jobs"], fetchednewAddedJob);

  const filteredAprovedJobs = addedNewJobs.filter(
    (singleCard) => singleCard.status === "approved"
  );

  if (isLoading) return <Spninner />;

  return (
    <div>
     
      <div className="md:mt-20 mt-52">
        <div className="w-full flex flex-col items-center space-y-10 min-h-screen">
          {filteredAprovedJobs.length !== 0 ? filteredAprovedJobs?.map((newSingleJob) => (
            <div key={newSingleJob._id} className="w-5/6 my-10 mb-14">
              <div className="flex flex-col md:flex-row items-center justify-between w-full p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm border-custom border-2  mb-5">
                <div className="bg-white p-10 basis-3/4">
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                    Job Position:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {newSingleJob.job_name}
                    </span>
                  </h3>
                  <p className="text-lg font-medium text-gray-900 py-3 pt-5">
                    {newSingleJob.description}
                  </p>
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                   Hr:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {newSingleJob.hr_name}
                    </span>
                  </h3>
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                    Hr Email:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {newSingleJob.hr_email}
                    </span>
                  </h3>
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                  Vacancy:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {500 - newSingleJob.vacancy}
                    </span>
                  </h3>
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                  Salary:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {newSingleJob.salary}
                    </span>
                  </h3>
                 
                  <button
                    className={
                      newSingleJob.vacancy > 1
                        ? "bg-teal-700 px-5 py-2.5 text-base font-medium shadow cursor-pointer mt-10"
                        : "btn-disabled bg-teal-700 px-5 py-2.5 text-base font-medium shadow cursor-pointer mt-10"
                    }
                    onClick={() => handleTakingClass(newSingleJob)}
                  >
                    Select
                  </button>
                 
                </div>
                <div className="flex-1">
                  <img
                    src={newSingleJob.photoURL}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          ))
        : (<div className="flex items-center justify-center w-full">
          <p className="text-white text-2xl font-semibold pt-24">Jobs will be added here when CEO will approve the job ❤</p>
        </div>)
        }
        </div>
      </div>
    </div>
  );
};

export default Jobs;
