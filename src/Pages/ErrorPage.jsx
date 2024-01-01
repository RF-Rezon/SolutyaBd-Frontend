import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="bg-custom bg-opacity-20 h-screen w-screen flex items-center justify-center">
        
         <div className=" flex items-center justify-center flex-1 bg-custom bg-opacity-40">
          <div className="max-w-xl px-4 py-8 mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">We did't find the page.</h1>

            <p className="mt-4 text-black text-xl font-medium">Try searching again, or return home to start from the beginning.</p>

            <a
              href="/"
              className="inline-block px-5 py-3 mt-6 text-base font-medium text-white bg-customGold rounded-md  focus:outline-none focus:ring"
            >
              Go Back Home Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
