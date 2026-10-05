"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StockSpine</p>
        <h1>Labor</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"name":"R. Cole","role":"Picker","zone":"A","uph":162,"status":"Active"},{"name":"S. Ng","role":"Picker","zone":"B","uph":141,"status":"Active"},{"name":"L. Diaz","role":"Packer","zone":"C","uph":118,"status":"Break"},{"name":"K. West","role":"Picker","zone":"D","uph":155,"status":"Active"}]} columns={[{"key":"name","label":"Name"},{"key":"role","label":"Role"},{"key":"zone","label":"Zone"},{"key":"uph","label":"UPH"},{"key":"status","label":"Status"}]} searchKeys={["name","role","zone","uph","status"]} />
</section>
    </div>
  );
}
