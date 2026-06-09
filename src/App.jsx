import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import AuthModal from './components/auth/AuthModal'

function App() {
  const [dark, setDark] = useState(true)
  const [showAuth, setShowAuth] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(function({ data }) {
      setUser(data.session?.user ?? null)
    })
    const { data: listener } = supabase.auth.onAuthStateChange(function(event, session) {
      setUser(session?.user ?? null)
    })
    return function() { listener.subscription.unsubscribe() }
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <div className={dark ? 'min-h-screen bg-gray-950' : 'min-h-screen bg-gray-50'}>
      <Navbar
        dark={dark}
        setDark={setDark}
        user={user}
        onLoginClick={() => setShowAuth(true)}
        onLogout={handleLogout}
      />
      <HomePage dark={dark} onLoginClick={() => setShowAuth(true)} />
      {showAuth && <AuthModal dark={dark} onClose={() => setShowAuth(false)} />}
    </div>
  )
}

export default App