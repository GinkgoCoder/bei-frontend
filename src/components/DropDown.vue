<template>
  <div class="dropdown d-inline-block ms-2">
    <div data-bs-toggle="dropdown" aria-expanded="false">
      <slot/>
    </div>
    <ul class="dropdown-menu">
      <li v-for="option in options">
        <a :class="{'dropdown-item': true, 'bi-sort-down': selectedValue === option }"
           @click="emit('select-value', option)"> {{ option }} </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {PropType, defineEmits} from 'vue'

const emit=defineEmits(['select-value'])

defineProps({
  options: {
    type: Array as PropType<Array<String>>,
    required: true
  },
  selectedValue: {
    type: String,
    required: false
  }
})


</script>

<style scoped>

</style>
