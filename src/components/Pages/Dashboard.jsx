import { useState } from "react";
import { useSelector } from "react-redux";
import { FormProfile } from "../form/FormProfile";
import ProfileDashboard from "./ProfileDashboard";
import { Outlet } from "react-router";

const Dashboard = () => {
  const { currUser, uploadData } = useSelector((state) => state.auth);
 

  // Find current user data from Redux
  const user = uploadData.find(
    (u) => u.email === currUser?.email || u.name === currUser?.name
  );

  // Check if user has filled profile before
  const hasProfile = user && user.date;

  return (
    <div className="max-w-5xl mx-auto bg-gray-50 min-h-screen py-10">
        <Outlet />
    </div>
  );
};

export default Dashboard;


//       {!hasProfile && !isEditing && (
//   <p className="text-center text-gray-500 mb-4">
//     Welcome, {currUser?.name}! Please complete your profile.
//   </p>
// )}

      // {!hasProfile || isEditing ? (
      //   <FormProfile existingData={user} onSave={() => setIsEditing(false)} />
      // ) : (
      //   <ProfileDashboard user={user} onEdit={() => setIsEditing(true)} />
      // )}