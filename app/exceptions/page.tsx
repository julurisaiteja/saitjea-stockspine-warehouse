"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StockSpine</p>
        <h1>Exceptions</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"id":"E-220","type":"Short pick","sku":"SKU-210","zone":"B","status":"Open"},{"id":"E-221","type":"Damage","sku":"SKU-501","zone":"A","status":"Review"},{"id":"E-222","type":"Mis-slot","sku":"SKU-118","zone":"C","status":"Open"},{"id":"E-223","type":"Cycle count","sku":"SKU-882","zone":"B","status":"Queued"}]} columns={[{"key":"id","label":"ID"},{"key":"type","label":"Type"},{"key":"sku","label":"SKU"},{"key":"zone","label":"Zone"},{"key":"status","label":"Status"}]} searchKeys={["id","type","sku","zone","status"]} />
</section>
    </div>
  );
}
