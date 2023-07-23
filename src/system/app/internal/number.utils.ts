export function formatCurrency(number: number): number {
  return +parseFloat(`${number}`).toFixed(2);
}
