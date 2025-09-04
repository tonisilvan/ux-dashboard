import * as React from "react";
import { clsx } from "clsx";

type Props = {
  from?: string;
  to?: string;
  onChange: (v: { from?: string; to?: string }) => void;
  className?: string;
};

export default function DateRange({ from, to, onChange, className }: Props) {
  return (
    <div className={clsx("grid grid-cols-2 gap-2", className)}>
      <div>
        <label className="block text-xs mb-1">Desde</label>
        <input
          type="date"
          value={from ?? ""}
          onChange={(e) => onChange({ from: e.target.value || undefined, to })}
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        />
      </div>
      <div>
        <label className="block text-xs mb-1">Hasta</label>
        <input
          type="date"
          value={to ?? ""}
          onChange={(e) => onChange({ from, to: e.target.value || undefined })}
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        />
      </div>
    </div>
  );
}
