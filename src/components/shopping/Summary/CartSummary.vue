<script setup>
import useInjectShoppingCart from '../../../hooks/useInjectShoppingCart';

const { subtotal, shipping, totalDiscount, total } = useInjectShoppingCart();

</script>

<template>
  <div class="summary">
    <div class="summary_item">
      <h2>Subtotal:</h2>
      <span>${{ subtotal }}</span>
    </div>
    <div class="summary_item">
      <h2>Shipping:</h2>
      <span>${{ shipping }}</span>
    </div>
    <div class="summary_item">
      <h2>Total discount:</h2>
      <span>${{ totalDiscount }}</span>
    </div>
    <div class="summary_item">
      <h2>Total:</h2>
      <span>${{ total }}</span>
    </div>
  </div>
</template>

<style>
  .summary {
    margin-bottom: 10px;
  }

  .summary_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
</style>
