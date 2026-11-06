export function median(values: readonly number[]): number {
  if (!Array.isArray(values) || !values.length || values.some((value) => !Number.isFinite(value)))
    throw new RangeError('Expected nonempty finite number array');
  const sorted = [...values].sort((a, b) => a - b),
    mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid]! : sorted[mid - 1]! / 2 + sorted[mid]! / 2;
}
