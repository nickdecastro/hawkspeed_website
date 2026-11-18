import type { QuestStep, WalkthroughZone } from "../types";

const WARNING_PREFIX = "Point of no return:";

// Turns full-walkthrough.md into zones of checklist steps. See the notes at
// the top of that file for the format: "##" = zone, "###" = step, and a
// "Point of no return:" line = the step's warning. Steps are labeled
// "<zone>.<step>", taking the zone number from its "N." title prefix.
export function parseWalkthrough(source: string): WalkthroughZone[] {
  const zones: WalkthroughZone[] = [];
  let zone: WalkthroughZone | null = null;
  let zoneNumber = "";
  let step: QuestStep | null = null;

  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (line.startsWith("## ")) {
      const title = line.slice(3).trim();
      zoneNumber = title.match(/^(\d+)\./)?.[1] ?? String(zones.length);
      zone = { id: `zone-${zones.length}`, title, steps: [] };
      zones.push(zone);
      step = null;
    } else if (line.startsWith("### ") && zone) {
      step = {
        id: `${zone.id}-${zone.steps.length}`,
        label: `${zoneNumber}.${zone.steps.length + 1}`,
        title: line.slice(4).trim(),
        description: "",
        altersPlaythrough: false,
        consequence: null,
      };
      zone.steps.push(step);
    } else if (line && step) {
      if (line.startsWith(WARNING_PREFIX)) {
        step.altersPlaythrough = true;
        step.consequence = line.slice(WARNING_PREFIX.length).trim();
      } else {
        step.description = step.description ? `${step.description} ${line}` : line;
      }
    }
  }

  return zones;
}
