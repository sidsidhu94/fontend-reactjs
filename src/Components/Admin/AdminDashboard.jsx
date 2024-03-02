import React, { useState,useEffect } from "react";

import Chart from "react-apexcharts";
import SideNavbar from "./SideNavbar";
import AdminUser from "./AdminUser";
import { baseURL } from "../Api/Url";
import axios from "axios";
const AdminDashboard = () => {
  const [chart, setChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  const [premium, setPremium] = useState([]);

  useEffect(() => {
    const premium = async () => {
      const response = await axios.get(
        `${baseURL}account/total_premium/`
      );
      console.log(response, ">>>>>>>>>>>>.");
      setPremium(response.data);
    };
    premium();
  }, []);


  return (
    <>
      <div className="grid grid-cols-2 mt-10">
        <div className="w-72 h-40  rounded-lg ml-10 border-l-3 border-l-cyan-700 shadow-xl hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out cursor-pointer">
          <div className="text-center font-semibold text-3xl mt-4 ">
          EARLY EARNING

          </div>
          <div className="text-center font-semibold text-3xl mt-4 text-cyan-700">
          {premium.total_premium_paid}
          </div>
          
          
        </div>
        <div className="w-72 h-40  rounded-lg ml-10 border-l-3 border-l-cyan-700 shadow-xl hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out cursor-pointer">
        <div className="text-center font-semibold text-3xl mt-4 ">
          DAILY EARNING

          </div>
          <div className="text-center font-semibold text-3xl mt-4 text-cyan-700">
          {premium.daily_premium}
          </div>
          
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10">
      <div className="ml-10 mt-10">
        <Chart
          options={chart.options}
          series={chart.series}
          type="bar"
          width="500"
        />
      </div>
      <div className="ml-10 mt-10">
        <Chart
          options={chart.options}
          series={chart.series}
          type="bar"
          width="500"
        />
      </div>
        
      </div> 

      
    </>
  );
};

export default AdminDashboard;
