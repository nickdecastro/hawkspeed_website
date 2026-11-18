import { useId } from "react";

// Country flags for the language picker, drawn inline so they look the same on
// every OS (Windows doesn't render flag emoji). Like the game's FlagArt.cs,
// the goal is recognition at dropdown size, not heraldic accuracy, and every
// flag is drawn to the same 3:2 box so the rows line up.

const W = 30;
const H = 20;

function star(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r : r * 0.4;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

function Star({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  return <polygon points={star(cx, cy, r)} fill={fill} />;
}

function Bands({ colors, vertical }: { colors: string[]; vertical: boolean }) {
  const n = colors.length;
  return (
    <>
      {colors.map((c, i) =>
        vertical ? (
          <rect key={i} x={(W / n) * i} y={0} width={W / n + 0.05} height={H} fill={c} />
        ) : (
          <rect key={i} x={0} y={(H / n) * i} width={W} height={H / n + 0.05} fill={c} />
        )
      )}
    </>
  );
}

function UnionJack({ id, width, height }: { id: string; width: number; height: number }) {
  return (
    <svg x={0} y={0} width={width} height={height} viewBox="0 0 60 30" preserveAspectRatio="none">
      <clipPath id={`${id}-t`}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width={60} height={30} fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth={6} />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id}-t)`} stroke="#C8102E" strokeWidth={4} />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth={10} />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth={6} />
    </svg>
  );
}

const MAPLE: [number, number][] = [
  [0, -1], [0.15, -0.7], [0.35, -0.78], [0.3, -0.35], [0.6, -0.6], [0.55, -0.45],
  [0.9, -0.5], [0.8, -0.3], [0.95, -0.2], [0.55, 0.15], [0.6, 0.3], [0.08, 0.25],
  [0.08, 0.75], [-0.08, 0.75], [-0.08, 0.25], [-0.6, 0.3], [-0.55, 0.15], [-0.95, -0.2],
  [-0.8, -0.3], [-0.9, -0.5], [-0.55, -0.45], [-0.6, -0.6], [-0.3, -0.35], [-0.35, -0.78],
  [-0.15, -0.7],
];

function Paint({ country, id }: { country: string; id: string }) {
  switch (country) {
    case "US": {
      const s = H / 13;
      return (
        <>
          {Array.from({ length: 13 }, (_, i) => (
            <rect key={i} x={0} y={i * s} width={W} height={s + 0.05} fill={i % 2 ? "#fff" : "#B22234"} />
          ))}
          <rect x={0} y={0} width={W * 0.4} height={s * 7} fill="#3C3B6E" />
          {Array.from({ length: 4 }, (_, r) =>
            Array.from({ length: 5 }, (_, c) => (
              <circle key={`${r}-${c}`} cx={1.3 + c * 2.35} cy={1.4 + r * 2.5} r={0.45} fill="#fff" />
            ))
          )}
        </>
      );
    }
    case "GB":
      return <UnionJack id={id} width={W} height={H} />;
    case "CA":
      return (
        <>
          <rect width={W} height={H} fill="#fff" />
          <rect width={W * 0.25} height={H} fill="#FF0000" />
          <rect x={W * 0.75} width={W * 0.25} height={H} fill="#FF0000" />
          <polygon
            points={MAPLE.map(([x, y]) => `${W / 2 + x * 6},${H / 2 + y * 6}`).join(" ")}
            fill="#FF0000"
          />
        </>
      );
    case "AU":
      return (
        <>
          <rect width={W} height={H} fill="#00247D" />
          <UnionJack id={id} width={W / 2} height={H / 2} />
          <Star cx={7.5} cy={15.2} r={2.6} fill="#fff" />
          <Star cx={21.6} cy={6} r={1.4} fill="#fff" />
          <Star cx={24} cy={10.4} r={1.8} fill="#fff" />
          <Star cx={21.6} cy={15.2} r={1.4} fill="#fff" />
          <Star cx={19.2} cy={11} r={1.2} fill="#fff" />
        </>
      );
    case "NZ":
      return (
        <>
          <rect width={W} height={H} fill="#00247D" />
          <UnionJack id={id} width={W / 2} height={H / 2} />
          {[
            [22.2, 5.6, 1.5],
            [24.6, 10.4, 1.7],
            [21.6, 14.8, 1.5],
            [19.8, 10, 1.3],
          ].map(([cx, cy, r], i) => (
            <g key={i}>
              <Star cx={cx} cy={cy} r={r + 0.4} fill="#fff" />
              <Star cx={cx} cy={cy} r={r} fill="#CC0000" />
            </g>
          ))}
        </>
      );
    case "IE":
      return <Bands vertical colors={["#169B62", "#fff", "#FF883E"]} />;
    case "FR":
      return <Bands vertical colors={["#0055A4", "#fff", "#EF4135"]} />;
    case "IT":
      return <Bands vertical colors={["#008C45", "#fff", "#CD212A"]} />;
    case "BE":
      return <Bands vertical colors={["#000", "#FADF3C", "#ED2939"]} />;
    case "DE":
      return <Bands vertical={false} colors={["#000", "#DD0000", "#FFCE00"]} />;
    case "AT":
      return <Bands vertical={false} colors={["#ED2939", "#fff", "#ED2939"]} />;
    case "CH":
      return (
        <>
          <rect width={W} height={H} fill="#DA291C" />
          <rect x={W * 0.42} y={H * 0.2} width={W * 0.16} height={H * 0.6} fill="#fff" />
          <rect x={W * 0.29} y={H * 0.4} width={W * 0.42} height={H * 0.2} fill="#fff" />
        </>
      );
    case "ES":
      return (
        <>
          <rect width={W} height={H} fill="#AA151B" />
          <rect y={H * 0.25} width={W} height={H * 0.5} fill="#F1BF00" />
        </>
      );
    case "MX":
      return (
        <>
          <Bands vertical colors={["#006847", "#fff", "#CE1126"]} />
          <circle cx={W / 2} cy={H / 2} r={H * 0.14} fill="#785A2D" />
        </>
      );
    case "AR":
      return (
        <>
          <Bands vertical={false} colors={["#75AADB", "#fff", "#75AADB"]} />
          <circle cx={W / 2} cy={H / 2} r={H * 0.11} fill="#FFC53F" />
        </>
      );
    case "CO":
      return (
        <>
          <rect width={W} height={H} fill="#FCD116" />
          <rect y={H * 0.5} width={W} height={H * 0.25} fill="#003893" />
          <rect y={H * 0.75} width={W} height={H * 0.25} fill="#CE1126" />
        </>
      );
    case "CL":
      return (
        <>
          <rect width={W} height={H} fill="#D52B1E" />
          <rect width={W} height={H / 2} fill="#fff" />
          <rect width={W / 3} height={H / 2} fill="#0039A6" />
          <Star cx={W / 6} cy={H / 4} r={H * 0.16} fill="#fff" />
        </>
      );
    case "BR":
      return (
        <>
          <rect width={W} height={H} fill="#009739" />
          <polygon points={`${W / 2},${H * 0.1} ${W * 0.9},${H / 2} ${W / 2},${H * 0.9} ${W * 0.1},${H / 2}`} fill="#FFDF00" />
          <circle cx={W / 2} cy={H / 2} r={H * 0.2} fill="#002776" />
        </>
      );
    case "PT":
      return (
        <>
          <rect width={W} height={H} fill="#DA291C" />
          <rect width={W * 0.4} height={H} fill="#006647" />
          <circle cx={W * 0.4} cy={H / 2} r={H * 0.2} fill="#FFE400" />
          <circle cx={W * 0.4} cy={H / 2} r={H * 0.12} fill="#DA291C" />
        </>
      );
    default:
      return <rect width={W} height={H} fill="#474D4A" />;
  }
}

export default function Flag({ country, className }: { country: string; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      aria-hidden
      focusable="false"
      style={{ borderRadius: 2, boxShadow: "0 0 0 1px rgba(255,255,255,0.15)" }}
    >
      <Paint country={country} id={id} />
    </svg>
  );
}
