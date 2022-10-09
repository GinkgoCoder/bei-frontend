<template>
  <div class="row justify-content-between mt-2">
    <div class="col-3">
      <i class="bi bi-list"></i>
      {{ listStore.currentList.name }}
    </div>
    <div class="col-3 text-end">
      <drop-down :options="['custom', 'priority']" selected-value="custom">
        <i class="bi bi-sort-down"/>
      </drop-down>
      <drop-down :options="['rename', 'delete']" >
        <i class="bi bi-sliders"/>
      </drop-down>
    </div>

  </div>
  <div class="border-bottom">
    <div class="input-group input-group-sm mt-2 mb-2">
      <span class="input-group-text" id="basic-addon0"><i class="bi bi-plus"></i></span>
      <input type="text" class="form-control" placeholder="Add Task" @keydown.enter="addTask($event)" >
    </div>
  </div>
</template>

<script lang="ts" setup>
import DropDown from './DropDown.vue'
import { useListStore, useTaskStore } from '../store'
import { TaskType } from '../model/interfaces'
import {v4} from 'uuid'

const listStore = useListStore()
const taskStore = useTaskStore()

const addTask=(event:Event) => {
  const target = (<HTMLInputElement> event.target)
  const newTask: TaskType = {
    id: v4(),
    name: target.value,
    priority: 'None',
    list: listStore.currentList.id,
    dueDate: null,
    content: ''
  }
  taskStore.addTask(newTask)
}

</script>

<style scoped>

.left p {
  padding: 0;
  margin: 0 2px;
  font-weight: bold;
}

</style>
