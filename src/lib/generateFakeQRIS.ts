/**
 * SIMULATION ONLY: Generates fake QRIS string data payload
 */
export function generateFakeQRIS(orderCode: string, amount: number): string {
  return `00020101021226680016ID.CO.ITALIAN-ATE.WWW0118936009140000000000520459995303360540${amount}5802ID5920ITALIAN ATE TRATTORIA6007JAKARTA62070703A016304${orderCode.slice(-4)}`;
}
