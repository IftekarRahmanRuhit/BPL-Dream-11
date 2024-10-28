/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
import { RiDeleteBin5Fill } from "react-icons/ri";

const Selectedplayers = ({ selectedPlayers }) => {
  return (
    <div className='flex flex-col gap-1'>
      {selectedPlayers.map((player) => (
        <div  className=" flex justify-between items-center  gap-4 border-2 p-5 item rounded-xl mt-7">
          <div>
          <div className='flex justify-between space-x-4'>
          <img className="w-32 h-24 rounded-lg" src={player.img} alt='' />
          <div className='flex flex-col justify-center space-y-2'>
          <p className='font-bold text-xl'>{player.name}</p>
          <p className='font-semibold text-gray-500'>{player.type}</p>
          </div>
        </div>
          </div>

          <div>
            <button className='text-xl text-red-500'><RiDeleteBin5Fill /></button>
          </div>



        </div>
      ))}
    </div>
    
  );
};

Selectedplayers.propTypes = {
    Selectedplayers: PropTypes.object.isRequired,
}

export default Selectedplayers
