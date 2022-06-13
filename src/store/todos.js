import { defineStore } from "pinia"

export const todoStore = defineStore('todoStore', {

  state: () => {
    return {
      todoList: [
        {id: 1, label: 'pinia', isCompleted: false}
      ]
    }
  },

  getters: {
    todoListGetter: (state) => state.todoList
  },

  actions: {
    async addTodo (todo) {
      return await new Promise((res, rej) => {
        try {
          this.todoList.push(todo)
          res('success')
        } catch (err) {
          rej('error')
        }
      })
    }
  }

})