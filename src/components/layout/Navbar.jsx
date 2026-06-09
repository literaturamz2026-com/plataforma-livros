import { useState } from 'react'

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const bg = dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
  const txt = dark ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-500'
  const inp = dark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'
  return (
    <nav className={bg + ' sticky top-0 z-50 border-b'}>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16 gap-4'>
          <div className='shrink-0'>
            <div className={(dark ? 'text-white' : 'text-gray-900') + ' font-bold text-xl'} style={{fontFamily:'Playfair Display,serif'}}>Literatura<span className='text-orange-500'>.mz</span></div>
            <div className='text-orange-400 text-xs hidden sm:block'>Sua proxima grande aventura comeca aqui</div>
          </div>
          <div className='hidden lg:flex items-center gap-1'>
            <a href='#' className={txt + ' px-3 py-1.5 rounded-lg text-sm'}>Inicio</a>
            <a href='#' className={txt + ' px-3 py-1.5 rounded-lg text-sm'}>Livros</a>
            <a href='#' className={txt + ' px-3 py-1.5 rounded-lg text-sm'}>Poesias</a>
            <a href='#' className={txt + ' px-3 py-1.5 rounded-lg text-sm'}>Contos</a>
            <a href='#' className={txt + ' px-3 py-1.5 rounded-lg text-sm'}>Textos</a>
            <a href='#' className={txt + ' px-3 py-1.5 rounded-lg text-sm'}>Escola</a>
            <a href='#' className='px-3 py-1.5 rounded-lg text-sm font-medium bg-orange-500 text-white hover:bg-orange-600'>Loja</a>
            <a href='#' className={txt + ' px-3 py-1.5 rounded-lg text-sm'}>Sobre Nos</a>
          </div>
          <div className='flex-1 max-w-sm hidden md:block'>
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm'>🔍</span>
              <input type='text' placeholder='Pesquisar obras, autores...' value={search} onChange={function(e){setSearch(e.target.value)}} className={inp + ' w-full pl-9 pr-4 py-2 rounded-lg text-sm border outline-none focus:border-orange-400'} />
            </div>
          </div>
          <div className='flex items-center gap-2 shrink-0'>
            <button onClick={function(){setDark(!dark)}} className={(dark?'bg-gray-800 text-yellow-400':'bg-gray-100 text-gray-600')+' p-2 rounded-lg text-base'}>{dark?'☀️':'🌙'}</button>
            <button className={(dark?'text-gray-300':'text-gray-600')+' hidden md:block px-4 py-2 text-sm rounded-lg'}>Entrar</button>
            <button className='hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded-lg font-medium'>Registar</button>
            <button onClick={function(){setMenuOpen(!menuOpen)}} className={(dark?'text-gray-300':'text-gray-600')+' lg:hidden p-2 rounded-lg text-xl'}>{menuOpen?'✕':'☰'}</button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className={bg + ' lg:hidden border-t px-4 py-3 flex flex-col gap-1'}>
          <input type='text' placeholder='Pesquisar...' value={search} onChange={function(e){setSearch(e.target.value)}} className={inp + ' w-full px-4 py-2 rounded-lg text-sm border outline-none mb-2'} />
          <a href='#' className={txt + ' px-3 py-2.5 rounded-lg text-sm'}>Inicio</a>
          <a href='#' className={txt + ' px-3 py-2.5 rounded-lg text-sm'}>Livros</a>
          <a href='#' className={txt + ' px-3 py-2.5 rounded-lg text-sm'}>Poesias</a>
          <a href='#' className={txt + ' px-3 py-2.5 rounded-lg text-sm'}>Contos</a>
          <a href='#' className={txt + ' px-3 py-2.5 rounded-lg text-sm'}>Textos</a>
          <a href='#' className={txt + ' px-3 py-2.5 rounded-lg text-sm'}>Escola</a>
          <a href='#' className='px-3 py-2.5 rounded-lg text-sm font-medium bg-orange-500 text-white text-center'>Loja</a>
          <a href='#' className={txt + ' px-3 py-2.5 rounded-lg text-sm'}>Sobre Nos</a>
          <hr className={(dark?'border-gray-800':'border-gray-200')+' my-1'} />
          <button className={(dark?'text-gray-300':'text-gray-600')+' px-3 py-2.5 text-sm text-left'}>Entrar</button>
          <button className='bg-orange-500 text-white px-3 py-2.5 rounded-lg text-sm font-medium'>Registar</button>
        </div>
      )}
    </nav>
  )
}