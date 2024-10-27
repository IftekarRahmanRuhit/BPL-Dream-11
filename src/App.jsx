
import { useState } from 'react'
import './App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Banner/Banner'
import Nabvar from './Navbar/Nabvar'


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


  return (
    <>

    <Nabvar coin ={coin}></Nabvar>
    <Banner handleClaimFreeCredit={handleClaimFreeCredit} ></Banner>


    </>
  )
}

export default App
