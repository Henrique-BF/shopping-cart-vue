import { inject } from 'vue';
import { STATE_CONSTANTS } from '../constants/stateConstants';

function useInjectShoppingCart() {
  const itemQty = inject(STATE_CONSTANTS.ITEM_QTY);
  const totalKg = inject(STATE_CONSTANTS.TOTAL_KG);
  const appliedVouchers = inject(STATE_CONSTANTS.APPLIED_VOUCHERS);
  const subtotal = inject(STATE_CONSTANTS.SUBTOTAL);
  const shipping = inject(STATE_CONSTANTS.SHIPPING);
  const totalDiscount = inject(STATE_CONSTANTS.TOTAL_DISCOUNT);
  const total = inject(STATE_CONSTANTS.TOTAL);

  return {
    itemQty,
    totalKg,
    appliedVouchers,
    subtotal,
    shipping,
    totalDiscount,
    total,
  };
}

export default useInjectShoppingCart;
