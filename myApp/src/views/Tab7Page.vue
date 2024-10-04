<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Progreso</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="progress-header">
        <h2>Tu Progreso</h2>
        <ion-icon name="stats-chart-outline" class="progress-icon"></ion-icon>
      </div>

      <ion-card class="green-card">
        <ion-card-header>
          <ion-card-title>Gráfica de Progreso Semanal</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <img :src="progressChart" alt="Gráfica de Progreso" class="chart-img" />
        </ion-card-content>
      </ion-card>

      <ion-list class="green-list">
        <ion-item>
          <ion-label>
            <h2>Tiempo Total de Entrenamiento</h2>
            <p>8 horas esta semana</p>
          </ion-label>
          <ion-icon name="time-outline" slot="end"></ion-icon>
        </ion-item>

        <ion-item>
          <ion-label>
            <h2>Entrenamientos Completados</h2>
            <p>5 sesiones esta semana</p>
          </ion-label>
          <ion-icon name="checkmark-done-outline" slot="end"></ion-icon>
        </ion-item>

        <ion-item>
          <ion-label>
            <h2>Calorías Quemadas</h2>
            <p>2000 kcal esta semana</p>
          </ion-label>
          <ion-icon name="flame-outline" slot="end"></ion-icon>
        </ion-item>
      </ion-list>

      <ion-button expand="block" color="success" class="more-details-btn">
        Ver más detalles <ion-icon name="bar-chart-outline" slot="end"></ion-icon>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
} from '@ionic/vue';

import progressChart from '@/img/1_DXiAi03sCw1aBv5fGU5HJg.png';
</script>

<style scoped>
.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.progress-icon {
  font-size: 2.5rem;
  color: var(--ion-color-success);
}

.green-card {
  border-radius: 15px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
}

.chart-img {
  width: 100%; 
  max-width: 400px; 
  height: auto;
  border-radius: 12px;
  display: block;
  margin: 0 auto; 
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

.more-details-btn {
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
}
</style>
