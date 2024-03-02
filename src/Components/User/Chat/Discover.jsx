import React from "react";

const Discover = () => {
  return (
    <div>
      <div className="w-full h-60 mt-6 text-center flex justify-center relative ">
        <img
          className="absolute w-full h-full"
          src="https://png.pngtree.com/thumb_back/fh260/back_pic/02/50/63/71577e1cf59d802.jpg"
          alt=""
        />
        <div className="absolute m-auto top-0 bottom-0 w-fit  flex-col h-full   ">
          <h1 className="text-7xl text-white font-bold m-auto mt-8 ">
            Best of fe.Work
          </h1>
          <h1 className="text-2xl text-white mt-4 m-auto">
            Projects featured today by our curators
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Discover;
