<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="background-container">
        <div class="avatar-container">
          <img class="avatar-img" src="https://via.placeholder.com/100" alt="Avatar del Usuario" />
        </div>
      </div>

      <ion-card class="info-card">
        <ion-card-header>
          <ion-card-title>Usuario: Juan Pérez</ion-card-title>
          <ion-card-subtitle>Membresía Activa</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label>Email de Contacto</ion-label>
            <ion-text>juan.perez@example.com</ion-text>
          </ion-item>
          <ion-item>
            <ion-label>Progreso</ion-label>
            <ion-text>50% completado</ion-text>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-button expand="block" color="success" class="btn-edit">
        Actualizar Perfil <ion-icon name="create-outline" slot="end"></ion-icon>
      </ion-button>

      <ion-button expand="block" color="danger" class="btn-logout">
        Cerrar Sesión <ion-icon name="log-out-outline" slot="end"></ion-icon>
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
  IonItem,
  IonLabel,
  IonText,
  IonContent,
  IonHeader,
  IonPage,
} from '@ionic/vue';
</script>

<style scoped>
.background-container {
  height: 160px;
  background: linear-gradient(135deg, #4caf50, #81c784); 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -40px;
}

.avatar-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-card {
  margin-top: 50px;
  text-align: center;
  border-radius: 25px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
}

ion-item {
  --background: none;
  --padding-start: 0;
  margin-bottom: 15px;
}

.btn-edit {
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
  background-color: #388e3c; 
  color: white;
}

.btn-logout {
  margin-top: 15px;
  border-radius: 20px;
  font-weight: bold;
}
</style>
