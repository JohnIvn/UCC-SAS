

export default function SquareButton ({size, text, type}) {

	return (
		<button
			className={`flex justify-center items-center text-white bg-sky-900 outline-none border-0 w-${size} h-${size} border rounded-xl hover:bg-gray-900 transition-all duration-300 cursor-pointer`}
			type={type}
		>
			{text}
		</button>
	)

}