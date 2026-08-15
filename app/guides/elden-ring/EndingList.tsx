import type { Ending } from "./types";

export default function EndingList({
  endings,
  onSelect,
}: {
  endings: Ending[];
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {endings.map((ending, index) => (
        <button
          key={ending.id}
          type="button"
          onClick={() => onSelect(ending.id)}
          className="flex items-center justify-between gap-3 rounded-lg border border-white/10 p-5 text-left transition-colors hover:bg-white/5"
        >
          <span className="font-medium">
            {index + 1}. {ending.title}
          </span>
          <span className="text-foreground/50" aria-hidden>
            ›
          </span>
        </button>
      ))}
    </div>
  );
}
