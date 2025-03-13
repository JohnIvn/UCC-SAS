import TemplateProfile from '../assets/pfp.png'
import QRCode from '../assets/QR.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint } from '@fortawesome/free-solid-svg-icons'
import SquareButton from '../components/SquareButton'
import CustomInputA from '../components/CustomInputA'

export default function HomePage() {

	const RenderMultiple = (count, element) => {
		let elements = []
		for (let i = 0; i < count; i++) {
			elements.push(element)
		}
		return elements;
	}

	return (
		<section
			className="flex justify-start items-start w-full h-screen p-6 gap-4"
		>
			<div
				className="flex flex-col justify-between items-start w-3/5 h-full gap-6"
			>
				<div
					className="flex w-full h-1/2 justify-center items-center bg-white rounded-xl shadow-2xl"
				>

					<div
						className='flex justify-between items-center h-1/2 w-3/4 lg:w-4/5 bg-sky-900 relative rounded-xl'
					>

						<div
							className='flex w-32 h-32 lg:w-48 lg:h-48 rounded-full p-2 bg-sky-900 absolute left-[-1.5rem] transition-all duration-200'
						>
							<img
								className='flex w-full h-full rounded-full'
								src={TemplateProfile} />
						</div>
						<div
							className='flex flex-col justify-center items-center w-full h-full pl-28  lg:pl-48'
						>
							<h1 className='flex justify-start items-center w-full text-white text-md lg:text-xl font-semibold' >Matthew Gabriel M. Cania</h1>
							<p className='flex justify-start items-center w-full text-white sm:text-sm' >BSIT-2B</p>
							<p className='flex justify-start items-center w-full text-white sm:text-sm' >2023110-4N</p>
						</div>
					</div>


				</div>
				<div
					className="flex justify-center items-start w-full h-2/3 gap-4"
				>
					<div
						className="flex flex-col w-2/3 h-full py-4 justify-start items-center gap-4 bg-sky-900 rounded-xl shadow-2xl"
					>
						<h1 className='flex justify-center items-center bg-white text-xl font-semibold w-5/6 rounded-xl h-12'>RFID Scan</h1>
						<img className='flex w-56 h-56' src={QRCode} alt="" />
					</div>

					<div
						className="flex flex-col w-1/3 h-full gap-4 py-4 justify-start items-center bg-blue-300 rounded-xl shadow-2xl"
					>
						<h1 className='flex justify-center items-center bg-white text-xl font-semibold w-5/6 rounded-xl h-10'>Fingerprint Scan</h1>
						<div
							className='flex justify-center items-center w-32 h-32 bg-white rounded-2xl'
						>
							<FontAwesomeIcon className='flex h-full w-full text-8xl' icon={faFingerprint} />
						</div>
					</div>
				</div>
			</div>


			<form
				className="flex flex-col justify-center items-center w-2/5 h-full bg-blue-300 rounded-xl shadow-2xl gap-4"
			>
				<h1 className='flex justify-center items-center bg-white text-xl font-semibold w-5/6 rounded-xl h-10'>
					Student OTP
				</h1>

				<div
					className='flex justify-center items-center h-40 w-5/6 bg-gray-800 rounded-2xl gap-2'
				>
					{RenderMultiple(6, <CustomInputA />)}

				</div>

				<div
					className='flex flex-col w-2/3 h-1/2 justify-between items-center'
				>
					<div
						className='flex w-full h-auto justify-between items-center'
					>
						<SquareButton text={1} size={20} type={"button"} />
						<SquareButton text={2} size={20} type={"button"} />
						<SquareButton text={3} size={20} type={"button"} />
					</div>

					<div
						className='flex w-full h-auto justify-between items-center'
					>

						<SquareButton text={4} size={20} type="button" />
						<SquareButton text={5} size={20} type="button" />
						<SquareButton text={6} size={20} type="button" />
					</div>

					<div
						className='flex w-full h-auto justify-between items-center'
					>
						<SquareButton text={7} size={20} type={"button"} />
						<SquareButton text={8} size={20} type={"button"} />
						<SquareButton text={9} size={20} type={"button"} />
					</div>
					<div
						className='flex w-full h-auto justify-between items-center'
					>
						<SquareButton text={"Delete"} size={20} type={"button"} />
						<SquareButton text={0} size={20} type={"button"} />
						<SquareButton text={"Enter"} size={20} type={"button"} />
					</div>
				</div>

			</form>




		</section>
	)

}