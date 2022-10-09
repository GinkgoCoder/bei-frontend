<template>
  <div class="mt-3">
  <div ref="editorRef" />
  </div>
</template>

<script lang="ts" setup>
import 'vditor/dist/index.css'
import Vditor from 'vditor'
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from "vue";
import {useTaskStore} from "../store";

const taskStore = useTaskStore()

const editorRef = ref()
let instance:Vditor | null;

const init = () => {
  instance = new Vditor(editorRef.value, {
    height: 400,
    mode: 'wysiwyg',
    toolbarConfig: {
      pin: true
    },
    cache: {
      enable: false
    },
    after: () => {
      instance!.setValue(taskStore.currentTask.content)
    },
    upload: {

    },
    comment: {
      enable: true
    }
  })
}

watch(
    () => taskStore.currentTask.content,
    (content) => {
      if (instance) {
        instance.setValue(taskStore.currentTask.content)
      }
    },
    {
      immediate: true
    }
)

onMounted(() => {
  nextTick(()=> {
    init()
  })
})

onBeforeUnmount(() => {
  instance!.destroy()
  instance = null
})
</script>

<style scoped>

</style>
