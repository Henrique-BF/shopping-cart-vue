<script setup>
import ProductList from './Products/ProductList.vue';
import CartSummary from './Summary/CartSummary.vue';
import VoucherEntry from './Vouchers/VoucherEntry.vue';
import useProvideShoppingCart from '../../hooks/useProvideShoppingCart.js';
import PrimaryButton from '../buttons/PrimaryButton.vue';

const { handlePurchase } = useProvideShoppingCart();

</script>

<template>
  <div class="shopping_cart">
    <h1 class="shopping_header">Shopping</h1>
    <ProductList />
    <VoucherEntry />
    <CartSummary />
    <div class="purchase_button_div">
      <PrimaryButton @click="handlePurchase">Purchase</PrimaryButton>
    </div>
  </div>
</template>

<style>
.shopping_cart {
  padding: 20px;
}

.shopping_header {
  text-align: center;
}

.purchase_button_div {
  display: flex;
  justify-content: end;
}
</style>
