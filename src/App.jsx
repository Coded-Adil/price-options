import './App.css'
import NavBar from './components/Nav/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <Navbar></Navbar> */}
      <h1 className='text-7xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
