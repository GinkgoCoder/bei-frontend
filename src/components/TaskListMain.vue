<template>
  <ul class="list-group mt-2">
    <draggable
        v-model="taskStore.tasks"
        animation="200"
        drag-class="bg-light"
        @start="drag=true"
        @end="drag=false"
        item-key="id">
      <template #item="{element}">
          <task-entry :task="element"></task-entry>
      </template>
    </draggable>
  </ul>
</template>

<script setup>
import Draggable from 'vuedraggable'
import TaskEntry from '../components/TaskEntry.vue'
import {ref} from "vue";
import { useTaskStore } from '../store'

const taskStore = useTaskStore()
const drag = ref(true)

</script>

<style scoped>
.drag-task {
  background-color: #415F9D;
  opacity: 1;
}
</style>
