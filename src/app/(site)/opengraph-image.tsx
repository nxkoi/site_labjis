export const runtime = "edge";
export const alt = "Labjis";
export const size = { width: 1200, height: 630 } as const;
export const contentType = "image/png";
export default function Image() {
  return new Response(null, { status: 204 });
}
