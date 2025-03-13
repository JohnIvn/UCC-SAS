import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFingerprint, faChalkboardTeacher, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export default function MainAside() {

	return (
		<aside
			className="flex flex-col justify-between items-center w-1/5 h-full bg-gray-800"
		>
			<div
				className="flex justify-center items-center h-10 w-full border-b-1 border-white"
			>
				<h1
					className="text-white text-2xl"
				>
					Student Management
				</h1>
			</div>

			<div
				className="flex flex-col items-center justify-start w-full h-3/4"
			>

				<NavLink
					 className={({ isActive }) =>
						`${isActive ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} flex justify-start items-center w-full px-2 h-12 font-semibold text-xl gap-4 hover:bg-white hover:text-gray-900 transition-all duration-300`
					}
					to="/"
				>
					<FontAwesomeIcon icon={faFingerprint} />
					Login
				</NavLink>
				<NavLink
					 className={({ isActive }) =>
						`${isActive ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} flex justify-start items-center w-full px-2 h-12 font-semibold text-xl gap-4 hover:bg-white hover:text-gray-900 transition-all duration-300`
					  }
					to="/students"
				>
					<FontAwesomeIcon icon={faUser} />
					Students
				</NavLink>

				<NavLink
					 className={({ isActive }) =>
						`${isActive ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} flex justify-start items-center w-full px-2 h-12 font-semibold text-xl gap-4 hover:bg-white hover:text-gray-900 transition-all duration-300`
					}
					to="/programs"
				>
					<FontAwesomeIcon icon={faChalkboardTeacher} />
					Programs
				</NavLink>
				<ul
					className="flex flex-col justify-start items-start w-full"
				>
					<a href='#' className="flex justify-start items-center w-auto h-6 text-white px-2 hover:underline transition-all duration-300" >College of Libral Arts and Science</a>
					<a href='#' className="flex justify-start items-center w-auto h-6 text-white px-2 hover:underline transition-all duration-300" >College of Business and Accountancy</a>
					<a href='#' className="flex justify-start items-center w-auto h-6 text-white px-2 hover:underline transition-all duration-300" >College of Education</a>
				</ul>

				<NavLink
					 className={({ isActive }) =>
						`${isActive ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} flex justify-start items-center w-full px-2 h-12 font-semibold text-xl gap-4 hover:bg-white hover:text-gray-900 transition-all duration-300`
					}
					to="/analytics"
				>
					<FontAwesomeIcon icon={faChartBar} />
					Analytics
				</NavLink>
				<ul
					className="flex flex-col justify-start items-start w-full"
				>
					<a href='#' className="flex justify-start items-center w-auto h-6 text-white px-2 hover:underline transition-all duration-300" >Overview</a>
					<a href='#' className="flex justify-start items-center w-auto h-6 text-white px-2 hover:underline transition-all duration-300" >Program Events and Activity</a>
					<a href='#' className="flex justify-start items-center w-auto h-6 text-white px-2 hover:underline transition-all duration-300" >Student Inactivity Charts</a>
				</ul>
			</div>
		</aside>
	)
}