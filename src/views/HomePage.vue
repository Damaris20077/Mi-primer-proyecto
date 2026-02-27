<template>
  <ion-page>
    <ion-content class="ion-padding">

      <h1 class="titulo">Consumo de APIs </h1>

      <ion-button expand="block" @click="cargarUsuarios">
        Cargar Usuarios
      </ion-button>

      <ion-button expand="block" color="secondary" @click="cargarPosts">
        Cargar Publicaciones
      </ion-button>

      <h2 class="subtitulo">Lista de Usuarios</h2>

      <ion-card v-for="user in store.users" :key="user.id">
        <ion-card-header>
          <ion-card-title>{{ user.name }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          📧 Correo: {{ user.email }} <br />
          🏙 Ciudad: {{ user.address.city }}
        </ion-card-content>
      </ion-card>

      <h2 class="subtitulo">Publicaciones Recientes</h2>

      <ion-card v-for="post in store.posts.slice(0,5)" :key="post.id">
        <ion-card-header>
          <ion-card-title>
            Publicación #{{ post.id }}
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          📝 Título: {{ post.title }}
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'

import { useApiStore } from '@/stores/apiStore'

const store = useApiStore()

const cargarUsuarios = async () => {
  await store.fetchUsers()
}

const cargarPosts = async () => {
  await store.fetchPosts()
}
</script>

<style scoped>
.titulo {
  text-align: center;
  margin-bottom: 20px;
}

.subtitulo {
  margin-top: 30px;
  margin-bottom: 10px;
  color: #444;
}
</style>