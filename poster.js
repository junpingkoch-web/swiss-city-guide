// Hand-drawn-style illustrated trip poster generator (Morandi muted palette).
// Renders an inline SVG (icons + curved route line + a sticky-note tip) and
// offers a PNG export via canvas. No build step, no external image assets.
(function (global) {
  "use strict";

  const PALETTE = ["#c17a6f", "#8a9a7e", "#7c93a8", "#c2a35c", "#9c8977", "#b98b9e"];

  const ICON_MAP = {
    mountain: ["⛰️", "🏔️"],
    water: ["⛴️", "🌊", "🚤", "⛵"],
    church: ["⛪", "🏛️"],
    castle: ["🏰", "🏯"],
    bridge: ["🌉"],
    food: ["🍽️", "🥘", "🧀", "🍬", "🥧", "🍦", "🍨", "🍝", "🥓", "🌭", "🍇", "🍷", "🥣", "🍪", "🐟"],
    art: ["🎨", "🖼️"],
    animal: ["🦁", "🐻", "🦉"],
    clock: ["🕰️", "🏺"],
    transport: ["🚠", "🚂", "🚡"],
    shopping: ["🛍️"],
    airport: ["✈️"],
    garden: ["🌹", "🌺", "🏞️", "🌲"]
  };

  function categoryFor(emoji) {
    for (const cat in ICON_MAP) {
      if (ICON_MAP[cat].indexOf(emoji) !== -1) return cat;
    }
    return "pin";
  }

  function iconInner(cat, color) {
    switch (cat) {
      case "mountain":
        return `<path d="M4,34 L17,12 L24,22 L31,8 L44,34 Z" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round"/><path d="M27,13 L31,8 L35,13" fill="none" stroke="${color}" stroke-width="2"/>`;
      case "water":
        return `<path d="M4,20 Q10,14 16,20 T28,20 T40,20" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/><path d="M4,28 Q10,22 16,28 T28,28 T40,28" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>`;
      case "church":
        return `<rect x="12" y="20" width="24" height="18" fill="none" stroke="${color}" stroke-width="2.5"/><path d="M12,20 L24,8 L36,20 Z" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round"/><line x1="24" y1="8" x2="24" y2="2" stroke="${color}" stroke-width="2"/><line x1="20" y1="4" x2="28" y2="4" stroke="${color}" stroke-width="2"/>`;
      case "castle":
        return `<rect x="10" y="18" width="28" height="20" fill="none" stroke="${color}" stroke-width="2.5"/><path d="M10,18 L10,10 L15,10 L15,14 L20,14 L20,10 L28,10 L28,14 L33,14 L33,10 L38,10 L38,18" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round"/><rect x="21" y="26" width="6" height="12" fill="none" stroke="${color}" stroke-width="2"/>`;
      case "bridge":
        return `<path d="M4,32 Q24,10 44,32" fill="none" stroke="${color}" stroke-width="2.5"/><line x1="14" y1="24" x2="14" y2="38" stroke="${color}" stroke-width="2"/><line x1="34" y1="24" x2="34" y2="38" stroke="${color}" stroke-width="2"/><line x1="4" y1="38" x2="44" y2="38" stroke="${color}" stroke-width="2.5"/>`;
      case "food":
        return `<circle cx="24" cy="28" r="12" fill="none" stroke="${color}" stroke-width="2.5"/><path d="M18,12 Q18,18 20,20 M24,10 Q24,17 24,20 M30,12 Q30,18 28,20" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>`;
      case "art":
        return `<rect x="8" y="8" width="32" height="26" fill="none" stroke="${color}" stroke-width="2.5"/><path d="M8,28 L18,18 L26,24 L32,16 L40,28" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="15" r="2.5" fill="${color}"/><line x1="24" y1="34" x2="24" y2="40" stroke="${color}" stroke-width="2"/><line x1="17" y1="40" x2="31" y2="40" stroke="${color}" stroke-width="2"/>`;
      case "animal":
        return `<circle cx="24" cy="30" r="6" fill="none" stroke="${color}" stroke-width="2.5"/><circle cx="15" cy="20" r="4" fill="none" stroke="${color}" stroke-width="2.2"/><circle cx="24" cy="16" r="4" fill="none" stroke="${color}" stroke-width="2.2"/><circle cx="33" cy="20" r="4" fill="none" stroke="${color}" stroke-width="2.2"/>`;
      case "clock":
        return `<circle cx="24" cy="22" r="14" fill="none" stroke="${color}" stroke-width="2.5"/><line x1="24" y1="22" x2="24" y2="13" stroke="${color}" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="22" x2="30" y2="24" stroke="${color}" stroke-width="2" stroke-linecap="round"/><line x1="16" y1="40" x2="32" y2="40" stroke="${color}" stroke-width="2.5"/>`;
      case "transport":
        return `<line x1="6" y1="10" x2="42" y2="26" stroke="${color}" stroke-width="2"/><rect x="16" y="22" width="16" height="12" rx="2" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(15 24 28)"/>`;
      case "shopping":
        return `<path d="M14,18 Q14,8 24,8 Q34,8 34,18" fill="none" stroke="${color}" stroke-width="2.2"/><rect x="10" y="18" width="28" height="20" fill="none" stroke="${color}" stroke-width="2.5"/>`;
      case "airport":
        return `<path d="M6,26 L34,20 L44,24 L34,28 L28,38 L24,37 L27,27 L14,29 L10,34 L6,33 L10,26 Z" fill="none" stroke="${color}" stroke-width="2"/>`;
      case "garden":
        return `<circle cx="24" cy="16" r="5" fill="none" stroke="${color}" stroke-width="2.2"/><circle cx="16" cy="22" r="5" fill="none" stroke="${color}" stroke-width="2.2"/><circle cx="32" cy="22" r="5" fill="none" stroke="${color}" stroke-width="2.2"/><circle cx="24" cy="26" r="4" fill="${color}" opacity="0.5"/><line x1="24" y1="30" x2="24" y2="42" stroke="${color}" stroke-width="2.2"/>`;
      default:
        return `<path d="M24,4 C33,4 40,11 40,20 C40,30 24,44 24,44 C24,44 8,30 8,20 C8,11 15,4 24,4 Z" fill="none" stroke="${color}" stroke-width="2.5"/><circle cx="24" cy="19" r="5" fill="none" stroke="${color}" stroke-width="2.2"/>`;
    }
  }

  function iconSvg(cat, color, x, y, size) {
    const s = size / 48;
    return `<g transform="translate(${x - size / 2}, ${y - size / 2}) scale(${s})">${iconInner(cat, color)}</g>`;
  }

  function escapeXml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function hasCJK(s) { return /[一-鿿]/.test(s); }

  function wrapByChars(str, n) {
    const lines = [];
    let cur = "";
    String(str).split(" ").forEach((word) => {
      const candidate = cur ? cur + " " + word : word;
      if (candidate.length > n && cur) {
        lines.push(cur);
        cur = word;
      } else {
        cur = candidate;
      }
    });
    if (cur) lines.push(cur);
    // hard-split any still-too-long line (handles CJK with no spaces)
    const out = [];
    lines.forEach((line) => {
      while (line.length > n) {
        out.push(line.slice(0, n));
        line = line.slice(n);
      }
      out.push(line);
    });
    return out;
  }

  function buildPath(points) {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1], p1 = points[i];
      const mx = (p0.x + p1.x) / 2;
      const my = (p0.y + p1.y) / 2 + (i % 2 === 0 ? 22 : -22);
      d += ` Q ${mx} ${my} ${p1.x} ${p1.y}`;
    }
    return d;
  }

  function render(container, opts) {
    const stops = (opts.stops || []).slice(0, 8);
    const width = 820, height = 460;
    const marginX = 74;
    const usableW = width - marginX * 2;
    const baseY = 240;

    const points = stops.map((s, i) => ({
      x: marginX + (stops.length > 1 ? (usableW * i) / (stops.length - 1) : usableW / 2),
      y: baseY + (i % 2 === 0 ? -16 : 16),
      stop: s
    }));

    const pathD = buildPath(points);

    let iconsSvg = "";
    let labelsSvg = "";
    let dotsSvg = "";
    points.forEach((p, i) => {
      const cat = categoryFor(p.stop.emoji);
      const color = PALETTE[i % PALETTE.length];
      iconsSvg += iconSvg(cat, color, p.x, p.y, 46);
      const label = escapeXml((p.stop.label || "").slice(0, 14));
      labelsSvg += `<text x="${p.x}" y="${p.y + (i % 2 === 0 ? 42 : -32)}" text-anchor="middle" font-size="13" fill="#5c534a">${label}</text>`;
      if (i > 0) dotsSvg += `<circle cx="${p.x}" cy="${p.y}" r="3" fill="#b98b6f"/>`;
    });

    const perLine = hasCJK(opts.tip || "") ? 15 : 32;
    const tipLines = wrapByChars(opts.tip || "", perLine).slice(0, 4);
    const tipTspans = tipLines.map((line, i) => `<tspan x="16" dy="${i === 0 ? 0 : 16}">${escapeXml(line)}</tspan>`).join("");

    const title = escapeXml(opts.title || "");

    const svg = `
<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" font-family="'Kalam','Caveat','Segoe UI',sans-serif">
  <defs>
    <linearGradient id="posterBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f4efe6"/>
      <stop offset="1" stop-color="#eae2d3"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise"/>
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.025 0"/>
    </filter>
  </defs>
  <rect x="0" y="0" width="${width}" height="${height}" rx="18" fill="url(#posterBg)"/>
  <rect x="0" y="0" width="${width}" height="${height}" rx="18" filter="url(#grain)"/>
  <rect x="6" y="6" width="${width - 12}" height="${height - 12}" rx="14" fill="none" stroke="#c8bca6" stroke-width="2" stroke-dasharray="1 7" stroke-linecap="round"/>
  <g transform="translate(24,22)">
    <rect x="0" y="6" width="20" height="20" fill="#c17a6f" opacity="0.85"/>
    <rect x="7" y="0" width="6" height="32" fill="#f4efe6"/>
    <rect x="0" y="13" width="20" height="6" fill="#f4efe6"/>
  </g>
  <text x="${width / 2}" y="50" text-anchor="middle" font-size="28" fill="#6b5f4f" font-weight="700">${title}</text>
  <path d="${pathD}" fill="none" stroke="#b98b6f" stroke-width="2.5" stroke-dasharray="7 8" stroke-linecap="round"/>
  ${dotsSvg}
  ${iconsSvg}
  ${labelsSvg}
  <g transform="translate(${width - 260}, ${height - 150})">
    <path d="M0,20 Q0,0 20,0 L220,0 Q240,0 240,20 L240,100 Q240,120 220,120 L20,120 Q0,120 0,100 Z" fill="#e8d9a8" opacity="0.92" stroke="#c9b26e" stroke-width="1.5"/>
    <text x="16" y="24" font-size="14" fill="#7a6a3a" font-weight="700">💡 ${escapeXml(opts.tipTitle || "")}</text>
    <text x="16" y="46" font-size="12" fill="#5c4e28" font-family="'Segoe UI',sans-serif">${tipTspans}</text>
  </g>
</svg>`;

    container.innerHTML = svg;
  }

  function download(container, filename) {
    const svgEl = container.querySelector("svg");
    if (!svgEl) return;
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const ready = (global.document.fonts && global.document.fonts.ready) ? global.document.fonts.ready : Promise.resolve();
    ready.then(() => {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const scale = 2;
        canvas.width = (img.width || 820) * scale;
        canvas.height = (img.height || 460) * scale;
        const ctx = canvas.getContext("2d");
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        canvas.toBlob((blob) => {
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = filename || "poster.png";
          a.click();
        });
      };
      img.src = url;
    });
  }

  global.RoutePoster = { render, download };
})(window);
