
import PropTypes from 'prop-types'
import { RiUser3Fill } from "react-icons/ri";



// eslint-disable-next-line react/prop-types
const Player = ({player , handleSelectedPlayer}) => {

    const {id,name,img,country,type,batting_style,bowling_style,price,flag} = player
   

  return (
    <div>
        <div className='w-11/12 mx-auto mb-8 '>
            <div className='border-2 rounded-xl p-4 bg-stone-50 shadow-lg '>


                <img className='w-full h-64 rounded-xl' src={img} alt="" />
                <div className='flex items-center space-x-1 mt-5'>
                <p><RiUser3Fill /></p>
                <h1 className='font-semibold text-xl'> {name}</h1> 
                </div>

                <div className='flex justify-between items-center mt-6'>
                    <div className='flex space-x-3 items-center'>
                        <img className='w-6 rounded-sm' src={flag} alt="" />
                        <p className='font-bold text-gray-500'>{country}</p>
                    </div>
                    <div>
                        <div className='bg-slate-200 p-1 rounded-lg px-2'>
                            <p className='font-semibold'>{type}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <hr />
                </div>

                <div>
                    <p className='font-bold mt-4'>Rating</p>
                </div>

                <div className='flex justify-between items-center mt-3'>
                    <div>
                        <p className='font-bold'>{batting_style}</p>
                    </div>
                    <div>
                        <p className='font-bold text-gray-500'>{bowling_style}</p>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-4'>
                    <div>
                        <p className='font-bold'>Price:${price}</p>
                    </div>
                    <div className=''>
                        <button onClick={()=>handleSelectedPlayer(player)} className='btn btn-sm hover:bg-[#E7FE29] mb-3'>Choose player</button>
                       
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player
