/**
 * SIMULATION ONLY: Generates fake virtual account numbers for bank simulation
 */
export function generateFakeVA(bankId: string): string {
  const bankPrefixes: Record<string, string> = {
    bca_va: '8888 2026',
    bni_va: '8801 2026',
    bri_va: '8802 2026',
    mandiri_va: '8803 2026',
  };
  const prefix = bankPrefixes[bankId] || '8899 2026';
  const suffix = Math.floor(100000 + Math.random() * 900000).toString();
  return `${prefix} 1001 ${suffix}`;
}
