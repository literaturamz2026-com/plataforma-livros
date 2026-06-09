import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function AuthModal({ dark, onClose }) {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('reader')
  const [terms, setTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const card = dark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
  const inp = dark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
  const txt = dark ? 'text-gray-300' : 'text-gray-600'
  const h1 = dark ? 'text-white' : 'text-gray-900'

  async function handleSubmit() {
    setError('')
    setSuccess('')
    setLoading(true)

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError('Email ou password incorrectos.')
      } else {
        setSuccess('Entrou com sucesso!')
        setTimeout(onClose, 1000)
      }
    } else {
      if (!name) { setError('Escreve o teu nome.'); setLoading(false); return }
      if (!terms) { setError('Deves aceitar os Termos e Politicas.'); setLoading(false); return }
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) {
        setError('Erro ao criar conta. Tenta outro email.')
      } else {
        await supabase.from('profiles').insert({
          id: data.user.id,
          username: email.split('@')[0],
          full_name: name,
          role: role
        })
        setSuccess('Conta criada com sucesso!')
        setTimeout(onClose, 1000)
      }
    }
    setLoading(false)
  }

  return (
    <div style={{position:'fixed', inset:0, zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0.6)'}}>
      <div className={card + ' border rounded-2xl p-8 w-full max-w-md mx-4'} style={{maxHeight:'90vh', overflowY:'auto'}}>

        <div className="flex justify-between items-center mb-6">
          <h2 className={h1 + ' text-2xl font-bold'} style={{fontFamily:'Playfair Display,serif'}}>
            {mode === 'login' ? 'Entrar' : 'Criar conta'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">x</button>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode('login')}
            className={mode === 'login' ? 'flex-1 py-2 rounded-lg bg-orange-500 text-white font-medium text-sm' : 'flex-1 py-2 rounded-lg text-sm ' + txt}
          >
            Entrar
          </button>
          <button
            onClick={() => setMode('register')}
            className={mode === 'register' ? 'flex-1 py-2 rounded-lg bg-orange-500 text-white font-medium text-sm' : 'flex-1 py-2 rounded-lg text-sm ' + txt}
          >
            Registar
          </button>
        </div>

        {mode === 'register' && (
          <div>
            <div className="mb-4">
              <label className={txt + ' text-sm block mb-1'}>Nome completo</label>
              <input
                type="text"
                placeholder="O teu nome"
                value={name}
                onChange={function(e) { setName(e.target.value) }}
                className={inp + ' w-full px-4 py-3 rounded-lg border outline-none text-sm'}
              />
            </div>

            <div className="mb-4">
              <label className={txt + ' text-sm block mb-2'}>Tipo de conta</label>
              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => setRole('reader')}
                  className={(role === 'reader' ? 'border-orange-500 bg-orange-500 bg-opacity-10' : (dark ? 'border-gray-700' : 'border-gray-200')) + ' border-2 rounded-xl p-4 cursor-pointer text-center'}
                >
                  <span className="text-2xl block mb-1">📖</span>
                  <p className={(role === 'reader' ? 'text-orange-400' : txt) + ' text-sm font-medium'}>Leitor</p>
                  <p className={txt + ' text-xs mt-1'}>Leia e descubra obras</p>
                </div>
                <div
                  onClick={() => setRole('author')}
                  className={(role === 'author' ? 'border-orange-500 bg-orange-500 bg-opacity-10' : (dark ? 'border-gray-700' : 'border-gray-200')) + ' border-2 rounded-xl p-4 cursor-pointer text-center'}
                >
                  <span className="text-2xl block mb-1">✍️</span>
                  <p className={(role === 'author' ? 'text-orange-400' : txt) + ' text-sm font-medium'}>Autor</p>
                  <p className={txt + ' text-xs mt-1'}>Publique e venda obras</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mb-4">
          <label className={txt + ' text-sm block mb-1'}>Email</label>
          <input
            type="email"
            placeholder="o.teu@email.com"
            value={email}
            onChange={function(e) { setEmail(e.target.value) }}
            className={inp + ' w-full px-4 py-3 rounded-lg border outline-none text-sm'}
          />
        </div>

        <div className="mb-4">
          <label className={txt + ' text-sm block mb-1'}>Password</label>
          <input
            type="password"
            placeholder="Minimo 6 caracteres"
            value={password}
            onChange={function(e) { setPassword(e.target.value) }}
            className={inp + ' w-full px-4 py-3 rounded-lg border outline-none text-sm'}
          />
        </div>

        {mode === 'register' && (
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={terms}
                onChange={function(e) { setTerms(e.target.checked) }}
                className="mt-1"
              />
              <span className={txt + ' text-sm'}>
                Aceito os <span className="text-orange-500 cursor-pointer">Termos e Condições</span> e a <span className="text-orange-500 cursor-pointer">Política de Privacidade</span> da plataforma.
                {role === 'author' && <span className="block mt-1 text-xs">Como autor, concordo que a plataforma retém uma percentagem sobre cada venda.</span>}
              </span>
            </label>
          </div>
        )}

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-400 text-sm mb-4">{success}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          {loading ? 'A processar...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
        </button>

      </div>
    </div>
  )
}