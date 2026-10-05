"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StockSpine</p>
        <h1>Alerts</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><div className="alert-list"><div className="alert"><span className="badge">CRIT</span> Zone B congestion 112% util</div><div className="alert"><span className="badge">WARN</span> ASN-991 dock wait 19m</div><div className="alert"><span className="badge">WARN</span> Fill rate dipping below 93.5%</div><div className="alert"><span className="badge">INFO</span> Pack lane 4 opened</div></div></section><section className="panel"><h2>Signal density</h2><Heatmap seed={9}/></section>
    </div>
  );
}
