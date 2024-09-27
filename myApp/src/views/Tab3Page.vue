<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Configuración</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list class="config-list">
        <ion-item button detail lines="full" class="config-item">
          <ion-icon name="notifications-outline" slot="start" color="light"></ion-icon>
          <ion-label>Ajustes de Notificaciones</ion-label>
        </ion-item>

        <ion-item button detail lines="full" class="config-item">
          <ion-icon name="color-palette-outline" slot="start" color="light"></ion-icon>
          <ion-label>Personalizar Tema</ion-label>
        </ion-item>

        <ion-item button detail lines="full" class="config-item">
          <ion-icon name="lock-closed-outline" slot="start" color="light"></ion-icon>
          <ion-label>Privacidad y Seguridad</ion-label>
        </ion-item>

        <ion-item button detail lines="full" class="config-item">
          <ion-icon name="information-circle-outline" slot="start" color="light"></ion-icon>
          <ion-label>Información de la App</ion-label>
        </ion-item>
      </ion-list>

      <ion-button expand="block" color="success" class="btn-save">
        Aplicar Cambios <ion-icon name="save-outline" slot="end"></ion-icon>
      </ion-button>

      <ion-button expand="block" color="danger" class="btn-reset">
        Restablecer Todo <ion-icon name="refresh-outline" slot="end"></ion-icon>
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
  IonContent,
  IonHeader,
  IonPage,
} from '@ionic/vue';
</script>

<style scoped>
.config-list ion-item {
  --background: #27ae60;
  --border-radius: 15px;
  --color: white;
  --ion-item-color: white;
  margin-bottom: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.config-list ion-icon {
  --color: white;
}

.btn-save {
  margin-top: 25px;
  border-radius: 22px;
  font-weight: bold;
}

.btn-reset {
  margin-top: 15px;
  border-radius: 22px;
  font-weight: bold;
}
</style>
