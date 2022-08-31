<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const domTitle = 'message'

const onAlert = () => {
  alert('Yes !!!')
}

const list = [1,2,3]

const visible = true
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p :title="domTitle">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <button @click="onAlert">alert</button>
  <span v-if="visible">visible</span>
  <span v-else>invisible</span>
  <ul>
    <li v-for="item in list">{{item}}</li>
  </ul>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
