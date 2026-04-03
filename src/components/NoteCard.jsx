import { Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

function NoteCard({ note }) {
  const { deleteNote } = useNotes();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="group relative bg-white rounded-xl border border-slate-200 p-5 flex flex-col gap-3 transition-all duration-150 hover:border-blue-300 hover:shadow-sm">

      {/* Acciones — aparecen al hacer hover */}
      <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <Link
          to={`/notes/${note._id}`}
          className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-blue-50 hover:text-[#185FA5] transition-colors"
          title="Editar"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
        </Link>
        <button
          onClick={() => deleteNote(note._id)}
          className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
          title="Eliminar"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </div>

      {/* Contenido */}
      <div className="pr-10">
        <h3 className="text-sm font-semibold text-slate-800 line-clamp-1 mb-1">
          {note.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
          {note.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-auto">
        <span className="text-[11px] text-slate-400">
          {note.date ? formatDate(note.date) : "Sin fecha"}
        </span>
        <Link
          to={`/notes/${note._id}`}
          className="text-[11px] font-medium text-[#185FA5] hover:text-[#0C447C] transition-colors flex items-center gap-0.5"
        >
          Ver nota
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default NoteCard;
