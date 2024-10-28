
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import Player from '../Player/Player'

const Players = () => {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    })

    

  return (
    <div className=' w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
        {
            players.map(player => <Player player={player}></Player>)
            
        }
    </div>
  )
}

Players.propTypes = {
    Players: PropTypes.object.isRequired,
}

export default Players
