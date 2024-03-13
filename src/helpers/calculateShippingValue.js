import { SHIPPING_VALUES } from '../constants/shippingConstants'
import { VOUCHER_TYPES } from '../constants/voucherConstants'

const {
  FREE_SHIPPING_VALUE,
  FIXED_SHIPPING_VALUE,
  MAX_KG_FOR_FIXED_SHIPPING_VALUE,
  VALUE_FOR_EACH_KG_AFTER_MAX_FIXED_SHIPPING
} = SHIPPING_VALUES

export function calculateExtraShippingValue(totalKg) {
  return (
    FIXED_SHIPPING_VALUE +
    (totalKg - MAX_KG_FOR_FIXED_SHIPPING_VALUE) * VALUE_FOR_EACH_KG_AFTER_MAX_FIXED_SHIPPING
  )
}

export function calculateShippingValue(subtotal, totalKg, appliedVouchers) {
  if (totalKg <= 0) return 0

  if (subtotal > FREE_SHIPPING_VALUE) return 0

  if (appliedVouchers.find(({ type }) => type === VOUCHER_TYPES.SHIPPING)) return 0

  if (totalKg <= MAX_KG_FOR_FIXED_SHIPPING_VALUE) return FIXED_SHIPPING_VALUE

  return calculateExtraShippingValue(totalKg)
}
