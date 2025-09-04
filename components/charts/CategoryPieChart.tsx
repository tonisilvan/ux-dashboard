"use client";

import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { Sale } from "@/lib/types";

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#14B8A6"];

export default function CategoryPieChart({ data }: { data: Sale[] }) {
  const totals = new Map<string, number>();
  for (const d of data) totals.set(d.category, (totals.get(d.category) ?? 0) + d.value);
  const rows = Array.from(totals.entries()).map(([name, value]) => ({ name, value }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Tooltip />
        <Legend />
        <Pie data={rows} dataKey="value" nameKey="name" outerRadius="80%" label>
          {rows.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
