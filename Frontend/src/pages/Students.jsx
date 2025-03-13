import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


export default function Students() {
	
	return (
		<section
			className="flex justify-start items-start w-full h-screen p-6   gap-2"
		>
                
			<div
				className="flex flex-col justify-between items-start w-full auto h-full auto gap-6"
			>
				<div className="flex w-full h-auto flex-row justify-between items-center bg-white rounded-xl shadow-2xl mx-auto my-4 p-6 gap-6">
    
    <div className="flex justify-between items-center p-6 w-80 h-20 bg-sky-900 relative rounded-xl">
        <div className="flex w-20 h-20 rounded-full p-2 bg-white absolute left-[-1.5rem] transition-all duration-200">
            <img className="w-full h-full rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full lg:pl-10">
            <h1 className="text-white text-md lg:text-xl font-semibold text-center">
                Bachelor of Science in Information Technology
            </h1>
        </div>
    </div>

    
    <div className="flex justify-center items-center p-6 w-64 bg-sky-900 rounded-xl">
        <h1 className="text-white text-md lg:text-xl font-semibold text-center">
            Enrolled Students:
        </h1>
    </div>

    
    <div className="flex justify-center items-center p-6 w-64 bg-sky-900 rounded-xl">
        <h1 className="text-white text-md lg:text-xl font-semibold text-center">
            Total Students:
        </h1>
    </div>
</div>

			

                <div className="flex w-1/3 h-auto p-2 gap-2 justify-start items-center bg-white rounded-xl shadow-2xl">
    <form className="flex w-full items-center gap-2">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
        <input 
            type="text" 
            placeholder="Search..." 
            name="search" 
            className="w-full p-1 border-none outline-none bg-transparent"
            aria-label="Search"
        />
    </form>
</div>

				<div
				className="flex justify-center items-start w-full h-5/6 border"
				>
				<div
					className="flex w-full h-1/2 justify-center items-center"
				>
					<h1>Hello</h1>

				</div>

				<div
					className="flex w-full h-1/2 justify-center items-center"
				>
					<h1>Hello</h1>

				</div>
			</div>
			</div>


		</section>
	)

}