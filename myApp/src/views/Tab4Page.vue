<template>
    <ion-page>
      
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Actividades</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
       
        <div class="activities-background">
          <img src="https://via.placeholder.com/350x150" alt="Actividades" class="activities-image">
        </div>
  
        
        <ion-card class="activity-card">
          <ion-card-header>
            <ion-card-title>Entrenamiento de Hoy</ion-card-title>
            <ion-card-subtitle>27 de Septiembre, 2024</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <div class="activity-details">
              <ion-icon name="barbell-outline" class="activity-icon"></ion-icon>
              <p>Duración: 45 minutos</p>
              <ion-chip color="success">Pesas</ion-chip>
              <ion-chip color="warning">Cardio</ion-chip>
            </div>
          </ion-card-content>
        </ion-card>
  
        
        <ion-list class="activity-list">
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
  
        
        <ion-button expand="block" color="success" class="add-activity-button">
          Agregar Actividad <ion-icon name="add-circle-outline" slot="end"></ion-icon>
        </ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonMenuButton, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonContent, IonHeader, IonPage } from '@ionic/vue';
  </script>
  
  <style scoped>
  
  .activities-background {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .activities-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
  
  
  .activity-card {
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    text-align: center;
  }
  
  .activity-details {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
  
  .activity-icon {
    font-size: 1.5rem;
    color: var(--ion-color-primary);
  }
  
  
  .activity-list ion-item {
    --background: #f4f4f4;
    --border-radius: 12px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .activity-list ion-item:hover {
    transform: scale(1.01);
  }
  
  
  .add-activity-button {
    margin-top: 20px;
    border-radius: 20px;
    font-weight: bold;
  }
  </style>
  