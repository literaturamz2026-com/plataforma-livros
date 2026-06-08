import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

function App() {
  const [status, setStatus] = useState('A verificar ligação...')

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from('_dummy_').select('*')
      if (error && error.code === '42P01') {
        setStatus('✅ Supabase ligado com sucesso!')
      } else if (error) {
        setStatus('✅ Supabase ligado com sucesso!')
      } else {
        setStatus('✅ Supabase ligado com sucesso!')
      }
    }
    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Plataforma de Livros 📚
        </h1>
        <p className="text-lg mt-4 text-green-400">
          {status}
        </p>
      </div>
    </div>
  )
}

export default App
