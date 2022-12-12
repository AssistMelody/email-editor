export function pushEvent(params: { event: string; payload?: Record<string, any> }) {
  const dataLayer = (window as any).dataLayer as any[];
  if (!dataLayer) return;
  // google tag manager event
  dataLayer.push({
    event: params.event,
    payload: params.payload,
  });
}
