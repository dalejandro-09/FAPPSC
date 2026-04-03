import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar2() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#042C53] border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/notes" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-blue-400/20 flex items-center justify-center transition-colors group-hover:bg-blue-400/30">
              <svg className="w-3.5 h-3.5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 3a1 1 0 011 1v4h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 011-1z"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-sm tracking-wide">NoteApp</span>
          </Link>

          {/* Links de navegación */}
          <div className="flex items-center gap-1">

            {/* Notas */}
            <Link
              to="/notes"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors duration-150 ${
                isActive("/notes")
                  ? "bg-white/12 text-white font-medium"
                  : "text-blue-200 hover:bg-white/8 hover:text-white"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Notas
            </Link>

            {/* Perfil */}
            <Link
              to="/profile"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors duration-150 ${
                isActive("/profile")
                  ? "bg-white/12 text-white font-medium"
                  : "text-blue-200 hover:bg-white/8 hover:text-white"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span className="hidden sm:inline">Perfil</span>
            </Link>

            {/* Divisor */}
            <div className="w-px h-4 bg-white/15 mx-1" />

            {/* Avatar + Salir */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#185FA5] border border-blue-400/30 flex items-center justify-center text-xs font-semibold text-white uppercase">
                {user?.username?.[0] || "U"}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-blue-200 hover:bg-white/8 hover:text-white transition-colors duration-150"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
