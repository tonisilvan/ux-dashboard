"use client";

import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";
import { Sale } from "@/lib/types";

export default function SalesLineChart({ data }: { data: Sale[] }) {
  const parsed = data.map(d => ({ ...d, date: d.date.slice(0, 10) }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={parsed} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
        <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          dot={{ r: 4, stroke: "#6366F1", strokeWidth: 2, fill: "#6366F1" }}
          stroke="#6366F1"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
