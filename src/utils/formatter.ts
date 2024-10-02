export function formatNumberToString(percent: number): string {

  const parseNumberToPercent = percent.toFixed(2);

  return String(parseNumberToPercent).replace(".", ",");
}