"use client";
import { FilterTable, Meter, Spark, Heatmap } from "@/lib/ui";
import { MixBars, MixPie, TrendArea } from "@/components/Charts";

export default function Page() {
  return (
    <div className="page-stack">
      <header className="page-head">
        <p className="kicker">StockSpine</p>
        <h1>Inventory</h1>
      </header>
      <div className="action-bar">
        <button type="button" className="primary">Primary action</button>
        <button type="button">Refresh</button>
        <button type="button">Assign</button>
        <span className="chip on">Live</span>
      </div>
      <section className="panel"><h2>Module board</h2>
<FilterTable rows={[{"sku":"SKU-441","desc":"Carton tape","onHand":420,"reserved":80,"status":"OK"},{"sku":"SKU-882","desc":"Mailer M","onHand":90,"reserved":70,"status":"Risk"},{"sku":"SKU-210","desc":"Bubble wrap","onHand":12,"reserved":12,"status":"Short"},{"sku":"SKU-118","desc":"Label roll","onHand":300,"reserved":40,"status":"OK"},{"sku":"SKU-501","desc":"Poly mailer","onHand":55,"reserved":48,"status":"Risk"}]} columns={[{"key":"sku","label":"SKU"},{"key":"desc","label":"Desc"},{"key":"onHand","label":"On hand"},{"key":"reserved","label":"Reserved"},{"key":"status","label":"Status"}]} searchKeys={["sku","desc","onHand","reserved","status"]} />
</section><section className="panel"><h2>Aisle heat</h2><Heatmap seed={6}/></section>
    </div>
  );
}
