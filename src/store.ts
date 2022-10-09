import { defineStore } from "pinia";
import {ListType, TaskType} from "./model/interfaces";
import {MockLists, MockTasks} from "./mockData";

export const useTaskStore = defineStore({
    id: 'tasksState',
    state: () => ({
        tasks: [] as Array<TaskType>,
        currentTask: {} as TaskType
    }),
    actions: {
        addTask(task: TaskType) {
            this.tasks.push(task)
        },
        setTasks(tasks:TaskType[]) {
            this.tasks = tasks
        },
        setCurrentTask(task: TaskType) {
            this.currentTask = task
        }
    }
})

export const useListStore = defineStore({
    id: 'listState',
    state: () => ({
        lists: [] as Array<ListType>,
        currentList: {} as ListType
    }),
    actions: {
        fetchList() {
            const taskStore = useTaskStore()
            this.lists = MockLists
            this.currentList = MockLists[0]
            taskStore.setTasks(MockTasks)
        }
    }
})
