<script setup>
import useVoucherEntry from '../../../hooks/useVoucherEntry';
import PrimaryButton from '../../buttons/PrimaryButton.vue';
import AppliedVoucer from './AppliedVoucher.vue'

const vouchers = [
  { id: 1, name: 'Coupon A', code: '#30OFF', type: 'percentual', amount: 30.0 },
  { id: 2, name: 'Coupon FOO', code: '#100DOLLARS', type: 'fixed', amount: 100.0 },
  { id: 3, name: 'Coupon C', code: '#SHIPIT', type: 'shipping', amount: 0, minValue: 300.5 }
]

const { voucherCode, appliedVouchers, addVoucher } = useVoucherEntry(vouchers);

</script>

<template>
  <div>
    <AppliedVoucer
      :key="voucher.id"
      v-for="voucher in appliedVouchers"
      :voucher="voucher"
    />
    <div class="voucher_input_div">
      <input class="input" type="text" v-model="voucherCode" placeholder="your voucher code here" />
      <PrimaryButton @click="addVoucher">Apply</PrimaryButton>
    </div>
  </div>
</template>

<style>
  .voucher_input_div {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .input {
    width: 70%;
    height: 30px;
    margin-right: 10px;
    border-radius: 30px;
    padding-left: 15px;
  }

</style>
