<template>
  <div>
    <div class="bg-white p-4 rounded-xl shadow-md w-[350px] max-w-[95vw]">
      <div class="w-full relative">
        <input @keyup.enter="addTodo()" v-model="newTodo" type="text" class="w-full border-2 border-black rounded-lg py-1.5 px-4 focus:outline-black">
        <div @click="addTodo()" class="absolute right-0 top-0 bg-black w-12 h-full rounded-[0px_12px_12px_0px] flex items-center justify-center cursor-pointer">
          <p v-pre class="text-white font-bold text2xl">+</p>
        </div>
      </div>
      <ul class="flex gap-4 mt-4">
        <li @click="selectedMenu = item.label" v-for="item in menu" :key="item.id" :class="{'bg-black text-white': selectedMenu === item.label}" class="w-full py-1.5 px-4 border-2 border-black rounded-lg text-center font-bold duration-300 cursor-pointer select-none">{{ item.label }}</li>
      </ul>
      <transition-group name="fade" tag="ul" class="flex flex-col gap-4 max-h-[250px] overflow-y-auto" :class="{'mt-4': filterTodos.length !== 0}">
        <li v-for="item in filterTodos" :key="item.id" class="border-2 border-black rounded-lg py-1.5 px-4 flex items-center justify-between select-none">
          <div class="flex items-center gap-4">
            <label :for="item.id" class="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center cursor-pointer">
              <div :class="{'scale-100': item.isCompleted, 'scale-0': !item.isCompleted}" class="w-4 h-4 rounded-full bg-black duration-300"></div>
            </label>
            <input type="checkbox" v-model="item.isCompleted" :id="item.id" class="hidden">
            <p>{{ item.label }}</p>
          </div>
          <a @click="removeTodo(item.id)" class="font-bold text-xl cursor-pointer">X</a>
        </li>
        <li v-if="filterTodos.length <= 0" class="mt-4 text-center">目前尚無待辦清單</li>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
const todoStore = inject('$stores').todoStore()

const menu = ref([
  {id: 1, label: '全部'},
  {id: 2, label: '未完成'},
  {id: 3, label: '已完成'}
])

const selectedMenu = ref('全部')

const newTodo = ref('')

const addTodo = async () => {
  const val = newTodo.value.trim()
  if (!val) return
  const todo = {
    id: Date.now(),
    label: val,
    isCompleted: false
  }
  await todoStore.addTodo(todo)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  newTodo.value = ''
}

const filterTodos = computed(() => {
  switch(selectedMenu.value) {
    case '全部':
      return todoStore.todoListGetter
    case '未完成':
      return todoStore.todoListGetter.filter((item) => !item.isCompleted)
    case '已完成':
      return todoStore.todoListGetter.filter((item) => item.isCompleted)
  }
})

const removeTodo = (id) => {
  todoStore.removeTodo(id)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
}
</script>
