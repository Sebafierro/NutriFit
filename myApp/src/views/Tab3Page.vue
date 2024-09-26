<template>
  <ion-page>
    
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Ajustes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      
      <ion-list class="settings-list">
        <ion-item button detail lines="full" class="settings-item">
          <ion-icon name="notifications-outline" slot="start" color="light"></ion-icon>
          <ion-label>Notificaciones</ion-label>
        </ion-item>

        <ion-item button detail lines="full" class="settings-item">
          <ion-icon name="color-palette-outline" slot="start" color="light"></ion-icon>
          <ion-label>Cambiar Tema</ion-label>
        </ion-item>

        <ion-item button detail lines="full" class="settings-item">
          <ion-icon name="lock-closed-outline" slot="start" color="light"></ion-icon>
          <ion-label>Privacidad</ion-label>
        </ion-item>

        <ion-item button detail lines="full" class="settings-item">
          <ion-icon name="information-circle-outline" slot="start" color="light"></ion-icon>
          <ion-label>Acerca de la App</ion-label>
        </ion-item>
      </ion-list>

      
      <ion-button expand="block" color="primary" class="save-button">
        Guardar Cambios <ion-icon name="save-outline" slot="end"></ion-icon>
      </ion-button>

      
      <ion-button expand="block" color="danger" class="reset-button">
        Restablecer Configuración <ion-icon name="refresh-outline" slot="end"></ion-icon>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonMenuButton, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonList, IonItem, IonLabel, IonContent, IonHeader, IonPage } from '@ionic/vue';
</script>

<style scoped>

.settings-list ion-item {
  --background: #2ecc71; 
  --border-radius: 12px;
  --color: white; 
  --ion-item-color: white; 
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.settings-list ion-icon {
  --color: white; 
}

.settings-button {
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
}
</style>
