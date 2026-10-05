"use client";
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";

export function useTick(values: number[], ms = 2400) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % values.length), ms);
    return () => clearInterval(t);
  }, [values.length, ms]);
  return values[i];
}

export function LiveClock({ className = "" }: { className?: string }) {
  const [t, setT] = useState("--:--:--");
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className={className}>{t}</span>;
}

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const style = { ["--fade-delay" as string]: delay + "s" } as CSSProperties;
  return <div className={"fade-in " + className} style={style}>{children}</div>;
}

export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const line = useMemo(() => items.join("   ·   ") + "   ·   ", [items]);
  return (
    <div className={"overflow-hidden whitespace-nowrap " + className} aria-label="Live activity">
      <div className="marquee-track"><span>{line}</span><span aria-hidden>{line}</span></div>
    </div>
  );
}

export function FilterTable({
  rows, columns, searchKeys,
}: {
  rows: Record<string, string | number>[];
  columns: { key: string; label: string }[];
  searchKeys: string[];
}) {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState(columns[0]?.key ?? "");
  const statuses = useMemo(() => {
    const s = new Set(rows.map((r) => String(r.status ?? "")));
    return ["all", ...Array.from(s).filter(Boolean)];
  }, [rows]);
  const filtered = useMemo(() => {
    const qq = q.toLowerCase();
    return rows
      .filter((r) => {
        if (status !== "all" && String(r.status) !== status) return false;
        if (!qq) return true;
        return searchKeys.some((k) => String(r[k] ?? "").toLowerCase().includes(qq));
      })
      .sort((a, b) => String(a[sort] ?? "").localeCompare(String(b[sort] ?? ""), undefined, { numeric: true }));
  }, [rows, q, status, sort, searchKeys]);
  return (
    <div className="ops-table-wrap">
      <div className="ops-table-tools">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" aria-label="Search rows" />
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter status">
          {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by">
          {columns.map((c) => <option key={c.key} value={c.key}>Sort: {c.label}</option>)}
        </select>
      </div>
      <div className="ops-table-scroll">
        <table>
          <thead><tr>{columns.map((c) => <th key={c.key}>{c.label}</th>)}</tr></thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={i}>{columns.map((c) => <td key={c.key}>{String(r[c.key] ?? "")}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="stencil">{filtered.length} rows · live filters</p>
    </div>
  );
}

export function Copilot({ brand, prompts }: { brand: string; prompts: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(false);
  const [reply, setReply] = useState(prompts[0]?.a ?? "");
  return (
    <div className="copilot">
      {open && (
        <div className="copilot-panel" role="dialog" aria-label={brand + " ops copilot"}>
          <header>
            <strong>{brand} Copilot</strong>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close">×</button>
          </header>
          <p className="copilot-hint">Ops recovery — local demo, no network.</p>
          <div className="copilot-prompts">
            {prompts.map((p) => (
              <button key={p.q} type="button" onClick={() => setReply(p.a)}>{p.q}</button>
            ))}
          </div>
          <div className="copilot-reply"><p>{reply}</p></div>
        </div>
      )}
      <button type="button" className="copilot-fab" onClick={() => setOpen((v) => !v)}>AI Ops</button>
    </div>
  );
}

export function Meter({ value, label }: { value: number; label?: string }) {
  return (
    <div>
      {label && <div className="stencil">{label}</div>}
      <div className="meter" aria-hidden><i style={{ ["--w" as string]: Math.min(value, 100) + "%" } as CSSProperties} /></div>
    </div>
  );
}

export function Spark({ seed = 3 }: { seed?: number }) {
  const bars = Array.from({ length: 12 }, (_, i) => 30 + ((i * seed * 17) % 70));
  return (
    <div className="spark" aria-hidden>
      {bars.map((h, i) => (
        <i key={i} style={{ ["--h" as string]: h + "%", ["--d" as string]: i * 0.08 + "s" } as CSSProperties} />
      ))}
    </div>
  );
}

export function CommandPalette({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const filtered = links.filter((l) => l.label.toLowerCase().includes(q.toLowerCase()));
  if (!open) return null;
  return (
    <div className="cmdk" role="dialog" aria-label="Command palette" onClick={() => setOpen(false)}>
      <div className="cmdk-box" onClick={(e) => e.stopPropagation()}>
        <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Jump to module…" />
        {filtered.map((l) => (
          <a key={l.href} href={l.href}><button type="button">{l.label}</button></a>
        ))}
      </div>
    </div>
  );
}

export function ToastStack({ items }: { items: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((x) => (x + 1) % items.length), 4200);
    return () => clearInterval(t);
  }, [items.length]);
  const show = [items[idx], items[(idx + 1) % items.length]];
  return (
    <div className="toast-stack" aria-live="polite">
      {show.map((s, i) => <div key={s + "-" + i} className="toast"><span className="live-dot" />{s}</div>)}
    </div>
  );
}

export function Heatmap({ cells = 32, seed = 5 }: { cells?: number; seed?: number }) {
  return (
    <div className="heat" aria-label="Density heatmap">
      {Array.from({ length: cells }, (_, i) => {
        const o = (20 + ((i * seed * 13) % 80)) / 100;
        return <b key={i} style={{ ["--o" as string]: String(o), ["--d" as string]: (i % 8) * 0.1 + "s" } as CSSProperties} />;
      })}
    </div>
  );
}
