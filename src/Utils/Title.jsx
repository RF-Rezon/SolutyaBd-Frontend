import React from "react";

const Title = ({heading, sHeading}) => {
  return (
    <div >
      <div className="text-center p-6 py-10">
        <p className="md:text-4xl text-2xl font-semibold text-white pb-3">{heading}</p>
        <p className="md:text-lg text-base font-medium text-gray-400">{sHeading}</p>
      </div>
    </div>
  );
};

export default Title;

