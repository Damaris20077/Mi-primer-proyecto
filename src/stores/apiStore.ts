import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useApiStore = defineStore('api', () => {

  const users = ref<any[]>([])
  const posts = ref<any[]>([])

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await res.json()
  }

  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  }

  return {
    users,
    posts,
    fetchUsers,
    fetchPosts
  }
})