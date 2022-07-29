import { defineStore } from "pinia"

export const todoStore = defineStore('todoStore', () => {
  
  const todoList = ref([
    {id: Date.now(), label: 'pinia', isCompleted: false}
  ])

  const todoListGetter = computed(() => todoList.value)
  
  const addTodo = async (todo) => {
    return await new Promise((res, rej) => {
      try {
        todoList.value.push(todo)
        res('success')
      }
      catch (err) {
        rej('error')
      }
    })
  }

  const removeTodo = async (id) => {
    return await new Promise((res, rej) => {
      try {
        todoList.value = todoList.value.filter((item) => item.id !== id)
        res('success')
      }
      catch (err) {
        rej('error')
      }
    })
  }

  return {
    todoList,
    todoListGetter,
    addTodo,
    removeTodo
  }

})