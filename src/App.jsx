import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'

function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'min-h-screen bg-gray-950' : 'min-h-screen bg-gray-50'}>
      <Navbar dark={dark} setDark={setDark} />
      <HomePage dark={dark} />
    </div>
  )
}

export default App