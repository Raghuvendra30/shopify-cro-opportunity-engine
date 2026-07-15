export function deduct(
  score: number,
  amount: number,
  reasons: string[],
  reason: string
): number {
  reasons.push(reason);

  return Math.max(score - amount, 0);
}