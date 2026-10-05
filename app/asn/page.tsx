"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StockSpine</p>
        <h1>ASN inbound</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"asn":"ASN-991","carrier":"Meridian","dock":3,"eta":"19m","lines":48,"status":"Delayed"},{"asn":"ASN-992","carrier":"Northline","dock":1,"eta":"On site","lines":22,"status":"Receiving"},{"asn":"ASN-993","carrier":"BlueHaul","dock":2,"eta":"45m","lines":61,"status":"Scheduled"},{"asn":"ASN-994","carrier":"Meridian","dock":4,"eta":"70m","lines":30,"status":"Scheduled"}]} columns={[{"key":"asn","label":"ASN"},{"key":"carrier","label":"Carrier"},{"key":"dock","label":"Dock"},{"key":"eta","label":"ETA"},{"key":"lines","label":"Lines"},{"key":"status","label":"Status"}]} searchKeys={["asn","carrier","dock","eta","lines","status"]} />
</section>
    </div>
  );
}
