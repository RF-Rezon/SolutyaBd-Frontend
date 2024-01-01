import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import UseAuth from "../../../Hooks/useAuth";
import Spninner from "../../../Utils/Spninner";
import "./popupbtn.css";

const ManageJobsByCEO = () => {
  const { webUrl } = UseAuth();

  const fetchednewAddedJob = async () => {
    const res = await axios.get(
      `${webUrl}/newAddedJob`
    );
    return res.data;
  };


  const {
    data: allJobs,
    isLoading,
    refetch,
  } = useQuery(["allJobs"], fetchednewAddedJob);

  const [disabledButtons, setDisabledButtons] = useState([]);

  if (isLoading) return <Spninner />;

  const approveHandler = (singleJob) => {
    const userId = singleJob._id;
    axios
      .patch(
        `${webUrl}/newAddedJob/approve/${userId}`,
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        refetch();
        setDisabledButtons((prevDisabledButtons) => [
          ...prevDisabledButtons,
          userId,
        ]);
      });
  };

  const denyHandler = (singleJob) => {
    const userId = singleJob._id;
    axios
      .delete(
        `${webUrl}/newAddedJob/deny/${userId}`,
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        refetch();
        setDisabledButtons((prevDisabledButtons) => [
          ...prevDisabledButtons,
          userId,
        ]);
      });
  };

  return (
    <div className="mt-80 md:mt-0">
      <div className="dash_classes ">
        <div className="overflow-x-auto min-h-screen py-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sm">
                <th>Job Post Image</th>
                <th>Job Name</th>
                <th>Hr Name</th>
                <th>Hr Email</th>
                <th>Vacancy</th>
                <th>Salary</th>
                <th>Current Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allJobs?.map((singleJob) => (
                <tr key={singleJob._id} className="text-base font-semibold">
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleJob.photoURL} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{singleJob.job_name}</td>
                  <td>{singleJob.hr_name}</td>
                  <td>{singleJob.hr_email}</td>
                  <td>{singleJob.vacancy}</td>
                  <td>{singleJob.salary}</td>
                  <td>
                    {singleJob.status === "approved" ? (
                      <span className="whitespace-nowrap rounded-full text-white px-2.5 py-0.5 text-xs bg-green-600">
                        Approved
                      </span>
                    ) : singleJob.status === "denied" ? (
                      <span className="whitespace-nowrap rounded-full text-white px-2.5 py-0.5 text-xs bg-red-600">
                        Denied
                      </span>
                    ) : (
                      <span className="whitespace-nowrap rounded-full text-white px-2.5 py-0.5 text-xs bg-yellow-600">
                        Pending
                      </span>
                    )}
                  </td>
                  <th className="flex flex-col gap-4">
                    <button
                      onClick={() => approveHandler(singleJob)}
                      disabled={disabledButtons.includes(singleJob._id)}
                      className="btn btn-ghost btn-xs hover:bg-green-500 hover:text-black"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => denyHandler(singleJob)}
                      disabled={disabledButtons.includes(singleJob._id)}
                      className="btn btn-ghost btn-xs  hover:bg-red-500 hover:text-black"
                    >
                      Deny
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageJobsByCEO;
