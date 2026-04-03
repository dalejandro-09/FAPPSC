import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/notes");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">

      {/* Panel decorativo — solo desktop */}
      <div className="hidden lg:flex lg:w-1/2 lg:max-w-lg flex-col justify-between bg-[#042C53] rounded-2xl p-10 mr-10 h-[600px]">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 rounded-lg bg-blue-400/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 3a1 1 0 011 1v4h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 011-1z"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-base tracking-wide">NoteApp</span>
          </div>
          <h2 className="text-3xl font-semibold text-white leading-snug mb-4">
            Empieza gratis.<br />Sin límites.
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            Crea tu cuenta en segundos y comienza a organizar tus ideas de forma clara y segura.
          </p>
        </div>
        <div className="space-y-3">
          {[
            { icon: "✨", text: "Cuenta gratuita para siempre" },
            { icon: "📁", text: "Notas ilimitadas" },
            { icon: "🛡️", text: "Tus datos 100% privados" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/8 rounded-xl px-4 py-3 border border-white/10">
              <span className="text-base">{item.icon}</span>
              <span className="text-blue-100 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formulario */}
      <div className="w-full max-w-md">

        {/* Logo móvil */}
        <div className="flex items-center justify-center gap-2 mb-8 lg:hidden">
          <div className="w-8 h-8 rounded-lg bg-[#185FA5] flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 3a1 1 0 011 1v4h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 011-1z"/>
            </svg>
          </div>
          <span className="text-[#042C53] font-semibold text-base tracking-wide">NoteApp</span>
        </div>

        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm px-8 py-10">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#042C53] mb-1">Crear cuenta</h1>
            <p className="text-sm text-slate-400">Completa los datos para registrarte</p>
          </div>

          {registerErrors.length > 0 && (
            <div className="mb-6 space-y-2">
              {registerErrors.map((error, i) => (
                <div key={i} className="flex items-start gap-2 bg-red-50 border-l-4 border-red-500 rounded-lg px-3 py-2.5 text-sm text-red-700">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  {error}
                </div>
              ))}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-[#185FA5] mb-1.5">Nombre de usuario</label>
              <input
                type="text"
                {...register("username", { required: true })}
                className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-150 hover:border-blue-300 focus:border-[#185FA5] focus:ring-4 focus:ring-blue-100"
                placeholder="tunombre"
              />
              {errors.username && (
                <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                  El nombre de usuario es obligatorio
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-[#185FA5] mb-1.5">Correo electrónico</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-150 hover:border-blue-300 focus:border-[#185FA5] focus:ring-4 focus:ring-blue-100"
                placeholder="tu@correo.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                  El correo es obligatorio
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-[#185FA5] mb-1.5">Contraseña</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-150 hover:border-blue-300 focus:border-[#185FA5] focus:ring-4 focus:ring-blue-100"
                placeholder="Mínimo 6 caracteres"
              />
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                  La contraseña es obligatoria
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#185FA5] px-4 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-[#0C447C] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#185FA5] mt-2"
            >
              Crear cuenta
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-2">
            <span className="text-sm text-slate-400">¿Ya tienes una cuenta?</span>
            <Link to="/login" className="text-sm font-medium text-[#185FA5] hover:text-[#0C447C] transition-colors">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
