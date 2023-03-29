import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SingleCard from './components/SingleCard/SingleCard'


function App() {
  const [watchTime, setWatchTime] = useState("");
  const handleWatchTime = (time) => {
    const priviousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if(priviousWatchTime) {
      const sum = priviousWatchTime + time;
      localStorage.setItem("watchTime", sum)
      setWatchTime(sum)

    }
    else{
      localStorage.setItem("watchTime", time)
      setWatchTime(time)
    }

  }

  return (
    <div className="App">
      <Header></Header>
      <div className=" w-[1200px] mx-auto mt-4 flex justify-between">
        <Home handleWatchTime={handleWatchTime}></Home>
        <SingleCard watchTime={watchTime}></SingleCard>
        <div>

        </div>
      </div>
    </div>
  )
}

export default App
