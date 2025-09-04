"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import SalesLineChart from "@/components/charts/SalesLineChart";
import SalesBarChart from "@/components/charts/SalesBarChart";
import CategoryPieChart from "@/components/charts/CategoryPieChart";
import { Sale } from "@/lib/types";
import Spinner from "@/components/ui/Spinner";

export default function ChartsPage() {
  const [data, setData] = useState<Sale[] | null>(null);
  useEffect(() => { (async () => {
    const r = await fetch("/api/data"); const j = await r.json(); setData(j.sales);
  })(); }, []);

  if (!data) return <Card title="Cargando"><Spinner /></Card>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card title="Línea">
        <div className="h-64"><SalesLineChart data={data} /></div>
      </Card>
      <Card title="Barras apiladas">
        <div className="h-64"><SalesBarChart data={data} /></div>
      </Card>
      <Card title="Pie">
        <div className="h-64"><CategoryPieChart data={data} /></div>
      </Card>
    </div>
  );
}
