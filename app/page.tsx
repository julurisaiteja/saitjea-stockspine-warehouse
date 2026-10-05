"use client";
import { FadeIn, FilterTable, Marquee, Meter, Spark, Heatmap, useTick } from "@/lib/ui";
import { MixBars, TrendArea } from "@/components/Charts";
const KPIS=[{label:"Fill rate",values:[93.1,94,92.4,93.8],suffix:"%"},{label:"Open waves",values:[7,8,6,9],suffix:""},{label:"Units/hr",values:[148,152,141,155],suffix:""},{label:"ASN due",values:[5,4,6,3],suffix:""},{label:"Exceptions",values:[12,9,14,11],suffix:""},{label:"Dock wait",values:[18,22,15,19],suffix:"m"}];
const ACTIVITY=["Wave W-214 staged","ASN-991 dock 3","Zone B 112% util","Cycle count B12","Pack lane 4 open"];
const ROWS=[{wave:"W-208",zone:"A",lines:42,units:510,picker:"R. Cole",status:"Packing"},{wave:"W-209",zone:"B",lines:58,units:640,picker:"S. Ng",status:"Congested"},{wave:"W-210",zone:"C",lines:31,units:290,picker:"L. Diaz",status:"Picking"},{wave:"W-211",zone:"D",lines:47,units:520,picker:"K. West",status:"Staged"},{wave:"W-212",zone:"A",lines:39,units:410,picker:"M. Hayes",status:"Picking"},{wave:"W-213",zone:"B",lines:62,units:700,picker:"P. Fox",status:"Congested"},{wave:"W-214",zone:"C",lines:28,units:260,picker:"A. Vale",status:"Staged"},{wave:"W-215",zone:"D",lines:44,units:480,picker:"J. Ruiz",status:"Packing"},{wave:"W-216",zone:"A",lines:36,units:330,picker:"T. Park",status:"Picking"},{wave:"W-217",zone:"B",lines:51,units:590,picker:"E. Bloom",status:"Watch"},{wave:"W-218",zone:"C",lines:33,units:300,picker:"N. Kim",status:"Staged"},{wave:"W-219",zone:"D",lines:40,units:450,picker:"C. Shah",status:"Packing"}];
export default function Page(){return(<div className="page-stack">
<header className="page-head"><p className="kicker"><span className="live-dot"/>LOGISTICS GRID SWISS</p><h1>Pick-wave control</h1>
<p style={{color:"var(--muted)",maxWidth:560,margin:"0.4rem 0 0"}}>Barcode-tight Swiss grid — zone heat, ASN pressure, fill-rate truth.</p></header>
<div className="barcode" aria-hidden/>
<div className="video-film"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80" alt="Warehouse"/><div className="cap">SCAN FILM · WAVE FLOOR</div></div>
<Marquee items={ACTIVITY} className="panel"/>
<div className="kpi-grid">{KPIS.map((k,i)=><FadeIn key={k.label} delay={i*0.05} className="kpi"><Kpi {...k}/><Spark seed={i+3}/></FadeIn>)}</div>
<div className="split-3">
<section className="panel"><h2>Zone utilization</h2><div className="rail-progress">{[["Zone A",74],["Zone B",100],["Zone C",68],["Zone D",81]].map(([n,v])=><div className="rail-row" key={String(n)}><span>{n}</span><Meter value={Number(v)}/><span>{v}%</span></div>)}</div></section>
<section className="panel"><h2>Slot density</h2><Heatmap seed={11}/></section>
<section className="panel"><h2>Dock clock</h2><div className="stat-card"><h3>Dock 3 wait</h3><b>19m</b><Meter value={63}/></div><div className="stat-card" style={{marginTop:8}}><h3>ASN accuracy</h3><b>97%</b><Spark seed={6}/></div></section>
</div>
<div className="grid-2"><section className="panel"><h2>Units / hour</h2><TrendArea/></section><section className="panel"><h2>Exception mix</h2><MixBars/></section></div>
<section className="panel"><h2>Wave board</h2><FilterTable rows={ROWS} columns={[{key:"wave",label:"Wave"},{key:"zone",label:"Zone"},{key:"lines",label:"Lines"},{key:"units",label:"Units"},{key:"picker",label:"Picker"},{key:"status",label:"Status"}]} searchKeys={["wave","zone","picker","status"]}/></section>
</div>);}
function Kpi({label,values,suffix}:{label:string;values:number[];suffix:string}){const v=useTick(values);const display=Number.isInteger(values[0])?String(v):v.toFixed(1);return(<><b>{display}{suffix}</b><span>{label}</span></>);}
