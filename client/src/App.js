
import Navlist from './Components/Pages/Navlist'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Pages/Footer'
import { useState,useEffect } from 'react'

const App=()=>{
  useEffect(() => {
    fetch('http://localhost:8000')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }, []);
  return(
<>
<div>
  <Navlist/>
  <Outlet/>
  <br /><br /><br />
  <Footer/>
</div>
</>
  )
}
export default App;