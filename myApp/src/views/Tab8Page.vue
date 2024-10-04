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

      <ion-card class="post-card">
        <ion-card-header>
          <ion-card-title>Publicación Reciente</ion-card-title>
          <ion-card-subtitle>Juan Pérez - Hace 2 horas</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>¡He completado mi entrenamiento de 5 km! Me siento genial. ¿Alguien más está haciendo cardio esta semana?</p>
        </ion-card-content>
        <ion-button expand="block" color="success" fill="solid" class="comment-btn">
          Comentar <ion-icon name="chatbox-ellipses-outline" slot="end"></ion-icon>
        </ion-button>
      </ion-card>

      <ion-list class="community-list">
        <ion-item>
          <ion-avatar slot="start">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
          </ion-avatar>
          <ion-label>
            <h2>Laura Gómez</h2>
            <p>¡Hoy intenté una nueva receta de proteínas! ¿Alguien quiere saber cómo me fue?</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
          </ion-avatar>
          <ion-label>
            <h2>Carlos Ruiz</h2>
            <p>¿Alguien ha probado hacer HIIT por 20 minutos? ¡Es agotador pero efectivo!</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
          </ion-avatar>
          <ion-label>
            <h2>María López</h2>
            <p>¡Gracias a esta app, logré bajar 5 kilos en 2 meses! Estoy tan agradecida.</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="success">
          <ion-icon name="add-outline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonMenuButton,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonContent,
  IonHeader,
  IonPage,
} from '@ionic/vue';
</script>

<style scoped>
.community-welcome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.community-icon {
  font-size: 2.5rem;
  color: var(--ion-color-success); 
}

.post-card {
  border-radius: 15px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  background: var(--ion-color-light);
}

.comment-btn {
  margin-top: 10px;
  border-radius: 12px;
}

.community-list ion-item {
  --background: #e0f7fa; 
  --border-radius: 12px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.community-list ion-item:hover {
  transform: scale(1.01);
}

.community-list ion-label h2 {
  color: #004d40; 
  font-weight: bold;
}

.community-list ion-label p {
  color: #00695c; 
}

ion-fab-button {
  --background: var(--ion-color-success); 
  --color: white;
}
</style>
