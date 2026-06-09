export default function HomePage({ dark }) {
  const txt = dark ? 'text-gray-300' : 'text-gray-600'
  const card = dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
  const strip = dark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
  const h1 = dark ? 'text-white' : 'text-gray-900'

  const waStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 999,
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    backgroundColor: '#22c55e',
    color: 'white',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
  }

  return (
    <div>

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className={h1 + " text-5xl font-bold leading-tight mb-6"} style={{fontFamily: "Playfair Display,serif"}}>
          A sua voz, a sua historia.
        </h1>
        <p className={txt + " text-lg leading-relaxed mb-10 max-w-2xl mx-auto"}>
          Um espaco digital mocambicano para escritores, poetas, autores de banda desenhada e leitores.
          Escreva, publique, venda e descubra historias da nossa terra.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg">
            Comecar a escrever
          </button>
          <button className={dark ? "border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-medium text-lg" : "border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium text-lg"}>
            Explorar obras
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <p className={txt + " text-xs font-semibold tracking-widest uppercase mb-6 text-center"}>
          O que podes encontrar aqui
        </p>
        <div style={{display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px"}}>
          <div className={card + " border rounded-xl p-6 text-center cursor-pointer hover:border-orange-400"}>
            <span style={{fontSize: "2.5rem", display: "block", marginBottom: "12px"}}>📝</span>
            <p className={h1 + " text-sm font-medium"}>Textos e Capitulos</p>
          </div>
          <div className={card + " border rounded-xl p-6 text-center cursor-pointer hover:border-orange-400"}>
            <span style={{fontSize: "2.5rem", display: "block", marginBottom: "12px"}}>🪶</span>
            <p className={h1 + " text-sm font-medium"}>Poesias e Contos</p>
          </div>
          <div className={card + " border rounded-xl p-6 text-center cursor-pointer hover:border-orange-400"}>
            <span style={{fontSize: "2.5rem", display: "block", marginBottom: "12px"}}>🎓</span>
            <p className={h1 + " text-sm font-medium"}>Material Escolar</p>
          </div>
          <div className={card + " border rounded-xl p-6 text-center cursor-pointer hover:border-orange-400"}>
            <span style={{fontSize: "2.5rem", display: "block", marginBottom: "12px"}}>🛍</span>
            <p className={h1 + " text-sm font-medium"}>Loja de Livros</p>
          </div>
        </div>
      </section>

      <section className={strip + " border-y"}>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <p className={txt + " text-xs font-semibold tracking-widest uppercase mb-10 text-center"}>Como funciona</p>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px"}}>
            <div className={card + " border rounded-xl p-8"}>
              <div className="text-orange-500 font-bold mb-4" style={{fontFamily: "Playfair Display,serif", fontSize: "3rem"}}>01</div>
              <p className={h1 + " font-medium text-lg mb-3"}>Regista-te gratuitamente</p>
              <p className={txt + " text-sm leading-relaxed"}>Cria a tua conta em segundos. Sem custos, sem complicacoes. So precisas de um email.</p>
            </div>
            <div className={card + " border rounded-xl p-8"}>
              <div className="text-orange-500 font-bold mb-4" style={{fontFamily: "Playfair Display,serif", fontSize: "3rem"}}>02</div>
              <p className={h1 + " font-medium text-lg mb-3"}>Publica a tua obra</p>
              <p className={txt + " text-sm leading-relaxed"}>Escreve directamente no site ou envia o teu ficheiro. Poesia, Livro, Textos, Capitulos, Contos, tudo e bem-vindo.</p>
            </div>
            <div className={card + " border rounded-xl p-8"}>
              <div className="text-orange-500 font-bold mb-4" style={{fontFamily: "Playfair Display,serif", fontSize: "3rem"}}>03</div>
              <p className={h1 + " font-medium text-lg mb-3"}>Constroi a tua audiencia</p>
              <p className={txt + " text-sm leading-relaxed"}>Os leitores seguem-te, comentam e partilham. O teu nome cresce. E podes comecar a ganhar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className={card + " border rounded-2xl p-12 text-center"}>
          <h3 className={h1 + " text-3xl font-bold mb-4"} style={{fontFamily: "Playfair Display,serif"}}>
            Pronto para contar a sua historia?
          </h3>
          <p className={txt + " mb-8 text-lg"}>
            Registe-se gratuitamente e comece a publicar hoje mesmo. A sua obra merece ser lida.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium">
              Criar conta gratis
            </button>
            <button className={dark ? "border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-medium" : "border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium"}>
              Explorar primeiro
            </button>
          </div>
        </div>
      </section>

      <footer className={dark ? "border-t border-gray-800 bg-gray-900" : "border-t border-gray-200 bg-white"}>
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-between items-center gap-4">
          <div className={h1 + " font-bold text-xl"} style={{fontFamily: "Playfair Display,serif"}}>
            Literatura<span className="text-orange-500">.mz</span>
          </div>
          <p className={txt + " text-sm"}>2026 Literatura.mz - Beira, Mocambique - Cultura literaria nacional</p>
        </div>
      </footer>

      <a href="https://wa.me/258827429678" target="_blank" rel="noreferrer" style={waStyle}>
        WA
      </a>

    </div>
  )
}