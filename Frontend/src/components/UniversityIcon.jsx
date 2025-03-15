import { Link } from 'react-router-dom'
import UniversityFavicon from '../assets/uccFavicon.png'

export default function UniversityIcon () {

	return (
		<Link
			to="https://aims.ucc-caloocan.edu.ph/ucc/students/"
			className='mx-2'
		>
			<img src={UniversityFavicon} alt="University of Caloocan City Logo" />
		</Link>
	)

}