import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router'
import { logout } from '../../features/authSlice'
import { Home, LayoutDashboard, Search, Settings, UserStar } from 'lucide-react'
import Switch from '../../assets/icons/ToggleButton'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
   <nav className=" fixed z-50  w-full px-10 py-4 flex  items-center justify-between  ">
  {/* --- Logo --- */}
  <h1 className="text-3xl font-extrabold text-[#2E2E2E] tracking-tight">
    Stich<span >Love</span>
  </h1>

  {/* --- Navigation Links --- */}
  <ul className="flex items-center space-x-6   bg-amber-100 px-5 py-2 rounded-full  outline-none">
    {[
      { to: "/", label: "Home" },
      { to: "/dashboard", label: "Dashboard" },
      { to: "/search", label: "Search" },
      { to: "/setting", label: "Settings" },
      { to: "/help", label: "Support" },
    ].map(({ to, label }) => (
      <li key={to} className='z-10'>
        <NavLink
          to={to}
          className={({ isActive }) =>
            `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive
         ? "bg-[#FFE082] text-[#2E2E2E] hover:bg-[#FFD54F] text-black font-bold hover:text-[#2E2E2E]" 
         : "text-[#2E2E2E] hover:bg-[#FFF3CD] hover:text-[#FFB300]" 
            }`
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>

  {/* --- Buttons / Profile / Switch --- */}
  <div className="flex items-center space-x-4">


    <button
      onClick={() => {
        dispatch(logout());
        navigate("/");
      }}
      className="bg-[#2E2E2E] hover:bg-[#3C3C3C] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
    >
      Logout
    </button>
  </div>
</nav>

  )
}

export default Header
