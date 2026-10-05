"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copilot, LiveClock, CommandPalette, ToastStack } from "@/lib/ui";

const NAV = [["/","Waves"],["/inventory","Inventory"],["/zones","Zones"],["/asn","ASN"],["/labor","Labor"],["/exceptions","Exceptions"],["/analytics","Analytics"],["/exports","Exports"],["/settings","Settings"]];
const LINKS = NAV.map(([href, label]) => ({ href, label: String(label) }));
const TOASTS = ["Signal acknowledged", "Board refreshed", "Export queued", "Copilot standing by"];
const PROMPTS = [{"q":"Zone B congestion","a":"Split wave W-214: move oversized to Zone D, open 2 temporary pack lanes, ETA clear 18m."},{"q":"ASN late from Meridian","a":"Re-slot inbound dock 3; priority SKUs to forward pick. Notify replenishment of 4-hour slip."},{"q":"Fill rate dipping","a":"Fill at 93.1%. Hot-pick top 20 SKUs; cycle count aisle B12 tonight."}];

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="shell swiss-grid">
      <header className="topbar">
        <div>
          <div className="brand">Stock<span>Spine</span></div>
          <p style={{ margin: "0.2rem 0 0", fontSize: 11, color: "var(--muted)" }}>Logistics Grid Swiss — barcode/scan aesthetic · <LiveClock /></p>
        </div>
        <nav className="nav" aria-label="Primary">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
      </header>
      <main className="main">{children}</main>
      <CommandPalette links={LINKS} />
      <ToastStack items={TOASTS} />
      <Copilot brand="StockSpine" prompts={PROMPTS} />
    </div>
  );
}
