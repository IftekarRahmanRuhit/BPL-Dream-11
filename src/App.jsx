
import { useState } from 'react'
import './App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Banner/Banner'
import Nabvar from './Navbar/Nabvar'

import Sectioncontainer from './Sectioncontainer/Sectioncontainer';
import Players from './Players/Players'



function App() {

  const [coin , setCoin] = useState(0)

  const handleClaimFreeCredit = (morecoin) =>{

    setCoin(coin + morecoin)

    toast.success('Claimed 8000000 Credit',{
      position: "top-center",
      autoClose: 2000,
      theme: 'colored'
    })
  }

  const [isActive, setIsActive] = useState({
    available : true,
    status: "available"
  })

  const handleActiveButton = (status)=>{
    
    if(status === "available"){
      setIsActive({
            available : true,
            status: "available"
      })
    }
    else{
      setIsActive({
            available : false,
            status: "selected"
      })
    }
  }





  return (
    <>

    <Nabvar coin ={coin}></Nabvar>
    <Banner handleClaimFreeCredit={handleClaimFreeCredit} ></Banner>
    <Sectioncontainer isActive={isActive} handleActiveButton = {handleActiveButton }></Sectioncontainer>
    
    <Players></Players>

   
    </>
  )
}

export default App
