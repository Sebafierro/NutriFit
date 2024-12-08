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
        <!-- Ajustes de Notificaciones -->
        <ion-item button detail lines="full" class="config-item" @click="toggleSection('notifications')">
          <ion-icon name="notifications-outline" slot="start" color="light"></ion-icon>
          <ion-label>Ajustes de Notificaciones</ion-label>
        </ion-item>
        <div v-if="activeSection === 'notifications'" class="config-subsection">
          <ion-item>
            <ion-label>Activar Notificaciones</ion-label>
            <ion-toggle v-model="notificationsEnabled" @ionChange="showNotification"></ion-toggle>
          </ion-item>
        </div>

        <!-- Personalizar Tema -->
        <ion-item button detail lines="full" class="config-item" @click="toggleSection('theme')">
          <ion-icon name="color-palette-outline" slot="start" color="light"></ion-icon>
          <ion-label>Personalizar Tema</ion-label>
        </ion-item>
        <div v-if="activeSection === 'theme'" class="config-subsection">
          <ion-item>
            <ion-label>Tema Oscuro</ion-label>
            <ion-toggle v-model="darkTheme" @ionChange="toggleDarkTheme"></ion-toggle>
          </ion-item>
        </div>

        <!-- Privacidad y Seguridad -->
        <ion-item button detail lines="full" class="config-item" @click="toggleSection('privacy')">
          <ion-icon name="lock-closed-outline" slot="start" color="light"></ion-icon>
          <ion-label>Privacidad y Seguridad</ion-label>
        </ion-item>
        <div v-if="activeSection === 'privacy'" class="config-subsection">
          <ion-item>
            <ion-label>Cambiar Contraseña</ion-label>
            <ion-input type="password" placeholder="Nueva Contraseña" v-model="password"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>
              Tus contraseñas están cifradas utilizando estándares de seguridad avanzados, como SHA-256. 
              Esto garantiza que tus datos sean seguros y no puedan ser descifrados fácilmente.
            </ion-label>
          </ion-item>
        </div>

        <!-- Información de la App -->
        <ion-item button detail lines="full" class="config-item" @click="toggleSection('info')">
          <ion-icon name="information-circle-outline" slot="start" color="light"></ion-icon>
          <ion-label>Información de la App</ion-label>
        </ion-item>
        <div v-if="activeSection === 'info'" class="config-subsection">
          <ion-item>
            <ion-label>Versión: 1.0.0</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>
              GitHub del proyecto: 
              <a href="https://github.com/tu-repositorio" target="_blank">github.com/tu-repositorio</a>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>

      <!-- Botones -->
      <ion-button expand="block" color="success" class="btn-save" @click="aplicarCambios">
        Aplicar Cambios <ion-icon name="save-outline" slot="end"></ion-icon>
      </ion-button>

      <ion-button expand="block" color="danger" class="btn-reset" @click="restablecerTodo">
        Restablecer Todo <ion-icon name="refresh-outline" slot="end"></ion-icon>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
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
} from "@ionic/vue";

// Estados reactivos para las secciones y configuraciones
const activeSection = ref<string | null>(null);
const notificationsEnabled = ref(false);
const darkTheme = ref(false);
const password = ref("");

// Alternar visibilidad de secciones
const toggleSection = (section: string) => {
  activeSection.value = activeSection.value === section ? null : section;
};

// Función para activar notificaciones
const showNotification = () => {
  if (notificationsEnabled.value) {
    const toast = document.createElement("ion-toast");
    toast.message = "Notificaciones activadas";
    toast.duration = 2000;
    document.body.appendChild(toast);
    toast.present();
  }
};

// Función para cambiar el tema
const toggleDarkTheme = () => {
  document.body.classList.toggle("dark", darkTheme.value);
};

// Función para aplicar cambios
const aplicarCambios = () => {
  const cambios = {
    notifications: notificationsEnabled.value,
    darkTheme: darkTheme.value,
    password: password.value,
  };
  alert(`Cambios aplicados:\n${JSON.stringify(cambios, null, 2)}`);
};

// Función para restablecer configuraciones
const restablecerTodo = () => {
  notificationsEnabled.value = false;
  darkTheme.value = false;
  password.value = "";
  alert("Se han restablecido todas las configuraciones.");
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
