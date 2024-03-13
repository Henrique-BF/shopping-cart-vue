<script setup>
import useProductItem from '../../../hooks/useProductItem';

const props = defineProps([
  'item'
]);

const { qty } = useProductItem(props);

</script>

<template>
  <div class="item">
    <div class="item_details_div">
      <h2>{{ item.name }}</h2>
      <div class="item_details">
        <span class="item_details_price">Price: ${{ item.price }}</span>
        <span>Available: {{ item.available }}</span>
      </div>
    </div>
    <div class="item_input_div">
      <input
        class="item_input_qty"
        type="number"
        v-model.number="qty"
      >
      <div class="item_total">
        <span>${{ qty*item.price }}</span>
      </div>
    </div>
  </div>
</template>

<style>
  .item {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .item_details_div {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .item_details {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .item_details_price {
    margin-right: 10px;;
  }

  .item_input_div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .item_input_qty {
    width: 70px;
    height: 30px;
    margin-right: 10px;
    border-radius: 30px;
    padding-left: 15px;
  }

  .item_total {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 30px;
  }
</style>
