import { Order } from '@/types';

const ORDERS_KEY = 'italian_ate_orders';

export function saveOrderToStorage(order: Order): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = getOrdersFromStorage();
    existing.unshift(order);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(existing));
  } catch (e) {
    console.error('Failed to save order to localStorage', e);
  }
}

export function getOrdersFromStorage(): Order[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(ORDERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load orders from localStorage', e);
    return [];
  }
}

export function getOrderById(orderCode: string): Order | undefined {
  const orders = getOrdersFromStorage();
  return orders.find(o => o.orderCode === orderCode);
}
