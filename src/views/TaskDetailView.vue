<template>
  <div class="offcanvas offcanvas-end w-auto" tabindex="-1" id="taskDetail" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel"> {{ taskStore.currentTask.name }} </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="border-bottom"/>
    <div class="offcanvas-body">
      <task-content-editor></task-content-editor>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TaskContentEditor from '../components/TaskContentEditor.vue'
import {useTaskStore} from "../store";

const taskStore = useTaskStore()

</script>

<style scoped>

</style>
