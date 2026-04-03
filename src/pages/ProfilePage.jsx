import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../context/NotesContext";
import { useEffect } from "react";

function ProfilePage() {
  const { user, logout } = useAuth();
  const { notes, getNotes } = useNotes();
  const navigate = useNavigate();

  useEffect(() => {
    getNotes();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#042C53]">Mi perfil</h1>
          <p className="text-sm text-slate-400 mt-0.5">Información de tu cuenta</p>
        </div>

        {/* Card principal */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">

          {/* Banner superior */}
          <div className="h-20 bg-gradient-to-r from-[#042C53] to-[#185FA5]" />

          {/* Avatar + info */}
          <div className="px-8 pb-8">
            <div className="-mt-8 mb-6 flex items-end justify-between">
              <div className="w-16 h-16 rounded-2xl bg-[#185FA5] border-4 border-white flex items-center justify-center text-lg font-semibold text-white shadow-sm">
                {getInitials(user?.username)}
              </div>
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#185FA5] text-xs font-medium px-3 py-1 rounded-full border border-blue-100 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#185FA5]" />
                Activo
              </span>
            </div>

            {/* Nombre */}
            <h2 className="text-xl font-semibold text-[#042C53] mb-0.5">
              {user?.username || "Usuario"}
            </h2>
            <p className="text-sm text-slate-400 mb-6">{user?.email || "—"}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs text-slate-400 mb-1">Total de notas</p>
                <p className="text-2xl font-semibold text-[#042C53]">{notes.length}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs text-slate-400 mb-1">Miembro desde</p>
                <p className="text-sm font-medium text-slate-700 mt-1">
                  {formatDate(user?.createdAt)}
                </p>
              </div>
            </div>

            {/* Información de la cuenta */}
            <div className="border border-slate-100 rounded-xl overflow-hidden mb-6">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-100">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Información de la cuenta
                </p>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs text-slate-400">Usuario</span>
                  <span className="text-sm font-medium text-slate-700">{user?.username || "—"}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs text-slate-400">Correo electrónico</span>
                  <span className="text-sm font-medium text-slate-700">{user?.email || "—"}</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs text-slate-400">ID de cuenta</span>
                  <span className="text-xs font-mono text-slate-400">{user?._id?.slice(-8) || "—"}</span>
                </div>
              </div>
            </div>

            {/* Botón cerrar sesión */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition-all duration-150 hover:bg-red-50 hover:border-red-300 active:scale-[0.98]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
