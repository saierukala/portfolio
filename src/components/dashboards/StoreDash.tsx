import { Chip, Frame } from "./ui";

const products = [
  { n: "Kalamkari Saree", p: "Rs 2,450", g: "from-orange-500/80 to-rose-700/80" },
  { n: "Dupatta Set", p: "Rs 1,190", g: "from-amber-400/80 to-orange-700/80" },
  { n: "Block Print Kurta", p: "Rs 1,680", g: "from-teal-500/70 to-emerald-800/80" },
  { n: "Cotton Stole", p: "Rs 790", g: "from-rose-400/80 to-fuchsia-800/70" },
  { n: "Wall Hanging", p: "Rs 3,200", g: "from-yellow-500/80 to-red-800/80" },
  { n: "Cushion Cover", p: "Rs 540", g: "from-sky-500/70 to-indigo-800/80" },
];

export default function StoreDash() {
  return (
    <Frame url="store.shop/collections/sarees">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-[1.2em] border-b border-line px-[1.2em] py-[0.8em]">
          <b className="text-[1.2em]">Kalamkari</b>
          <span className="text-muted">Sarees</span>
          <span className="text-muted">Home</span>
          <span className="text-muted">New</span>
          <span className="ml-auto rounded-[0.5em] border border-line px-[0.9em] py-[0.3em] text-muted">Search…</span>
          <Chip tone="info">Cart · 2</Chip>
        </div>
        <div className="flex min-h-0 flex-1 gap-[1em] p-[1.1em]">
          <div className="grid min-w-0 flex-1 grid-cols-3 gap-[0.8em]">
            {products.map((p) => (
              <div key={p.n} className="flex flex-col overflow-hidden rounded-[0.7em] border border-line bg-surface">
                <div className={`flex-1 bg-gradient-to-br ${p.g}`} />
                <div className="p-[0.6em]">
                  <div className="truncate font-medium">{p.n}</div>
                  <div className="font-mono text-accent">{p.p}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-[17em] shrink-0 flex-col gap-[0.7em] rounded-[0.7em] border border-line bg-surface p-[1em]">
            <div className="font-mono text-[0.85em] uppercase tracking-wider text-muted">Checkout</div>
            <div className="flex items-center gap-[0.4em]">
              {["Cart", "Address", "Pay"].map((s, i) => (
                <span key={s} className="flex items-center gap-[0.4em]">
                  <i className={`flex h-[1.5em] w-[1.5em] items-center justify-center rounded-full text-[0.8em] ${i < 2 ? "bg-accent text-accent-ink" : "bg-line text-muted"}`}>
                    {i + 1}
                  </i>
                  {i < 2 && <i className="h-[2px] w-[1.2em] bg-accent" />}
                </span>
              ))}
            </div>
            <div className="flex justify-between"><span>Kalamkari Saree</span><span className="font-mono">Rs 2,450</span></div>
            <div className="flex justify-between"><span>Dupatta Set</span><span className="font-mono">Rs 1,190</span></div>
            <div className="flex justify-between border-t border-line pt-[0.6em] font-semibold"><span>Total</span><span className="font-mono">Rs 3,640</span></div>
            <div className="rounded-[0.5em] bg-gradient-accent py-[0.6em] text-center font-semibold text-accent-ink">Place order</div>
            <div className="mt-auto">
              <Chip tone="ok">Lighthouse 90+</Chip>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}
