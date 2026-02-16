export function formatDateRu(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return String(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}.${mm}.${yy}`;
}

export function toIsoDateInputValue(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = String(d.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
}

export function fromDateInputToIso(value) {
  // value: YYYY-MM-DD
  if (!value) return new Date().toISOString();
  const d = new Date(`${value}T12:00:00.000Z`);
  if (Number.isNaN(d.getTime())) return new Date().toISOString();
  return d.toISOString();
}