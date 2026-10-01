/**
 * SIMULATION ONLY: Generates dynamic readable transaction order IDs
 * Format: IATE-YYYYMMDD-XXXXX
 */
export function generateOrderCode(): string {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomChars = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `IATE-${dateStr}-${randomChars}`;
}
