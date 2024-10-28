/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import Player from '../Player/Player'

const Players = ({handleSelectedPlayer}) => {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    })

    

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 '>
        {
            // eslint-disable-next-line react/jsx-key
            players.map(player => <Player handleSelectedPlayer={handleSelectedPlayer} player={player}></Player>)
            
        }
    </div>
  )
}

Players.propTypes = {
    Players: PropTypes.object.isRequired,
}

export default Players
