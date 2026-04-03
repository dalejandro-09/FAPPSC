import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
        </svg>
      ),
      title: "Crea notas rápido",
      description: "Captura tus ideas en segundos con un formulario limpio y sin distracciones.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
        </svg>
      ),
      title: "Acceso seguro",
      description: "Tus notas están protegidas con autenticación. Solo tú puedes verlas.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
        </svg>
      ),
      title: "Todo organizado",
      description: "Visualiza todas tus notas en una cuadrícula clara y bien estructurada.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-[#042C53] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-blue-200 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
            Simple · Rápido · Seguro
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight max-w-2xl mb-5">
            Organiza tus ideas<br />
            <span className="text-[#85B7EB]">sin complicaciones.</span>
          </h1>

          <p className="text-blue-200 text-base sm:text-lg max-w-lg leading-relaxed mb-10">
            NoteApp es la forma más sencilla de capturar, organizar y acceder a tus notas desde cualquier lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            {isAuthenticated ? (
              <Link
                to="/notes"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-[#042C53] px-6 py-3 text-sm font-semibold transition-all duration-150 hover:bg-blue-50 active:scale-[0.98]"
              >
                Ver mis notas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-[#042C53] px-6 py-3 text-sm font-semibold transition-all duration-150 hover:bg-blue-50 active:scale-[0.98]"
                >
                  Empieza gratis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 text-white px-6 py-3 text-sm font-medium transition-all duration-150 hover:bg-white/10 active:scale-[0.98]"
                >
                  Iniciar sesión
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-[#042C53] mb-2">¿Por qué NoteApp?</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Diseñado para que captures lo importante sin perder tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl border border-blue-100 p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#185FA5]">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#042C53] mb-1">{feature.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      {!isAuthenticated && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <div className="bg-[#042C53] rounded-2xl px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">¿Listo para empezar?</h3>
              <p className="text-sm text-blue-200">Crea tu cuenta gratis y empieza a tomar notas ahora.</p>
            </div>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-[#042C53] px-6 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-150 hover:bg-blue-50 active:scale-[0.98]"
            >
              Crear cuenta gratis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} NoteApp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
