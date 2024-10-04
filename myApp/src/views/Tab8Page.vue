<script setup lang="ts">
import { ref } from 'vue';
import { IonMenuButton, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonAvatar, IonInput, IonTextarea, IonContent, IonHeader, IonPage } from '@ionic/vue';

import avatarLaura from '@/img/201811_Fanny_0984-LR-1920px.jpg';
import avatarCarlos from '@/img/images.jpg';
import avatarMaria from '@/img/perfil-resilencia.jpg';
import avatarJuan from '@/img/sesese.jpg'; 
import avatarRoberto from '@/img/image.png';

interface Post {
  name: string;
  text: string;
  timeAgo: string;
  avatar: string;
  comments: Comment[];
}

interface Comment {
  name: string;
  text: string;
  avatar: string;
}

const userName = 'Roberto Osses';

const newPost = ref<string>('');

const selectedPost = ref<number | null>(null);

const newComment = ref<string[]>([]);

const posts = ref<Post[]>([
  { name: 'Juan Pérez', text: '¡He completado mi entrenamiento de 5 km! Me siento genial. ¿Alguien más está haciendo cardio esta semana?', timeAgo: 'Hace 2 horas', comments: [], avatar: avatarJuan },
  { name: 'Carlos Ruiz', text: '¿Alguien ha probado hacer HIIT por 20 minutos? ¡Es agotador pero efectivo!', timeAgo: 'Hace 5 horas', comments: [], avatar: avatarCarlos },
  { name: 'María López', text: '¡Gracias a esta app, logré bajar 5 kilos en 2 meses! Estoy tan agradecida.', timeAgo: 'Hace 1 día', comments: [], avatar: avatarMaria },
  { name: 'Laura Gómez', text: '¡Hoy intenté una nueva receta de proteínas! ¿Alguien quiere saber cómo me fue?', timeAgo: 'Hace 6 horas', comments: [], avatar: avatarLaura },
]);

const addPost = () => {
  if (newPost.value.trim() !== '') {
    posts.value.unshift({ name: userName, text: newPost.value, timeAgo: 'Hace un momento', comments: [], avatar: avatarRoberto });
    newPost.value = '';
  }
};

const toggleCommentForm = (index: number) => {
  selectedPost.value = selectedPost.value === index ? null : index;
};

const addComment = (index: number) => {
  if (newComment.value[index]?.trim() !== '') {
    posts.value[index].comments.push({ name: userName, text: newComment.value[index], avatar: avatarRoberto });
    newComment.value[index] = '';
    selectedPost.value = null;
  }
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Comunidad</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="community-welcome">
        <h2>Bienvenido a la Comunidad</h2>
        <ion-icon name="chatbubbles-outline" class="community-icon"></ion-icon>
      </div>

      <ion-card class="new-post-card">
        <ion-card-header>
          <ion-card-title>Nueva Publicación</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-avatar slot="start">
              <img :src="avatarRoberto" alt="Mi Avatar" />
            </ion-avatar>
            <ion-label position="stacked">Escribe algo para la comunidad</ion-label>
            <ion-textarea v-model="newPost" placeholder="Escribe aquí tu comentario..." class="compact-textarea"></ion-textarea>
          </ion-item>
          <ion-button expand="block" color="success" @click="addPost" class="compact-button">
            Publicar <ion-icon name="send-outline" slot="end"></ion-icon>
          </ion-button>
        </ion-card-content>
      </ion-card>

      <ion-list class="community-list">
        <ion-item v-for="(post, index) in posts" :key="index" class="community-item compact-item">
          <ion-avatar slot="start">
            <img :src="post.avatar" alt="User Avatar" />
          </ion-avatar>
          <ion-card>
            <ion-card-header>
              <ion-card-title class="compact-text">{{ post.name }}</ion-card-title>
              <ion-card-subtitle class="compact-text">{{ post.timeAgo }}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <p class="compact-text">{{ post.text }}</p>
            </ion-card-content>

            <ion-list class="post-comments">
              <ion-item v-for="(comment, cIndex) in post.comments" :key="cIndex" class="compact-item">
                <ion-avatar slot="start">
                  <img :src="comment.avatar" alt="User Avatar" />
                </ion-avatar>
                <ion-label>
                  <h2 class="compact-text">{{ comment.name }}</h2>
                  <p class="compact-text">{{ comment.text }}</p>
                </ion-label>
              </ion-item>
            </ion-list>

            <ion-button expand="block" size="small" color="medium" @click="toggleCommentForm(index)" class="compact-button">
              Comentar <ion-icon name="chatbox-ellipses-outline" slot="end"></ion-icon>
            </ion-button>

            <div v-if="selectedPost === index" class="comment-form">
              <ion-item>
                <ion-avatar slot="start">
                  <img :src="avatarRoberto" alt="Mi Avatar" />
                </ion-avatar>
                <ion-label position="stacked" class="compact-text">Escribe tu comentario</ion-label>
                <ion-input v-model="newComment[index]" placeholder="Escribe tu comentario aquí..." class="compact-input"></ion-input>
              </ion-item>
              <ion-button expand="block" size="small" color="success" @click="addComment(index)" class="compact-button">
                Publicar Comentario <ion-icon name="send-outline" slot="end"></ion-icon>
              </ion-button>
            </div>
          </ion-card>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.community-welcome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.community-icon {
  font-size: 1.8rem;
  color: var(--ion-color-success);
}

.new-post-card {
  margin-bottom: 10px;
  background: var(--ion-color-light);
}

.community-list {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.community-list ion-item,
.post-comments ion-item {
  --background: #e0f7fa;
  --border-radius: 10px;
  margin-bottom: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
}

.post-comments {
  max-height: 150px;
  overflow-y: auto;
  margin-top: 5px;
}

.comment-form {
  margin-top: 5px;
}

.compact-text {
  font-size: 0.8rem;
  line-height: 1.2;
}

.compact-button {
  font-size: 0.7rem;
  padding: 4px 6px;
}

.compact-input {
  font-size: 0.8rem;
}

.compact-item ion-avatar {
  height: 30px;
  width: 30px;
}

.compact-textarea {
  font-size: 0.8rem;
}
</style>