<template>
  <task-view-header></task-view-header>
  <task-list-main></task-list-main>
</template>

<script lang="ts" setup>
import TaskViewHeader from '../components/TaskListHeader.vue'
import TaskListMain from '../components/TaskListMain.vue'
import {onMounted} from "vue";
import { useListStore } from "../store";

const listStore = useListStore()

onMounted(() => listStore.fetchList())

</script>

<style scoped>
</style>
