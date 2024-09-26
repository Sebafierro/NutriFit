<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Calendario de Entrenamientos</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        
        <ion-breadcrumbs>
          <ion-breadcrumb href="#">Inicio</ion-breadcrumb>
          <ion-breadcrumb href="#">Calendario</ion-breadcrumb>
        </ion-breadcrumbs>
  
        >
        <ion-card>
          <ion-card-header>
            <ion-card-title>Entrenamiento de Hoy</ion-card-title>
            <ion-card-subtitle>27 de Septiembre</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-chip color="success">Cardio</ion-chip>
            <ion-chip color="warning">45 minutos</ion-chip>
            <ion-chip color="danger">HIIT</ion-chip>
          </ion-card-content>
          <ion-button expand="block" color="primary">
            Ver detalles <ion-icon name="calendar" slot="end"></ion-icon>
          </ion-button>
        </ion-card>
  
        
        <ion-list>
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
  import { IonMenuButton, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonBreadcrumbs, IonBreadcrumb, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage } from '@ionic/vue';
  </script>
  