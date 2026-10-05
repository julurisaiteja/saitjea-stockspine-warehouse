"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StockSpine</p>
        <h1>Settings</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><div className="toggle-row"><span>Live KPI ticks</span><span className="badge">ON</span></div><div className="toggle-row"><span>Motion / film ribbons</span><span className="badge">ON</span></div><div className="toggle-row"><span>Command palette (⌘K)</span><span className="badge">ON</span></div><div className="toggle-row"><span>Copilot suggestions</span><span className="badge">ON</span></div><div className="toggle-row"><span>Toast notifications</span><span className="badge">ON</span></div></section>
    </div>
  );
}
