<script setup>
defineProps('placeholder', 'modelRef')
</script>

<template>
  <input class="primary_input" type="text" v-model="modelRef" :placeholder="placeholder" />
</template>

<style>
.primary_input {
    width: 70%;
    height: 30px;
    margin-right: 10px;
    border-radius: 30px;
    padding-left: 15px;
  }
</style>
