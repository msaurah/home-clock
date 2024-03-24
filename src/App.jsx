import { useEffect, useState } from 'react'
import DigitalClock from './components/DigitalClock'
import Sylveon from './components/pokemon/Sylveon'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AudioPlayer from './components/AudioPlayer'
import Pokemon from './components/pokemon/Pokemon'

function App() {

  return (
    <>
      <Pokemon/>
      <DigitalClock/>
      <AudioPlayer />
    </>
  )
}

export default App
