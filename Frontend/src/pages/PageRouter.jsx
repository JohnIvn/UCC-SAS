import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../partials/NavigationBar";
import Home from "./Home";

export default function PageRouter() {

	return (
		<section
			className="flex flex-col justify-start items-center w-screen h-screen bg-[#2D2D2D]"
		>
			<NavigationBar />
			<div
				className="flex flex-col justify-start items-center h-full w-5/6"
			>
				<Routes>
					<Route path="/" element={<Navigate to='/home'/>}/>
					<Route path="/home" element={<Home/>} />
				</Routes>
			</div>
		</section>

	)

}