export interface TaskType {
    id: string,
    name: string,
    priority: 'High' | 'Medium' | 'Low' | 'None',
    dueDate: number | null,
    content: string,
    list: string
}

export interface ListType {
    id: string,
    name: string
}
