<template>
  <li :class="['task-entry', 'list-group-item', 'mx-1', 'px-0', priorityClass, 'border-0', 'border-bottom']">
    <div class="row px-3">
      <div class="col-2">
        <input class="form-check-input" type="checkbox" value="" :id="task.id">
        <label class="form-check-label ms-1" :for="task.id">
          {{ task.name }}
        </label>
      </div>
      <div class="col-10 text-end">
        <i class="bi bi-pencil-square text-secondary" data-bs-toggle="offcanvas" href="#taskDetail"
           @click="showEditor"></i>
      </div>
    </div>
  </li>
</template>

<script lang="ts" setup>
import {TaskType} from "../model/interfaces";
import {computed, PropType} from "vue";
import {useTaskStore} from "../store";

const taskStore = useTaskStore()

const props = defineProps({
  task: {
    type: Object as PropType<TaskType>,
    required: true
  }
})
const priorityClass = computed(() => {
  switch (props.task.priority) {
    case 'High':
      return 'high-priority'
    case 'Medium':
      return 'medium-priority'
    case 'Low':
      return 'low-priority'
    default:
      return
  }
})
const showEditor = () => {
  taskStore.setCurrentTask(props.task)
}
</script>

<style scoped>
.task-entry:hover {
  background-color: #EFF0F4;
}

.high-priority {
  color: orangered;
}

.medium-priority {
  color: orange;
}

.low-priority {
  color: cornflowerblue;
}
</style>
