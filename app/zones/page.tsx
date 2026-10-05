"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StockSpine</p>
        <h1>Zones</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <div className="stat-cards">
          <div className="stat-card"><h3>Zone A</h3><b>74%</b><Meter value={74}/></div>
          <div className="stat-card"><h3>Zone B</h3><b>112%</b><Meter value={100}/></div>
          <div className="stat-card"><h3>Zone C</h3><b>68%</b><Meter value={68}/></div>
        </div><section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"zone":"A","waves":3,"util":"74%","congestion":"Low","status":"Stable"},{"zone":"B","waves":4,"util":"112%","congestion":"High","status":"Congested"},{"zone":"C","waves":2,"util":"68%","congestion":"Low","status":"Stable"},{"zone":"D","waves":3,"util":"81%","congestion":"Med","status":"Watch"}]} columns={[{"key":"zone","label":"Zone"},{"key":"waves","label":"Waves"},{"key":"util","label":"Util"},{"key":"congestion","label":"Congestion"},{"key":"status","label":"Status"}]} searchKeys={["zone","waves","util","congestion","status"]} />
</section>
    </div>
  );
}
