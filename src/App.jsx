import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import AuthModal from './components/auth/AuthModal'
import AuthorDashboard from './pages/AuthorDashboard'

function App() {
  const [dark, setDark] = useState(true)
  const [showAuth, setShowAuth] = useState(false)
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [page, setPage] = useState('home')

  useEffect(() => {
    supabase.auth.getSession().then(function({ data }) {
      const u = data.session?.user ?? null
      setUser(u)
      if (u) loadProfile(u.id)
    })
    const { data: listener } = supabase.auth.onAuthStateChange(function(event, session) {
      const u = session?.user ?? null
      setUser(u)
      if (u) loadProfile(u.id)
      else setProfile(null)
    })
    return function() { listener.subscription.unsubscribe() }
  }, [])

  async function loadProfile(userId) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    setProfile(data)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
    setPage('home')
  }

  return (
    <div className={dark ? 'min-h-screen bg-gray-950' : 'min-h-screen bg-gray-50'}>
      <Navbar
        dark={dark}
        setDark={setDark}
        user={user}
        profile={profile}
        onLoginClick={() => setShowAuth(true)}
        onLogout={handleLogout}
        onDashboard={() => setPage('dashboard')}
        onHome={() => setPage('home')}
      />

      {page === 'home' && <HomePage dark={dark} onLoginClick={() => setShowAuth(true)} />}
      {page === 'dashboard' && user && <AuthorDashboard dark={dark} user={user} />}

      {showAuth && <AuthModal dark={dark} onClose={() => setShowAuth(false)} />}
    </div>
  )
}

export default App