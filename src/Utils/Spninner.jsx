import React from "react";
import { ThreeDots } from 'react-loader-spinner';

const Spninner = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-40">
        <ThreeDots
          visible={true}
          height="100"
          width="100"
          color="#cca471"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Spninner;
