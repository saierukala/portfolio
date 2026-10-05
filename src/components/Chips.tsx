export default function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li key={s} className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted">
          {s}
        </li>
      ))}
    </ul>
  );
}
