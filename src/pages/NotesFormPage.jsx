import { useForm } from "react-hook-form";
import { useNotes } from "../context/NotesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function NotesFormPage() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { createNotes, updateNote, getNote } = useNotes();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const loadNote = async () => {
      if (params.id && params.id !== "add") {
        const note = await getNote(params.id);
        if (note) {
          setValue("title", note.title);
          setValue("description", note.description);
          setValue("date", note.date?.toString().substring(0, 10));
        }
      }
    };
    loadNote();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (!data.date) {
      delete data.date;
    } else {
      data.date = new Date(data.date).toISOString();
    }
    if (params.id && params.id !== "add") {
      await updateNote(params.id, data);
    } else {
      await createNotes(data);
    }
    navigate("/notes");
  });
  const isEditing = !!params.id;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">

        {/* Header con breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <button
            onClick={() => navigate("/notes")}
            className="flex items-center gap-1 hover:text-[#185FA5] transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
            Notas
          </button>
          <span>/</span>
          <span className="text-slate-600">{isEditing ? "Editar nota" : "Nueva nota"}</span>
        </div>

        {/* Card del formulario */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm px-8 py-10">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-[#042C53] mb-1">
              {isEditing ? "Editar nota" : "Nueva nota"}
            </h1>
            <p className="text-sm text-slate-400">
              {isEditing ? "Modifica los campos que desees actualizar." : "Completa los campos para crear tu nota."}
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">

            {/* Título */}
            <div>
              <label className="block text-xs font-medium text-[#185FA5] mb-1.5">
                Título
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-150 hover:border-blue-300 focus:border-[#185FA5] focus:ring-4 focus:ring-blue-100"
                placeholder="Título de tu nota"
                autoFocus
              />
              {errors.title && (
                <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                  El título es obligatorio
                </p>
              )}
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-xs font-medium text-[#185FA5] mb-1.5">
                Descripción
              </label>
              <textarea
                {...register("description", { required: true })}
                rows={6}
                className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-150 hover:border-blue-300 focus:border-[#185FA5] focus:ring-4 focus:ring-blue-100 resize-none"
                placeholder="Escribe el contenido de tu nota aquí..."
              />
              {errors.description && (
                <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                  La descripción es obligatoria
                </p>
              )}
            </div>

            {/* Fecha */}
            <div>
              <label className="block text-xs font-medium text-[#185FA5] mb-1.5">
                Fecha
              </label>
              <input
                type="date"
                {...register("date")}
                className="w-full rounded-lg border-2 border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-150 hover:border-blue-300 focus:border-[#185FA5] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Botones */}
            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => navigate("/notes")}
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition-all duration-150 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#185FA5] px-5 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-[#0C447C] active:scale-[0.98]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                {isEditing ? "Guardar cambios" : "Crear nota"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NotesFormPage;
