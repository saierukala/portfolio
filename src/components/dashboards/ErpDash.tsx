import { Card, Chip, Frame, Sidebar, Stat } from "./ui";

const rows = [
  { sku: "FRT-2041", item: "NPK Fertiliser 50kg", qty: 82, tone: "ok", s: "In stock" },
  { sku: "SDS-1180", item: "Hybrid Paddy Seed", qty: 18, tone: "bad", s: "Low stock" },
  { sku: "PST-0932", item: "Bio Pesticide 5L", qty: 46, tone: "ok", s: "In stock" },
  { sku: "IRR-0417", item: "Drip Irrigation Kit", qty: 27, tone: "warn", s: "Reorder soon" },
  { sku: "TLS-0220", item: "Sprayer Pump 16L", qty: 64, tone: "ok", s: "In stock" },
  { sku: "FRT-2058", item: "Urea 45kg Bag", qty: 71, tone: "ok", s: "In stock" },
  { sku: "SDS-1204", item: "Maize Seed Pack", qty: 33, tone: "warn", s: "Reorder soon" },
  { sku: "PST-0955", item: "Fungicide 1L", qty: 58, tone: "ok", s: "In stock" },
] as const;

export default function ErpDash() {
  return (
    <Frame url="erp.company.app/inventory">
      <Sidebar brand="ERP" items={["Dashboard", "Sales", "Purchasing", "Inventory", "Reports"]} active={3} />
      <div className="flex min-w-0 flex-1 gap-[1em] p-[1.1em]">
        <div className="flex min-w-0 flex-1 flex-col gap-[0.9em]">
          <div className="flex items-center gap-[0.5em]">
            {["Sales", "Purchasing", "Inventory"].map((t) => (
              <span
                key={t}
                className={`rounded-[0.5em] px-[1em] py-[0.35em] ${
                  t === "Inventory" ? "bg-accent/15 font-medium text-accent" : "text-muted"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-[0.8em]">
            <Stat label="SKUs" value="1,248" />
            <Stat label="Low stock" value="14" hint="needs action" />
            <Stat label="Open POs" value="37" />
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[0.7em] border border-line bg-surface">
            <div className="grid grid-cols-[1.1fr_2fr_1.6fr_1.2fr] gap-[0.8em] border-b border-line px-[1em] py-[0.55em] font-mono text-[0.85em] uppercase text-muted">
              <span>SKU</span>
              <span>Item</span>
              <span>Stock</span>
              <span>Status</span>
            </div>
            {rows.map((r) => (
              <div
                key={r.sku}
                className="grid grid-cols-[1.1fr_2fr_1.6fr_1.2fr] items-center gap-[0.8em] border-b border-line px-[1em] py-[0.6em]"
              >
                <span className="font-mono text-muted">{r.sku}</span>
                <span className="truncate">{r.item}</span>
                <span className="flex items-center gap-[0.5em]">
                  <i className="h-[0.5em] flex-1 overflow-hidden rounded-full bg-line">
                    <b
                      className={`block h-full rounded-full ${r.tone === "bad" ? "bg-rose-500" : r.tone === "warn" ? "bg-amber-500" : "bg-accent"}`}
                      style={{ width: `${r.qty}%` }}
                    />
                  </i>
                  <span className="font-mono text-[0.9em]">{r.qty}</span>
                </span>
                <Chip tone={r.tone}>{r.s}</Chip>
              </div>
            ))}
            <div className="mt-auto flex items-center justify-between px-[1em] py-[0.5em] font-mono text-[0.85em] text-muted">
              <span>Page 1 of 48 · server-side pagination</span>
              <span>25 / page</span>
            </div>
          </div>
        </div>
        <div className="flex w-[17em] shrink-0 flex-col gap-[0.9em]">
          <Card title="AI recommendations" className="flex-1">
            <div className="mb-[0.7em] rounded-[0.5em] border border-rose-500/30 bg-rose-500/10 p-[0.7em]">
              <div className="font-medium">Reorder: Hybrid Paddy Seed</div>
              <div className="text-[0.85em] text-muted">Projected shortage in 6 days · Priority P1</div>
            </div>
            <div className="rounded-[0.5em] border border-amber-500/30 bg-amber-500/10 p-[0.7em]">
              <div className="font-medium">Reorder: Drip Irrigation Kit</div>
              <div className="text-[0.85em] text-muted">Priority P2</div>
            </div>
          </Card>
        </div>
      </div>
    </Frame>
  );
}
