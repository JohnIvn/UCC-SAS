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
				<div
					className="flex w-full h-1/4 justify-center items-center bg-white rounded-xl shadow-2xl"
				>
                    <h1>Starts here </h1>

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