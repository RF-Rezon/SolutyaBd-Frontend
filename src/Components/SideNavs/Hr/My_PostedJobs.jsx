import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import UseAuth from "../../../Hooks/useAuth";
import Spninner from "../../../Utils/Spninner";
import JobsBanner from "./JobsBanner";

const My_PostedJobs = () => {
  const { user, webUrl} = UseAuth();

  const { data: addedNewClasses = [], isLoading } = useQuery({
    queryKey: ["for_hr"],
    queryFn: async () => {
      const res = await axios.get(`${webUrl}/newAddedJob/${user.email}`,
      );
      return res.data;
    },
  });

  if (isLoading) return <Spninner />;
console.log(addedNewClasses)
  return (
    <div className="w-5/6 flex flex-col items-center h-screen space-y-10 min-h-screen mt-64 md:mt-0">
      {addedNewClasses?.map((singleJob) => (
        <JobsBanner singleJob={singleJob} key={singleJob._id} />
      ))}
    </div>
  );
};

export default My_PostedJobs;