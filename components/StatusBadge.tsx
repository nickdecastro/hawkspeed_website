export default function StatusBadge({ children }: { children: string }) {
  return (
    <span className="inline-block w-fit rounded-full border border-foreground/30 px-2 py-0.5 text-xs font-medium tracking-wide text-foreground/80 uppercase">
      {children}
    </span>
  );
}
