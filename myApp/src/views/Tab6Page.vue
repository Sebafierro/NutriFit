<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Calendario de Entrenamientos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Puedes agregar aquí etiquetas ion-text o ion-label para reemplazar el breadcrumb -->
      <ion-text>
        <p><strong>Inicio</strong> / Calendario</p>
      </ion-text>

      <ion-card class="green-card">
        <ion-card-header>
          <ion-card-title>Entrenamiento de Hoy</ion-card-title>
          <ion-card-subtitle>27 de Septiembre</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-chip color="success">Cardio</ion-chip>
          <ion-chip color="warning">45 minutos</ion-chip>
          <ion-chip color="danger">HIIT</ion-chip>
        </ion-card-content>
        <ion-button expand="block" color="success">
          Ver detalles <ion-icon name="calendar" slot="end"></ion-icon>
        </ion-button>
      </ion-card>

      <ion-list class="green-list">
        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Lunes: Pesas</h2>
            <p>Duración: 60 minutos</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Martes: Yoga</h2>
            <p>Duración: 45 minutos</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Miércoles: HIIT</h2>
            <p>Duración: 30 minutos</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Jueves: Cardio</h2>
            <p>Duración: 40 minutos</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>Viernes: Descanso</h2>
            <p>Duración: --</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-button expand="block" color="success">
        Agregar Entrenamiento <ion-icon name="add-circle-outline" slot="end"></ion-icon>
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
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
  IonText
} from '@ionic/vue';
</script>

<style scoped>
.green-card {
  border-radius: 15px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
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

ion-chip {
  margin-right: 10px;
}
</style>
