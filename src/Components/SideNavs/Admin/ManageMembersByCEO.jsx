import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import UseAuth from "../../../Hooks/useAuth";
import Spninner from "../../../Utils/Spninner";

const ManageMembersByCEO = () => {
  const { webUrl, user } = UseAuth();

  const getAllUsers = async () => {
    const res = await axios.get(`${webUrl}/users`);
    return res.data;
  };

  const {
    data: allRoles,
    isLoading,
    refetch,
  } = useQuery(["allRoles"], getAllUsers);

  const makeHrHandler = (singleUser) => {
    const userId = singleUser._id;
    axios
      .patch(`${webUrl}/newAddedJob/makeHr/${userId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        refetch();
      });
  };

  const fire = (singleUser) => {
    const userId = singleUser._id;
    axios
      .delete(`${webUrl}/firedHr/${userId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        refetch();
      });
  };

  if (isLoading) return <Spninner />;

  return (
    <div className="mt-80 md:mt-0">
      <div className="dash_classes ">
          <div className="overflow-x-auto min-h-screen py-8">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-sm">
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allRoles
                  ?.filter((users) => users?.role !== "admin")
                  .map((singleUser) => (
                    <tr
                      key={singleUser?._id}
                      className="text-base font-semibold"
                    >
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={singleUser.photo} alt="" />
                          </div>
                        </div>
                      </td>
                      <td>{singleUser?.name}</td>
                      <td>{singleUser?.email}</td>
                      <td>{singleUser?.role}</td>
                      <th className="flex flex-col gap-4">
                        <button
                          onClick={() => makeHrHandler(singleUser)}
                          className={
                            singleUser?.role == "hr"
                              ? "disabled bg-gray-400 rounded-md"
                              : "btn btn-ghost btn-xs  hover:bg-purple-500 hover:text-black"
                          }
                        >
                          Make Hr
                        </button>
                        <button
                          onClick={() => fire(singleUser)}
                          className="btn btn-ghost btn-xs  hover:bg-red-500 hover:text-black"
                        >
                          Fired Him
                        </button>
                        {/* {TODO: HIRE A CANDIDATE} */}
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

export default ManageMembersByCEO;
