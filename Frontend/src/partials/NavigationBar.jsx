import { Link, NavLink } from "react-router-dom";
import UniversityIcon from "../components/UniversityIcon";

export default function NavigationBar() {

  const NavUrls = [
    {
      label: "Home", link: "/home"
    },
    {
      label: "Contacts", link: "/contacts"
    },
    {
      label: "Privacy Policy", link: "/privacy-policy"
    }

  ]

  return (

    <header
      className="flex justify-center items-center w-full h-24"
    >
      <nav
        className="flex justify-between items-center w-5/6 h-12 m-4 rounded-xl shadow-2xl shadow-zinc-950"
      >
        <div
          className="flex items-center justify-center gap-2 w-1/3 h-10 mx-2"
        >
          <UniversityIcon />
          <h1
            className="flex items-center justify-center text-white text-xl font-semibold text-center"
          >
            Student Attendance System

          </h1>
        </div>

        <div
          className="flex items-center justify-evenly w-1/3 h-10 mx-2"
        >
          {NavUrls.map((item, index) => (

            <NavLink
              className={({isActive}) => `${isActive ?  'text-white' : 'text-gray-400'} flex justify-center items-center w-24 h-full hover:text-white hover:underline transition-all duration-300`}
              to={item.link}
            >
              {item.label}
            </NavLink>
          ))
            
          }
        </div>
      </nav>

    </header>
  )



}