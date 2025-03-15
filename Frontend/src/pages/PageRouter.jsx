import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "../partials/NavigationBar";

export default function PageRouter() {

	return (
		<section
			className="flex flex-col justify-start items-center w-screen h-screen bg-zinc-900"
		>
			<NavigationBar />
			<div
				className="flex flex-col justify-start items-center w-5/6"
			>
				<Routes>
					<Route path="/" element={<Navigate to='/home'/>}/>
					<Route path="/home" element={<h1>Hello World</h1>} />
				</Routes>
			</div>
		</section>

	)

}