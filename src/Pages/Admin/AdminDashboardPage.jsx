import React from "react";
import SideNavbar from "../../Components/Admin/SideNavbar";

import AdminHeader from "../../Components/Admin/AdminHeader";
import AdminDashboard from "../../Components/Admin/AdminDashboard";

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <SideNavbar />

        <div className="w-full">
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
