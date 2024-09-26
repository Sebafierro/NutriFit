<template>
  <ion-page>
    
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Perfil del Usuario</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      
      <div class="profile-background">
        <div class="profile-image-container">
          <img class="profile-image" src="https://via.placeholder.com/100" alt="Foto de Perfil">
        </div>
      </div>

      
      <ion-card class="profile-card">
        <ion-card-header>
          <ion-card-title>Nombre del Usuario</ion-card-title>
          <ion-card-subtitle>Membresía Activa</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label>Correo Electrónico</ion-label>
            <ion-text>robe.osses@profesor@duocuc.cl</ion-text>
          </ion-item>
          <ion-item>
            <ion-label>Progreso de Entrenamientos</ion-label>
            <ion-text>50% completado</ion-text>
          </ion-item>
        </ion-card-content>
      </ion-card>

      
      <ion-button expand="block" color="primary" class="edit-button">
        Editar Perfil <ion-icon name="create-outline" slot="end"></ion-icon>
      </ion-button>

      
      <ion-button expand="block" color="danger" class="logout-button">
        Cerrar Sesión <ion-icon name="log-out-outline" slot="end"></ion-icon>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonMenuButton, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonText, IonContent, IonHeader, IonPage } from '@ionic/vue';
</script>

<style scoped>

.profile-background {
  height: 150px;
  background: linear-gradient(45deg, #56ccf2, #2f80ed);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -50px; 
}


.profile-image-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.profile-card {
  margin-top: 60px; 
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

ion-item {
  --background: none;
  --padding-start: 0;
  margin-bottom: 10px;
}


.edit-button {
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
}


.logout-button {
  margin-top: 10px;
  border-radius: 20px;
  font-weight: bold;
}
</style>
