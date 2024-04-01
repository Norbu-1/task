import React from 'react'
import Navbar from './Components/Navbar'
import HomeScreen from './Components/HomeScreen'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import End from './Components/End'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='w-full h-auto overflow-hidden m-0 p-0'>

<Navbar/>
<HomeScreen/>
<Section1/>
<Section2/>
<Section3/>
<End/>
<Footer/>
    </div>
  )
}

export default App