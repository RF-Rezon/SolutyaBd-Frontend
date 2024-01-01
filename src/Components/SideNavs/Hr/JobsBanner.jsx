import React from "react";

const JobsBanner = ({ singleJob }) => {
  const { vacancy, job_name, salary, status, description, photoURL} = singleJob;
  return (
    <div className="w-3/5 border-2 my-5 bg-customGray border-customGold">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm">
        <div className="bg-white p-10 basis-[60%]">
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
            Vacancy:
            <span className="ml-1 font-medium text-gray-900 pl-2">{vacancy}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
            Job Name:
            <span className="ml-1 font-medium text-gray-900 pl-2">{job_name}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
            Salary:
            <span className="ml-1 font-medium text-gray-900 pl-2">{salary}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">Status: {status}</h3>
          <p className="text-lg font-medium text-gray-900 py-3 pt-5">
          {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1 py-5">
            {status === "approved" ? (
              <span className="whitespace-nowrap rounded-full text-white px-3 py-2 text-sm font-medium bg-green-600">
                Approved
              </span>
            ) : status === "denied" ? (
              <span className="whitespace-nowrap rounded-full text-white px-3 py-2 text-sm font-medium bg-red-600">Denied</span>
            ) : (
              <span className="whitespace-nowrap rounded-full text-white px-3 py-2 text-sm font-medium bg-yellow-600">
                Pending
              </span>
            )}
          </div>
        </div>
        <div className="flex-1">
          <img src={photoURL} className="object-cover h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default JobsBanner;