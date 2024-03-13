import { ref, watch } from 'vue'
import useInjectShoppingCart from './useInjectShoppingCart'

function useProductItem(props) {
  const { itemQty } = useInjectShoppingCart()
  const qty = ref(0)

  watch(qty, (newValue) => {
    if (newValue > props.item.available) qty.value = props.item.available
    if (newValue < 0) qty.value = 0

    itemQty.value = itemQty.value.filter((item) => item.id !== props.item.id)
    itemQty.value.push({ ...props.item, qty: newValue })
  })

  return {
    qty
  }
}

export default useProductItem
