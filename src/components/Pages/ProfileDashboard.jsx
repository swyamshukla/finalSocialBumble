import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const ProfileDashboard = ({ onEdit }) => {
  const { currUser, uploadData } = useSelector((state) => state.auth);

  const user = uploadData.find(
    (u) => u.name === currUser?.name || u.email === currUser?.email
  );

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center text-gray-600 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <p className="text-xl font-medium mb-6">No profile data found.</p>
        <NavLink
          to="fillprofile"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-white font-semibold hover:scale-105 transition-transform shadow-md"
        >
          Complete Your Profile
        </NavLink>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-12">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl overflow-hidden border border-yellow-200">
        {/* Cover Section */}
        <div className="relative h-48 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={user.images?.[0] || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Main Profile Content */}
        <div className="pt-24 px-8 pb-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600 text-sm">{user.occupation || "—"}</p>
            {onEdit && (
              <button
                onClick={onEdit}
                className="mt-5 px-6 py-2.5 rounded-xl bg-yellow-400 text-gray-800 font-semibold hover:bg-yellow-500 transition-all shadow-md"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* User Info Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              ["Gender", user.gender],
              ["City", user.city],
              ["Date of Birth", user.date],
              ["Interested In", user.interestedIn],
              ["Education", user.education],
              ["Interest", user.interest],
              ["Hobbies", user.hobbie],
              ["Age Range", user.ageRange],
            ].map(([label, value], i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-yellow-100"
              >
                <h4 className="text-sm font-semibold text-yellow-700">
                  {label}
                </h4>
                <p className="text-gray-900 font-medium mt-1">
                  {value || "—"}
                </p>
              </div>
            ))}
          </div>

          {/* Bio Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              About Me
            </h3>
            <div className="bg-yellow-50/70 backdrop-blur-sm p-5 rounded-2xl shadow-inner border border-yellow-100">
              <p className="text-gray-700 leading-relaxed">
                {user.bio || "No bio added yet."}
              </p>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              My Photos
            </h3>
            {user.images?.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {user.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl shadow-md group border border-yellow-100"
                  >
                    <img
                      src={img}
                      alt={`user-${i}`}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No photos uploaded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
