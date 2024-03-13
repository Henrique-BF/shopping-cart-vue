import { ref } from 'vue'
import { VOUCHER_TYPES } from '../constants/voucherConstants';
import useInjectShoppingCart from './useInjectShoppingCart';

function useVoucherEntry(vouchers) {
  const { subtotal, appliedVouchers } = useInjectShoppingCart();
  const voucherCode = ref('')

  function addVoucher() {
    const selectedVoucher = vouchers.find((voucher) => voucher.code === voucherCode.value)

    if (!selectedVoucher) return

    if (appliedVouchers.value.find((voucher) => voucher.code === selectedVoucher.code)) return

    if (subtotal.value < selectedVoucher.minValue) return

    if (selectedVoucher.type === VOUCHER_TYPES.FIXED && subtotal.value < selectedVoucher.amount) return;

    appliedVouchers.value.push(selectedVoucher)
    voucherCode.value = ''
  }

  return {
    voucherCode,
    appliedVouchers,
    addVoucher
  }
}

export default useVoucherEntry
