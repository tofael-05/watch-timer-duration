import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SingleCard from './components/SingleCard/SingleCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <div className=" w-[1200px] mx-auto mt-4 flex justify-between">
        <Home></Home>
        <SingleCard></SingleCard>
        <div>

        </div>
      </div>
    </div>
  )
}

export default App
