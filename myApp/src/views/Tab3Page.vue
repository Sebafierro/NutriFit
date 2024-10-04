<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Configuración</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list class="config-list">
        <ion-item button detail lines="full" class="config-item" @click="toggleSection('notifications')">
          <ion-icon name="notifications-outline" slot="start" color="light"></ion-icon>
          <ion-label>Ajustes de Notificaciones</ion-label>
        </ion-item>
        <div v-if="activeSection === 'notifications'" class="config-subsection">
          <ion-item>
            <ion-label>Activar Notificaciones</ion-label>
            <ion-toggle v-model="notificationsEnabled"></ion-toggle>
          </ion-item>
        </div>

        <ion-item button detail lines="full" class="config-item" @click="toggleSection('theme')">
          <ion-icon name="color-palette-outline" slot="start" color="light"></ion-icon>
          <ion-label>Personalizar Tema</ion-label>
        </ion-item>
        <div v-if="activeSection === 'theme'" class="config-subsection">
          <ion-item>
            <ion-label>Tema Oscuro</ion-label>
            <ion-toggle v-model="darkTheme"></ion-toggle>
          </ion-item>
        </div>

        <ion-item button detail lines="full" class="config-item" @click="toggleSection('privacy')">
          <ion-icon name="lock-closed-outline" slot="start" color="light"></ion-icon>
          <ion-label>Privacidad y Seguridad</ion-label>
        </ion-item>
        <div v-if="activeSection === 'privacy'" class="config-subsection">
          <ion-item>
            <ion-label>Cambiar Contraseña</ion-label>
            <ion-input type="password" placeholder="Nueva Contraseña"></ion-input>
          </ion-item>
        </div>

        <ion-item button detail lines="full" class="config-item" @click="toggleSection('info')">
          <ion-icon name="information-circle-outline" slot="start" color="light"></ion-icon>
          <ion-label>Información de la App</ion-label>
        </ion-item>
        <div v-if="activeSection === 'info'" class="config-subsection">
          <ion-item>
            <ion-label>Versión: 1.0.0</ion-label>
          </ion-item>
        </div>
      </ion-list>

      <!-- Botones -->
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
import { ref } from 'vue';
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
  IonToggle,
  IonInput,
} from '@ionic/vue';

const activeSection = ref<string | null>(null); 
const notificationsEnabled = ref(false); 
const darkTheme = ref(false); 

const toggleSection = (section: string) => {
  activeSection.value = activeSection.value === section ? null : section;
};
</script>

<style scoped>

.config-list ion-item {
  --background: #4caf50;
  --border-radius: 15px;
  --color: white;
  --ion-item-color: white;
  margin-bottom: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.config-list ion-icon {
  --color: white;
}

.config-subsection {
  margin-left: 15px;
  margin-top: 5px;
}

.btn-save {
  margin-top: 25px;
  border-radius: 22px;
  font-weight: bold;
  background-color: #388e3c;
  color: white;
}

.btn-reset {
  margin-top: 15px;
  border-radius: 22px;
  font-weight: bold;
  background-color: #d32f2f;
  color: white;
}
</style>
