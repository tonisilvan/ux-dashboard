"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Sale } from "@/lib/types";
import SalesLineChart from "@/components/charts/SalesLineChart";
import SalesBarChart from "@/components/charts/SalesBarChart";
import CategoryPieChart from "@/components/charts/CategoryPieChart";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import DataTable from "@/components/DataTable";
import DateRange from "@/components/filters/DateRange";
import CategorySelect from "@/components/filters/CategorySelect";
import Spinner from "@/components/ui/Spinner";
import ExportCsvButton from "@/components/ExportCsvButton";

export default function DashboardPage() {
  const [data, setData] = useState<Sale[] | null>(null);
  const [query, setQuery] = useState("");
  const [dateFrom, setDateFrom] = useState<string | undefined>(undefined);
  const [dateTo, setDateTo] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<string>("ALL");

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch("/api/data");
        const json = await res.json();
        if (mounted) setData(json.sales);
      } catch {
        if (mounted) setData([]);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  const categories = useMemo(
    () => Array.from(new Set((data ?? []).map((d) => d.category))).sort(),
    [data]
  );

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.filter(d => {
      const inQuery =
        !q || d.category.toLowerCase().includes(q) || d.date.includes(q);
      const inCat =
        category === "ALL" || d.category === category;
      const inFrom =
        !dateFrom || d.date.slice(0,10) >= dateFrom;
      const inTo =
        !dateTo || d.date.slice(0,10) <= dateTo;
      return inQuery && inCat && inFrom && inTo;
    });
  }, [data, query, category, dateFrom, dateTo]);

  return (
    <motion.main initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <h1 className="text-3xl font-semibold tracking-tight">UX Dashboard</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Demo with charts, filters, and micro-interactions.
      </p>

      {/* Loading / error states */}
      {!data ? (
        <Card title="Loading data">
          <Spinner />
        </Card>
      ) : data.length === 0 ? (
        <Card title="No data">
          <div className="text-sm text-slate-500">Data could not be loaded.</div>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card title="Search">
              <Input
                placeholder="Filter by category or date (YYYY-MM-DD)…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <DateRange
                  from={dateFrom}
                  to={dateTo}
                  onChange={({ from, to }) => { setDateFrom(from); setDateTo(to); }}
                />
                <CategorySelect
                  categories={categories}
                  value={category}
                  onChange={setCategory}
                />
              </div>
            </Card>

            <Card title="KPIs">
              <div className="text-sm text-slate-500 dark:text-slate-400">Sample data (EUR)</div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900">
                  <div className="text-xs opacity-70">Records</div>
                  <div className="text-lg font-semibold">{filtered.length}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900">
                  <div className="text-xs opacity-70">Categories</div>
                  <div className="text-lg font-semibold">{new Set(filtered.map(f=>f.category)).size}</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900">
                  <div className="text-xs opacity-70">First date</div>
                  <div className="text-lg font-semibold">{filtered[0]?.date ?? "-"}</div>
                </div>
              </div>
              <div className="mt-3">
                <ExportCsvButton rows={filtered} />
              </div>
            </Card>

            <Card title="Status">
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li>Keyboard accessible</li>
                <li>Loading / Empty / Error states</li>
                <li>Smooth transitions</li>
              </ul>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card title="Sales by date (line)">
              <div className="h-64">
                <SalesLineChart data={filtered} />
              </div>
            </Card>
            <Card title="Sales by month & category (stacked bar)">
              <div className="h-64">
                <SalesBarChart data={filtered} />
              </div>
            </Card>
            <Card title="Category distribution (pie)">
              <div className="h-64">
                <CategoryPieChart data={filtered} />
              </div>
            </Card>
            <Card title="Details table">
              <DataTable data={filtered} />
            </Card>
          </div>
        </>
      )}
    </motion.main>
  );
}
