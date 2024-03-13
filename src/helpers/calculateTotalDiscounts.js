import { VOUCHER_TYPES } from '../constants/voucherConstants'

export function calculateTotalDiscounts(subtotal, appliedVouchers) {
  return appliedVouchers.reduce((total, voucher) => {
    if (voucher.type === VOUCHER_TYPES.FIXED) return total + voucher.amount
    if (voucher.type === VOUCHER_TYPES.PERCENTUAL) return total + subtotal * (voucher.amount / 100)
    return total
  }, 0)
}
