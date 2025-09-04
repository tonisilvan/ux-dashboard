import * as React from "react";

type Props = {
  categories: string[];
  value: string; // "ALL" o una categoría
  onChange: (v: string) => void;
};

export default function CategorySelect({ categories, value, onChange }: Props) {
  const options = ["ALL", ...categories];
  return (
    <div>
      <label className="block text-xs mb-1">Categoría</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        aria-label="Selector de categoría"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
