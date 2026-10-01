import { PaymentMethodOption } from '@/types';

/**
 * SIMULATION ONLY: Payment methods dataset for Italian Ate E-Commerce demo
 * Note: When integrating with a real payment gateway (Midtrans, Xendit, Stripe, etc.),
 * replace these dummy methods with live API integrations.
 */
export const PAYMENT_METHODS: PaymentMethodOption[] = [
  {
    id: 'qris',
    name: 'QRIS (All E-Wallet / M-Banking)',
    type: 'ewallet',
    iconName: 'QrCode',
    accountName: 'PT ITALIAN ATE CULINARY'
  },
  {
    id: 'dana',
    name: 'DANA E-Wallet',
    type: 'ewallet',
    iconName: 'Wallet',
    accountName: 'Italian Ate Official'
  },
  {
    id: 'shopeepay',
    name: 'ShopeePay',
    type: 'ewallet',
    iconName: 'Smartphone',
    accountName: 'Italian Ate Official'
  },
  {
    id: 'gopay',
    name: 'GoPay',
    type: 'ewallet',
    iconName: 'Zap',
    accountName: 'Italian Ate Official'
  },
  {
    id: 'bca_va',
    name: 'BCA Virtual Account',
    type: 'virtual_account',
    iconName: 'Building2',
  },
  {
    id: 'bni_va',
    name: 'BNI Virtual Account',
    type: 'virtual_account',
    iconName: 'Building2',
  },
  {
    id: 'bri_va',
    name: 'BRI Virtual Account',
    type: 'virtual_account',
    iconName: 'Building2',
  },
  {
    id: 'mandiri_va',
    name: 'Mandiri Virtual Account',
    type: 'virtual_account',
    iconName: 'Building2',
  }
];
