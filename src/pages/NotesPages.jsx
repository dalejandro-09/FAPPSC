import { useEffect } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";

function NotesPage() {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-[#042C53]">Mis notas</h1>
            <p className="text-sm text-slate-400 mt-0.5">
              {notes.length === 0
                ? "Aún no tienes notas"
                : `${notes.length} nota${notes.length !== 1 ? "s" : ""}`}
            </p>
          </div>
          <Link
            to="/notes/add"
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-lg bg-[#185FA5] px-4 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-[#0C447C] active:scale-[0.98]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
            </svg>
            Nueva nota
          </Link>
        </div>

        {/* Grid de notas */}
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-[#378ADD]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
              </svg>
            </div>
            <h2 className="text-base font-semibold text-slate-700 mb-1">
              No tienes notas aún
            </h2>
            <p className="text-sm text-slate-400 mb-6 max-w-xs">
              Crea tu primera nota para empezar a organizar tus ideas.
            </p>
            <Link
              to="/notes/add"
              className="inline-flex items-center gap-2 rounded-lg bg-[#185FA5] px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-[#0C447C] active:scale-[0.98]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
              </svg>
              Crear primera nota
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesPage;
