<script setup lang="ts">
import TaskListView from './views/TaskListView.vue'
import TaskDetail from './views/TaskDetailView.vue'
</script>

<template>
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-md-2 col-sm-3 bg-light vh-100 shadow">side bar</div>
      <div class="col-md-10 col-sm-9 vh-100">
        <task-list-view></task-list-view>
        <task-detail></task-detail>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
