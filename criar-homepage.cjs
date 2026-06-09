const fs = require('fs')

const code = `export default function HomePage({ dark }) {
  const txt = dark ? 'text-gray-300' : 'text-gray-600'
  const card = dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
  const strip = dark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'

  return (
    <div>

      {/* HERO */}
      <section className='max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <div>
          <span className='inline-block text-xs font-semibold tracking-widest uppercase bg-orange-100 text-orange-700 px-3 py-1 rounded-full mb-5'>
            🇲🇿 Feito em Mocambique
          </span>
          <h1 className={(dark ? 'text-white' : 'text-gray-900') + ' text-5xl font-bold leading-tight mb-5'} style={{fontFamily:'Playfair Display,serif'}}>
            A sua voz,<br/>a sua <em className='text-orange-500 italic'>historia.</em>
          </h1>
          <p className={txt + ' text-lg leading-relaxed mb-8'}>
            O primeiro espaco digital mocambicano para escritores, poetas, autores de banda desenhada e leitores. Escreva, publique, venda e descubra historias da nossa terra.
          </p>
          <div className='flex gap-3 flex-wrap'>
            <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors'>
              Comecar a escrever →
            </button>
            <button className={(dark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50') + ' border px-6 py-3 rounded-lg font-medium transition-colors'}>
              Explorar obras
            </button>
          </div>
        </div>

        {/* Cards de livros */}
        <div className='flex flex-col gap-3'>
          <div className={card + ' border rounded-xl p-4 flex items-center gap-3'}>
            <div className='w-2 h-14 rounded-full bg-orange-500 shrink-0'></div>
            <div className='flex-1'>
              <p className={(dark?'text-white':'text-gray-900') + ' text-sm font-medium'}>A Filha do Indico</p>
              <p className={txt + ' text-xs mb-2'}>Amina Salimo · Romance</p>
              <span className='text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full'>Gratuito</span>
            </div>
            <span className={txt + ' text-xs'}>2.4k leitores</span>
          </div>
          <div className={card + ' border rounded-xl p-4 flex items-center gap-3'}>
            <div className='w-2 h-14 rounded-full bg-teal-500 shrink-0'></div>
            <div className='flex-1'>
              <p className={(dark?'text-white':'text-gray-900') + ' text-sm font-medium'}>Maputo Noir — Vol. 1</p>
              <p className={txt + ' text-xs mb-2'}>Carlos Nhantumbo · BD</p>
              <span className='text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full'>150 MT</span>
            </div>
            <span className={txt + ' text-xs'}>1.1k leitores</span>
          </div>
          <div className={card + ' border rounded-xl p-4 flex items-center gap-3'}>
            <div className='w-2 h-14 rounded-full bg-purple-500 shrink-0'></div>
            <div className='flex-1'>
              <p className={(dark?'text-white':'text-gray-900') + ' text-sm font-medium'}>Poemas do Zambeze</p>
              <p className={txt + ' text-xs mb-2'}>Fatima Machava · Poesia</p>
              <span className='text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full'>Gratuito</span>
            </div>
            <span className={txt + ' text-xs'}>890 leitores</span>
          </div>
        </div>
      </section>

      {/* STRIP ESTATISTICAS */}
      <div className={strip + ' border-y px-4 py-4 flex flex-wrap gap-6 justify-center'}>
        <span className={txt + ' text-sm'}><strong className={(dark?'text-white':'text-gray-900') + ' font-medium'}>312</strong> obras publicadas</span>
        <span className={txt + ' text-sm'}><strong className={(dark?'text-white':'text-gray-900') + ' font-medium'}>87</strong> escritores activos</span>
        <span className={txt + ' text-sm'}><strong className={(dark?'text-white':'text-gray-900') + ' font-medium'}>5.2k</strong> leitores registados</span>
        <span className={txt + ' text-sm'}><strong className={(dark?'text-white':'text-gray-900') + ' font-medium'}>14</strong> linguas mocambicanas</span>
        <span className={txt + ' text-sm'}><strong className={(dark?'text-white':'text-gray-900') + ' font-medium'}>42</strong> obras a venda</span>
      </div>

      {/* CATEGORIAS */}
      <section className='max-w-7xl mx-auto px-4 py-12'>
        <p className={txt + ' text-xs font-semibold tracking-widest uppercase mb-6'}>Explorar por categoria</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <a href='#' className={card + ' border rounded-xl p-5 text-center hover:border-orange-400 transition-colors block'}>
            <span className='text-3xl block mb-2'>📚</span>
            <p className={(dark?'text-white':'text-gray-900') + ' text-sm font-medium'}>Novelas e Romances</p>
            <p className={txt + ' text-xs mt-1'}>128 obras</p>
          </a>
          <a href='#' className={card + ' border rounded-xl p-5 text-center hover:border-orange-400 transition-colors block'}>
            <span className='text-3xl block mb-2'>🪶</span>
            <p className={(dark?'text-white':'text-gray-900') + ' text-sm font-medium'}>Poesia e Contos</p>
            <p className={txt + ' text-xs mt-1'}>94 obras</p>
          </a>
          <a href='#' className={card + ' border rounded-xl p-5 text-center hover:border-orange-400 transition-colors block'}>
            <span className='text-3xl block mb-2'>🎨</span>
            <p className={(dark?'text-white':'text-gray-900') + ' text-sm font-medium'}>BD, Manga e Manwha</p>
            <p className={txt + ' text-xs mt-1'}>56 obras</p>
          </a>
          <a href='#' className={card + ' border rounded-xl p-5 text-center hover:border-orange-400 transition-colors block'}>
            <span className='text-3xl block mb-2'>🛍️</span>
            <p className={(dark?'text-white':'text-gray-900') + ' text-sm font-medium'}>Loja de Livros</p>
            <p className={txt + ' text-xs mt-1'}>42 a venda</p>
          </a>
        </div>
      </section>

      {/* OBRAS EM DESTAQUE */}
      <section className='max-w-7xl mx-auto px-4 pb-12'>
        <div className='flex items-baseline justify-between mb-6'>
          <h2 className={(dark?'text-white':'text-gray-900') + ' text-2xl font-bold'} style={{fontFamily:'Playfair Display,serif'}}>Em destaque esta semana</h2>
          <a href='#' className='text-orange-500 text-sm hover:text-orange-600'>Ver tudo →</a>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className={card + ' border rounded-xl overflow-hidden hover:border-gray-400 transition-colors cursor-pointer'}>
            <div className='h-28 bg-orange-50 flex items-center justify-center text-4xl'>📖</div>
            <div className='p-4'>
              <p className={txt + ' text-xs uppercase tracking-wide mb-1'}>Romance · Cap. 12</p>
              <p className={(dark?'text-white':'text-gray-900') + ' font-medium mb-1'}>A Filha do Indico</p>
              <p className={txt + ' text-sm mb-3'}>Amina Salimo</p>
              <div className='flex items-center justify-between'>
                <span className='text-yellow-500 text-sm'>★★★★★ 4.9</span>
                <span className='text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full'>Gratis</span>
              </div>
            </div>
          </div>
          <div className={card + ' border rounded-xl overflow-hidden hover:border-gray-400 transition-colors cursor-pointer'}>
            <div className='h-28 bg-teal-50 flex items-center justify-center text-4xl'>🎨</div>
            <div className='p-4'>
              <p className={txt + ' text-xs uppercase tracking-wide mb-1'}>Banda Desenhada</p>
              <p className={(dark?'text-white':'text-gray-900') + ' font-medium mb-1'}>Maputo Noir — Vol. 1</p>
              <p className={txt + ' text-sm mb-3'}>Carlos Nhantumbo</p>
              <div className='flex items-center justify-between'>
                <span className='text-yellow-500 text-sm'>★★★★☆ 4.6</span>
                <span className='text-orange-500 text-sm font-medium'>150 MT</span>
              </div>
            </div>
          </div>
          <div className={card + ' border rounded-xl overflow-hidden hover:border-gray-400 transition-colors cursor-pointer'}>
            <div className='h-28 bg-purple-50 flex items-center justify-center text-4xl'>🖊️</div>
            <div className='p-4'>
              <p className={txt + ' text-xs uppercase tracking-wide mb-1'}>Poesia · Colectanea</p>
              <p className={(dark?'text-white':'text-gray-900') + ' font-medium mb-1'}>Poemas do Zambeze</p>
              <p className={txt + ' text-sm mb-3'}>Fatima Machava</p>
              <div className='flex items-center justify-between'>
                <span className='text-yellow-500 text-sm'>★★★★★ 5.0</span>
                <span className='text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full'>Gratis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className={strip + ' border-y'}>
        <div className='max-w-7xl mx-auto px-4 py-12'>
          <p className={txt + ' text-xs font-semibold tracking-widest uppercase mb-8'}>Como funciona</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className={card + ' border rounded-xl p-6'}>
              <div className='text-orange-500 font-bold text-4xl mb-3' style={{fontFamily:'Playfair Display,serif'}}>01</div>
              <p className={(dark?'text-white':'text-gray-900') + ' font-medium mb-2'}>Regista-te gratuitamente</p>
              <p className={txt + ' text-sm leading-relaxed'}>Cria a tua conta em segundos. Sem custos, sem complicacoes. So precisas de um email.</p>
            </div>
            <div className={card + ' border rounded-xl p-6'}>
              <div className='text-orange-500 font-bold text-4xl mb-3' style={{fontFamily:'Playfair Display,serif'}}>02</div>
              <p className={(dark?'text-white':'text-gray-900') + ' font-medium mb-2'}>Publica a tua obra</p>
              <p className={txt + ' text-sm leading-relaxed'}>Escreve directamente no site ou envia o teu ficheiro. Poesia, novela, BD, conto — tudo e bem-vindo.</p>
            </div>
            <div className={card + ' border rounded-xl p-6'}>
              <div className='text-orange-500 font-bold text-4xl mb-3' style={{fontFamily:'Playfair Display,serif'}}>03</div>
              <p className={(dark?'text-white':'text-gray-900') + ' font-medium mb-2'}>Constroi a tua audiencia</p>
              <p className={txt + ' text-sm leading-relaxed'}>Os leitores seguem-te, comentam, partilham. O teu nome cresce. E podes comecar a ganhar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className='max-w-7xl mx-auto px-4 py-12'>
        <div className={card + ' border rounded-2xl p-10 text-center'}>
          <h3 className={(dark?'text-white':'text-gray-900') + ' text-3xl font-bold mb-3'} style={{fontFamily:'Playfair Display,serif'}}>Pronto para contar a sua historia?</h3>
          <p className={txt + ' mb-6'}>Registe-se gratuitamente e comece a publicar hoje mesmo. A sua obra merece ser lida.</p>
          <div className='flex justify-center gap-3 flex-wrap'>
            <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors'>Criar conta gratis →</button>
            <button className={(dark?'border-gray-600 text-gray-300':'border-gray-300 text-gray-700') + ' border px-6 py-3 rounded-lg font-medium transition-colors'}>Explorar primeiro</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={(dark?'border-gray-800':'border-gray-200') + ' border-t px-4 py-6 flex flex-wrap justify-between items-center gap-4 max-w-7xl mx-auto'}>
        <div className={(dark?'text-white':'text-gray-900') + ' font-bold text-lg'} style={{fontFamily:'Playfair Display,serif'}}>Literatura<span className='text-orange-500'>.mz</span></div>
        <p className={txt + ' text-sm'}>© 2026 Literatura.mz · Maputo, Mocambique · Cultura literaria nacional</p>
      </footer>

    </div>
  )
}`

fs.writeFileSync('src/pages/HomePage.jsx', code)
console.log('HomePage criada com sucesso!')