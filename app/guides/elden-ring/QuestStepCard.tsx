import type { QuestStep } from "./types";

export default function QuestStepCard({
  step,
  checked,
  expanded,
  onToggleExpand,
  onCheckedChange,
}: {
  step: QuestStep;
  checked: boolean;
  expanded: boolean;
  onToggleExpand: () => void;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="rounded-lg border border-white/10 overflow-hidden">
      <button
        type="button"
        onClick={onToggleExpand}
        aria-expanded={expanded}
        className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-white/5"
      >
        {step.altersPlaythrough && (
          <span
            className="text-foreground"
            title="Warning: permanently alters your playthrough"
            aria-hidden
          >
            !
          </span>
        )}
        <span
          className={`flex-1 ${
            checked ? "text-foreground/50 line-through decoration-foreground/30" : "font-medium"
          }`}
        >
          {step.title}
        </span>
        <span className="text-foreground/50" aria-hidden>
          {expanded ? "⌄" : "›"}
        </span>
      </button>
      {expanded && (
        <div className="border-t border-white/10 p-4">
          <p className="text-sm text-foreground/80">{step.description}</p>
          {step.altersPlaythrough && step.consequence && (
            <div className="mt-4 rounded-md border border-foreground/30 bg-foreground/5 p-3">
              <p className="text-xs font-semibold tracking-wide text-foreground uppercase">
                ⚠ Why this changes your playthrough
              </p>
              <p className="mt-1 text-sm text-foreground/80">{step.consequence}</p>
            </div>
          )}
          <label className="mt-4 flex items-center justify-end gap-2 text-sm text-foreground/80">
            <span>{checked ? "Completed" : "Mark as done"}</span>
            <input
              type="checkbox"
              checked={checked}
              onChange={(event) => onCheckedChange(event.target.checked)}
              className="h-5 w-5 accent-foreground"
            />
          </label>
        </div>
      )}
    </div>
  );
}
