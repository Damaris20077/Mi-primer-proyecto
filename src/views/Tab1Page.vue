<template>
  <ion-page>
    <ion-content class="ion-padding" style="--background: #fff9c4;">
      <div class="container">
        <h2>Usuarios</h2>
        <div class="cards">
          <div v-for="user in store.users" :key="user.id" class="card">
            {{ user.name }}
          </div>
        </div>

        <h2>Productos</h2>
        <div class="cards">
          <div v-for="product in store.products" :key="product.id" class="card">
            {{ product.title }}
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useApiStore } from '@/stores/apiStore'

const store = useApiStore()

onMounted(async () => {
  await store.fetchUsers()
  await store.fetchPosts()
  await store.fetchProducts()
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

.card {
  background-color: white;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  min-width: 150px;
  text-align: center;
}
</style>