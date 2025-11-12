import React from 'react'
import { motion } from "framer-motion";
const SearchCard = () => {
  


  return (
 <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-yellow-100 relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>

      {/* Profile Card */}
      <motion.div
        className="relative w-80 h-[480px] bg-white rounded-3xl shadow-xl overflow-hidden border border-yellow-100 hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Image */}
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-full h-3/5 object-cover"
        />

        {/* Info */}
        <div className="p-5 space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">
            {user.name.first} {user.name.last},{" "}
            <span className="text-yellow-500">{user.dob.age}</span>
          </h2>
          <p className="text-gray-600 text-sm font-medium">
            📍 {user.location.city}, {user.location.country}
          </p>
          <p className="text-gray-400 text-xs mt-2">{user.email}</p>
        </div>
      </motion.div>

      {/* Buttons */}
      <div className="flex gap-14 mt-10">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-16 h-16 text-3xl shadow-md flex items-center justify-center transition"
        >
          ❌
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full w-16 h-16 text-3xl shadow-md flex items-center justify-center transition"
        >
          💛
        </motion.button>
      </div>

      {/* Bumble Tagline */}
      <p className="absolute bottom-6 text-gray-500 text-sm font-medium tracking-wide">
        Made with 💛 Bumble Vibes
      </p>
    </div>
  )
}

export default SearchCard