import { Link } from "react-router-dom";

function Navbar1() {
  return (
    <nav className="sticky top-0 z-50 bg-[#042C53] border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-blue-400/20 flex items-center justify-center transition-colors group-hover:bg-blue-400/30">
              <svg className="w-3.5 h-3.5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 3a1 1 0 011 1v4h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 011-1z"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-sm tracking-wide">NoteApp</span>
          </Link>

          {/* Botones de acceso */}
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-lg text-sm font-medium text-blue-200 border border-white/20 hover:bg-white/8 hover:text-white transition-colors duration-150"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="px-4 py-1.5 rounded-lg text-sm font-medium bg-[#185FA5] text-white hover:bg-[#378ADD] transition-colors duration-150"
            >
              Registrarse
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar1;
