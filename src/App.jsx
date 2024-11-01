import './App.css'
import LineCharts from './components/LineCharts/LineCharts'
import NavBar from './components/Nav/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <Navbar></Navbar> */}
      <h1 className='text-7xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phones></Phones>
    </>
  )
}

export default App
