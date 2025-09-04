"use client";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from "recharts";
import { Sale } from "@/lib/types";

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#14B8A6"];

export default function SalesBarChart({ data }: { data: Sale[] }) {
  const byMonthCategory: Record<string, Record<string, number>> = {};
  const cats = new Set<string>();

  for (const d of data) {
    const month = d.date.slice(0, 7);
    byMonthCategory[month] ??= {};
    byMonthCategory[month][d.category] = (byMonthCategory[month][d.category] ?? 0) + d.value;
    cats.add(d.category);
  }

  const rows = Object.entries(byMonthCategory)
    .sort(([a],[b]) => a.localeCompare(b))
    .map(([month, obj]) => ({ month, ...obj }));

  const categories = Array.from(cats).sort();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={rows} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {categories.map((c, i) => (
          <Bar key={c} dataKey={c} stackId="s" fill={COLORS[i % COLORS.length]} radius={[6, 6, 0, 0]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
