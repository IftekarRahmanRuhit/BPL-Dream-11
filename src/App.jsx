
import { useState } from 'react'
import './App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Banner/Banner'
import Nabvar from './Navbar/Nabvar'

import Sectioncontainer from './Sectioncontainer/Sectioncontainer';

import Footer from './Footer/Footer';



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

  const[selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayer = (player) =>{
    const unique = selectedPlayers.find(
      (uniquePlayer) => uniquePlayer.id === player.id
    );

    if (unique) {

      toast.error('Already Selected',{
        position: "top-center",
        autoClose: 2000,
        theme: 'colored'
      })

    }
    else if (selectedPlayers.length < 6 && player.price <= coin) {
      setCoin(coin - player.price);

      toast.success(`${player.name} selected`,{
        position: "top-center",
        autoClose: 2000,
        theme: 'colored'
      })

      setSelectedPlayers([...selectedPlayers, player]);
    }
    else if (player.price > coin) {

      toast.warn('Insufficient Balance',{
        position: "top-center",
        autoClose: 2000,
        theme: 'colored'
      })

    } 
    else {
      toast.warn('You can Select only 6 player',{
        position: "top-center",
        autoClose: 2000,
        theme: 'colored'
      })
    }
  }

  const handleRemovePlayer = (id) => {
    const remainingPlayers = selectedPlayers.filter(player => player.id !== id);
    setSelectedPlayers(remainingPlayers);

    toast.warn('Player removed', {
      position: "top-center",
      autoClose: 2000,
      theme: 'colored'
    });
  };



  return (
    <>

    <Nabvar coin ={coin}></Nabvar>

    <Banner handleClaimFreeCredit={handleClaimFreeCredit} ></Banner>

    <Sectioncontainer handleRemovePlayer={handleRemovePlayer} handleSelectedPlayer={handleSelectedPlayer} selectedPlayers={selectedPlayers} isActive={isActive} handleActiveButton = {handleActiveButton }></Sectioncontainer>

    <Footer></Footer>



   
    

    

   
    </>
  )
}

export default App
