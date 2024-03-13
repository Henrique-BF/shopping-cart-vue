<script setup>
import { VOUCHER_TYPES } from '../../../constants/voucherConstants'
import useInjectShoppingCart from '../../../hooks/useInjectShoppingCart'
import PrimaryButton from '../../buttons/PrimaryButton.vue'
import { calculateShippingValue } from '../../../helpers/calculateShippingValue.js'

defineProps(['voucher'])

const { subtotal, appliedVouchers, totalKg } = useInjectShoppingCart()

function removeVoucher(id) {
  appliedVouchers.value = appliedVouchers.value.filter((voucher) => voucher.id !== id)
}
</script>

<template>
  <div class="voucher">
    <h2>{{ voucher.name }}</h2>
    <div class="voucher_values">
      <div style="min-width: 100px; display: flex; justify-content: start">
        <span v-if="voucher.type === VOUCHER_TYPES.FIXED">${{ voucher.amount }}</span>
        <span v-if="voucher.type === VOUCHER_TYPES.PERCENTUAL">
          ${{ (voucher.amount / 100) * subtotal }} ({{ voucher.amount }}%)
        </span>
        <span v-if="voucher.type === VOUCHER_TYPES.SHIPPING">
          ${{ calculateShippingValue(subtotal, totalKg, []) }}
        </span>
      </div>
      <PrimaryButton @click="() => removeVoucher(voucher.id)">REMOVE</PrimaryButton>
    </div>
  </div>
</template>

<style>
.voucher {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.voucher_values {
  display: flex;
  justify-content: space-between;
}
</style>
