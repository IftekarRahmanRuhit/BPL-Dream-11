import PropTypes from 'prop-types'
import logo from '../assets/logo.png'
import { AiFillDollarCircle } from "react-icons/ai";


const Nabvar = () => {
  return (
    <div className='py-3 sticky backdrop-filter backdrop-blur-lg bg-opacity-50 bg-sky-50'>
        <nav className='w-11/12 mx-auto flex justify-between items-center mt-2'>
            <div>
            <img src={logo} alt="" />
            </div>

            <div className='hidden md:flex justify-between items-center space-x-9 '>
                <p className='font-semibold text-gray-600'>Home</p>
                <p className='font-semibold text-gray-500'>Fixture</p>
                <p className='font-semibold text-gray-500'>Teams</p>
                <p className='font-semibold text-gray-500'>Schedules</p>
                <div className='flex p-2 border space-x-1 items-center rounded-lg font-semibold'>
                    <p>coin</p>
                    <p className='text-yellow-400 text-xl'><AiFillDollarCircle /></p>
                </div>
            </div>

        </nav>
    </div>
  )
}

Nabvar.propTypes = {
    Nabvar: PropTypes.object.isRequired,
}

export default Nabvar

