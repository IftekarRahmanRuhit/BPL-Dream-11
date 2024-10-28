
import PropTypes from 'prop-types'
import bannermain from "../../public/banner-main.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Banner.css'

// eslint-disable-next-line react/prop-types
const Banner = ({handleClaimFreeCredit}) => {
  return (
    <div className='w-11/12 mx-auto banner bg-black p-5 mt-8 rounded-lg max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center '>
            <img src={bannermain} alt="" />
            <div className='mt-6'>
                <p className='text-white text-xl md:text-4xl font-bold text-center'>Craft Your Perfect Dream 11 Cricket Lineup</p>
            </div>
            <div className='mt-4'>
                <p className='text-white font-medium md:text-2xl opacity-70'>Beyond Boundaries, Beyond Imagination</p>
            </div>
            <div className='p-1 border-2 border-[#E7FE29] rounded-lg mt-6'>
            <button onClick={()=>handleClaimFreeCredit(8000000)} className="btn bg-[#E7FE29] border-none font-semibold">Claim Free Credit</button>
            <ToastContainer />
            </div>
            
        </div>
    
      



    </div>
  )
}

Banner.propTypes = {
    Banner: PropTypes.object.isRequired,
}

export default Banner
