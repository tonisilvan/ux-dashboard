import { Sale } from "@/lib/types";

export default function DataTable({ data }: { data: Sale[] }) {
  if (!data?.length) {
    return <div className="text-sm text-slate-500">Sin resultados.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left border-b border-slate-200 dark:border-slate-800">
            <th className="py-2 pr-4">Fecha</th>
            <th className="py-2 pr-4">Categoría</th>
            <th className="py-2 pr-4">Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-slate-100 dark:border-slate-900">
              <td className="py-2 pr-4">{row.date.slice(0,10)}</td>
              <td className="py-2 pr-4">{row.category}</td>
              <td className="py-2 pr-4">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
