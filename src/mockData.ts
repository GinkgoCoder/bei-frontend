import {ListType, TaskType} from "./model/interfaces";

export const MockTasks:TaskType[] = [{
   id: 'test-id-1',
   name: 'task 1',
   content: '',
   list: 'list-1',
   dueDate: 0,
   priority: 'High'
}, {

    id: 'test-id-2',
    name: 'task 2',
    content: '',
    list: 'list-1',
    dueDate: 0,
    priority: 'Low'
},{
    id: 'test-id-3',
    name: 'task 3',
    content: '',
    list: 'list-1',
    dueDate: 0,
    priority: 'Medium'
}]

export const MockLists: ListType[] = [{
    id: 'list-1',
    name: 'test list'
}]
