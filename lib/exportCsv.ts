import { Sale } from "./types";

// Escapa valores para CSV
function csvEscape(v: unknown): string {
  const s = String(v ?? "");
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export function toCsv(rows: Sale[]): string {
  const headers = ["id", "date", "category", "value"];
  const lines = [
    headers.join(","),
    ...rows.map(r => headers.map(h => csvEscape((r as any)[h])).join(",")),
  ];
  return lines.join("\n");
}

export function downloadCsv(filename: string, rows: Sale[]) {
  const csv = toCsv(rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
