"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StockSpine</p>
        <h1>Exports</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"name":"Daily ops CSV","when":"22:00","format":"CSV","status":"Queued"},{"name":"Executive PDF","when":"On demand","format":"PDF","status":"Ready"},{"name":"Audit pack","when":"Weekly","format":"ZIP","status":"Queued"},{"name":"Labor punch","when":"Daily","format":"XLSX","status":"Ready"}]} columns={[{"key":"name","label":"Export"},{"key":"when","label":"Schedule"},{"key":"format","label":"Format"},{"key":"status","label":"Status"}]} searchKeys={["name","when","format","status"]} />
</section>
    </div>
  );
}
