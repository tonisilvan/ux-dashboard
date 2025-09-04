export default function Spinner() {
  return (
    <div role="status" aria-live="polite" className="inline-flex items-center gap-2">
      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
      <span className="text-sm text-slate-500">Cargando…</span>
    </div>
  );
}
