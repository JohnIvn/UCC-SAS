import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MainAside from "../partials/Aside";


export default function HomeRoute () {

	return (
		<section
			className="flex justify-between items-start h-screen w-screen bg-gray-200"
		>
			<MainAside/>
			
			<div
				className="flex flex-col justify-start items-start w-4/5"
			>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				{/* <Route path="/" element={}/> */}

			</Routes>
			</div>
		</section>


	)

}