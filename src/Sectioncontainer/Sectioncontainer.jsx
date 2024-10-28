/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import './Activebtn.css';
import Selectedplayers from '../Selectedplayers/Selectedplayers';
import Players from '../Players/Players';

const Sectioncontainer = ({ handleActiveButton, isActive, selectedPlayers,handleSelectedPlayer, handleRemovePlayer }) => {

  const handleAddMorePlayers = () => { handleActiveButton('available')}
    return (
        <div className="w-11/12 mx-auto mt-9">
            <div className="flex justify-between items-center">
                <p className='font-bold md:text-xl'>{isActive.available ? "Available Players" : `Selected Players(${selectedPlayers.length}/6)`}</p>
                <div className="flex">
                    <button 
                        onClick={() => handleActiveButton('available')} 
                        className={`btn p-4 ${isActive.available ? 'active' : ''}`}>
                        Available
                    </button>
                    <button 
                        onClick={() => handleActiveButton('selected')} 
                        className={`btn p-4 ${isActive.available ? '' : 'active'}`}>
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>


            <div className=''>
                {isActive.available ? (<Players handleSelectedPlayer={handleSelectedPlayer} />) : (<Selectedplayers handleAddMorePlayers={handleAddMorePlayers} handleRemovePlayer={handleRemovePlayer} selectedPlayers={selectedPlayers}  />)}
            </div>
        </div>

    );
};

Sectioncontainer.propTypes = {
    handleActiveButton: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.array.isRequired,
};

export default Sectioncontainer;