import { ref, provide, computed } from 'vue';
import { STATE_CONSTANTS } from '../constants/stateConstants';
import { calculateShippingValue } from '../helpers/calculateShippingValue';
import { calculateTotalDiscounts } from '../helpers/calculateTotalDiscounts';

function useShoppingCart() {
  const itemQty = ref([]);
  const appliedVouchers = ref([]);

  const subtotal = computed(() => {
    return itemQty.value.reduce((total, item) => total + item.price * item.qty, 0);
  })

  const appliedValidVouchers = computed(() => {
    return appliedVouchers.value.filter((voucher) =>
      !voucher.minValue ? true : subtotal.value > voucher.minValue
    );
  })

  const totalDiscount = computed(() => {
    return calculateTotalDiscounts(subtotal.value, appliedValidVouchers.value);
  })

  const totalKg = computed(() => itemQty.value.reduce((total, item) => total + item.qty, 0));

  const shipping = computed(() => {
    return calculateShippingValue(subtotal.value, totalKg.value, appliedValidVouchers.value);
  })

  const total = computed(() => {
    return subtotal.value - totalDiscount.value + shipping.value;
  })

  provide(STATE_CONSTANTS.ITEM_QTY, itemQty);
  provide(STATE_CONSTANTS.TOTAL_KG, totalKg);
  provide(STATE_CONSTANTS.APPLIED_VOUCHERS, appliedVouchers);
  provide(STATE_CONSTANTS.SUBTOTAL, subtotal);
  provide(STATE_CONSTANTS.SHIPPING, shipping);
  provide(STATE_CONSTANTS.TOTAL_DISCOUNT, totalDiscount);
  provide(STATE_CONSTANTS.TOTAL, total);

  function handlePurchase() {
    //reactive({}) from vue
    const order = {
      items: itemQty.value,
      total_kg: totalKg.value,
      subtotal: subtotal.value,
      applied_vouchers: appliedVouchers.value,
      total_discount: totalDiscount.value,
      total: total.value
    };
    console.log(order);
  }

  return {
    handlePurchase
  }
}

export default useShoppingCart
