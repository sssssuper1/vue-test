<script>
  export default {
    props: {
      name: String,
    },
    emits: ['onTodoAdd'],
    data() {
      return {
        todoList: ['Vue', 'React', 'English'],
        newTodo: '',
        firstName: 'zhang',
        lastName: 'rui',
      }
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`
      }
    },
    watch: {
      newTodo(val) {
        console.log('is inputting')
      }
    },
    created() {
      console.log('created')
    },
    mounted() {
      console.log('mounted')
    },
    methods: {
      append() {
        if (!this.newTodo) return
        this.todoList.push(this.newTodo)
        this.$emit('onTodoAdd')
      }
    }
  }
</script>

<template>
  <p>{{name}}</p>
  <p v-for="item in todoList">{{ item }}</p>
  <input v-model="newTodo" />
  <button @click="append">add</button>

  <p>{{fullName}}</p>
</template>
