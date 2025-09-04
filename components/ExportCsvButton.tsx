"use client";
import { Button } from "@/components/ui/Button";
import { Sale } from "@/lib/types";
import { downloadCsv } from "@/lib/exportCsv";

export default function ExportCsvButton({ rows }: { rows: Sale[] }) {
  return (
    <Button onClick={() => downloadCsv("sales.csv", rows)} aria-label="Exportar a CSV">
      Exportar CSV
    </Button>
  );
}
