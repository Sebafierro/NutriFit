<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Rutinas Verdes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="green-banner">
        <img :src="bannerImage" alt="Imagen de Actividades" class="banner-img">
      </div>

      <ion-card class="green-card">
        <ion-card-header>
          <ion-card-title>Entrenamiento de Hoy</ion-card-title>
          <ion-card-subtitle>27 de Septiembre, 2024</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <div class="routine-info">
            <ion-icon name="barbell-outline" class="routine-icon"></ion-icon>
            <p>Duración: 45 minutos</p>
            <ion-chip color="success">Fuerza</ion-chip>
            <ion-chip color="warning">Cardio</ion-chip>
          </div>
        </ion-card-content>
      </ion-card>

      <ion-list class="green-list">
        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Lunes: Yoga</h2>
            <p>Duración: 60 minutos</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Martes: Pesas</h2>
            <p>Duración: 45 minutos</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Miércoles: Cardio</h2>
            <p>Duración: 30 minutos</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Jueves: HIIT</h2>
            <p>Duración: 20 minutos</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Viernes: Descanso</h2>
            <p>No programado</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-button expand="block" color="success" class="add-routine-btn">
        Nueva Actividad <ion-icon name="add-circle-outline" slot="end"></ion-icon>
      </ion-button>
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
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonContent,
  IonHeader,
  IonPage
} from '@ionic/vue';

import bannerImage from '@/img/Bio-Ritmo-abrio-Tonus-Gym-su-cuarto-micro-gimnasio.jpg';
</script>

<style scoped>

.banner-img {
  width: 100%; 
  height: auto;
  max-width: 650px; 
  border-radius: 15px;
  display: block; 
  margin: 0 auto; 
}

.green-banner {
  text-align: center;
  margin-bottom: 20px;
}

.green-card {
  border-radius: 20px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  text-align: center;
}

.routine-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
}

.routine-icon {
  font-size: 1.5rem;
  color: var(--ion-color-success);
}

.green-list ion-item {
  --background: #a8e6cf;
  --border-radius: 12px;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.green-list ion-item:hover {
  transform: scale(1.02);
}

.add-routine-btn {
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
}
</style>
