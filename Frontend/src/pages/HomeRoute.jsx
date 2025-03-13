import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MainAside from "../partials/Aside";
import Students from "./Students";

export default function HomeRoute () {

	return (
		<section
			className="flex justify-between items-start h-screen w-screen bg-gray-100"
		>
			<MainAside/>
			
			<div
				className="flex flex-col justify-start items-start w-4/5"
			>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/students" element={<Students/>}/>

			</Routes>
			</div>
		</section>


	)

}