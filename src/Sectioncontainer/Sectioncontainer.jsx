/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'
import './Activebtn.css'
import Availableplayers from '../Availableplayers/Availableplayers'
import Selectedplayers from '../Selectedplayers/Selectedplayers'

const Sectioncontainer = ({handleActiveButton,isActive }) => {
  return (
    <div className='w-11/12 mx-auto mt-9'>
      <div className='flex justify-between '>
        <p>{isActive.available?<Availableplayers></Availableplayers>:<Selectedplayers></Selectedplayers>}</p>
        <div className='flex'>
            <button onClick={()=>handleActiveButton('available')} className={`${isActive.available ?'active btn p-4':'btn p-4'}`}>Available</button>
            <button onClick={()=>handleActiveButton('selected')} className={`${isActive.available ?'btn':'active btn p-4'}`}>Selected</button>
        </div>
      </div>
    </div>
  )
}

Sectioncontainer.propTypes = {
    Sectioncontainer: PropTypes.object.isRequired,
}

export default Sectioncontainer
