import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function AuthorDashboard({ dark, user }) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('book')
  const [price, setPrice] = useState('')
  const [isFree, setIsFree] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const card = dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
  const inp = dark ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400'
  const txt = dark ? 'text-gray-300' : 'text-gray-600'
  const h1 = dark ? 'text-white' : 'text-gray-900'
  const strip = dark ? 'bg-gray-900' : 'bg-gray-50'

  useEffect(() => {
    if (user) loadBooks()
  }, [user])

  async function loadBooks() {
    setLoading(true)
    const { data } = await supabase
      .from('books')
      .select('*')
      .eq('author_id', user.id)
      .order('created_at', { ascending: false })
    setBooks(data || [])
    setLoading(false)
  }

  async function handlePublish() {
    setError('')
    setSuccess('')
    if (!title) { setError('Escreve o titulo da obra.'); return }
    setSaving(true)
    const { error } = await supabase.from('books').insert({
      author_id: user.id,
      title,
      description,
      type,
      price: isFree ? 0 : parseFloat(price) || 0,
      is_free: isFree,
      status: 'published'
    })
    if (error) {
      setError('Erro ao publicar. Tenta novamente.')
    } else {
      setSuccess('Obra publicada com sucesso!')
      setTitle('')
      setDescription('')
      setPrice('')
      setIsFree(true)
      setShowForm(false)
      loadBooks()
    }
    setSaving(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className={h1 + ' text-3xl font-bold'} style={{fontFamily:'Playfair Display,serif'}}>
            Painel do Autor
          </h1>
          <p className={txt + ' mt-1'}>Gere as tuas obras publicadas</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
        >
          {showForm ? 'Cancelar' : '+ Nova obra'}
        </button>
      </div>

      {showForm && (
        <div className={card + ' border rounded-2xl p-6 mb-8'}>
          <h2 className={h1 + ' text-xl font-bold mb-5'} style={{fontFamily:'Playfair Display,serif'}}>
            Publicar nova obra
          </h2>

          <div className="mb-4">
            <label className={txt + ' text-sm block mb-1'}>Titulo da obra</label>
            <input
              type="text"
              placeholder="Ex: A Filha do Indico"
              value={title}
              onChange={function(e) { setTitle(e.target.value) }}
              className={inp + ' w-full px-4 py-3 rounded-lg border outline-none text-sm'}
            />
          </div>

          <div className="mb-4">
            <label className={txt + ' text-sm block mb-1'}>Descricao</label>
            <textarea
              placeholder="Fala sobre a tua obra..."
              value={description}
              onChange={function(e) { setDescription(e.target.value) }}
              rows={3}
              className={inp + ' w-full px-4 py-3 rounded-lg border outline-none text-sm resize-none'}
            />
          </div>

          <div className="mb-4">
            <label className={txt + ' text-sm block mb-2'}>Tipo de obra</label>
            <div className="flex gap-3 flex-wrap">
              {['book','webcomic','poetry','story','text','school'].map(function(t) {
                const labels = {book:'Livro', webcomic:'Webcomic / BD', poetry:'Poesia', story:'Conto', text:'Texto', school:'Material Escolar'}
                return (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={type === t ? 'px-4 py-2 rounded-lg text-sm bg-orange-500 text-white font-medium' : 'px-4 py-2 rounded-lg text-sm border ' + (dark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-600')}
                  >
                    {labels[t]}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mb-6">
            <label className={txt + ' text-sm block mb-2'}>Preco</label>
            <div className="flex gap-3 mb-3">
              <button
                onClick={() => setIsFree(true)}
                className={isFree ? 'px-4 py-2 rounded-lg text-sm bg-green-600 text-white font-medium' : 'px-4 py-2 rounded-lg text-sm border ' + (dark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-600')}
              >
                Gratuito
              </button>
              <button
                onClick={() => setIsFree(false)}
                className={!isFree ? 'px-4 py-2 rounded-lg text-sm bg-orange-500 text-white font-medium' : 'px-4 py-2 rounded-lg text-sm border ' + (dark ? 'border-gray-700 text-gray-300' : 'border-gray-300 text-gray-600')}
              >
                Pago
              </button>
            </div>
            {!isFree && (
              <input
                type="number"
                placeholder="Preco em MT (ex: 150)"
                value={price}
                onChange={function(e) { setPrice(e.target.value) }}
                className={inp + ' w-full px-4 py-3 rounded-lg border outline-none text-sm max-w-xs'}
              />
            )}
          </div>

          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-400 text-sm mb-4">{success}</p>}

          <button
            onClick={handlePublish}
            disabled={saving}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            {saving ? 'A publicar...' : 'Publicar obra'}
          </button>
        </div>
      )}

      {loading ? (
        <p className={txt + ' text-center py-10'}>A carregar...</p>
      ) : books.length === 0 ? (
        <div className={card + ' border rounded-2xl p-12 text-center'}>
          <span className="text-5xl block mb-4">📚</span>
          <p className={h1 + ' text-lg font-medium mb-2'}>Ainda nao publicaste nenhuma obra</p>
          <p className={txt + ' text-sm'}>Clica em "Nova obra" para comecar</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map(function(book) {
            return (
              <div key={book.id} className={card + ' border rounded-xl p-5'}>
                <div className="flex items-start justify-between mb-3">
                  <span className={'text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full ' + (book.is_free ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700')}>
                    {book.is_free ? 'Gratuito' : book.price + ' MT'}
                  </span>
                  <span className={'text-xs px-2 py-1 rounded-full ' + (book.status === 'published' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600')}>
                    {book.status === 'published' ? 'Publicado' : 'Rascunho'}
                  </span>
                </div>
                <h3 className={h1 + ' font-medium mb-1'} style={{fontFamily:'Playfair Display,serif'}}>{book.title}</h3>
                <p className={txt + ' text-sm mb-3'}>{book.description || 'Sem descricao'}</p>
                <p className={txt + ' text-xs'}>
                  {new Date(book.created_at).toLocaleDateString('pt-PT')}
                </p>
              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}