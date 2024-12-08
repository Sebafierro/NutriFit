<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Rutinas Verdes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="green-banner">
        <img :src="bannerImage" alt="Imagen de Actividades" class="banner-img">
      </div>

      <ion-card class="green-card">
        <ion-card-header>
          <ion-card-title>Entrenamiento de Hoy</ion-card-title>
          <ion-card-subtitle>{{ today }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <div class="routine-info">
            <ion-icon name="barbell-outline" class="routine-icon"></ion-icon>
            <p>Duración: 45 minutos</p>
            <ion-chip color="success">Fuerza</ion-chip>
            <ion-chip color="warning">Cardio</ion-chip>
          </div>
        </ion-card-content>
      </ion-card>

      <ion-list class="green-list">
        <ion-item v-for="(day, index) in weekSchedule" :key="index" button detail @click="editDay(index)">
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>{{ day.day }}: {{ day.activity }}</h2>
            <p>Duración: {{ day.duration }}</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-button expand="block" color="success" class="add-routine-btn" @click="editNewActivity">
        Modificar Actividad <ion-icon name="create-outline" slot="end"></ion-icon>
      </ion-button>

      <!-- Modal para editar actividad -->
      <ion-modal v-if="isModalOpen" :is-open="isModalOpen" @didDismiss="closeModal">
        <ion-header>
          <ion-toolbar>
            <ion-title>Editar Actividad</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="closeModal">Cerrar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>
              <ion-label>Actividad</ion-label>
              <ion-input v-model="selectedDay.activity" placeholder="Ejemplo: Cardio"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Duración</ion-label>
              <ion-input v-model="selectedDay.duration" placeholder="Ejemplo: 30 minutos"></ion-input>
            </ion-item>
          </ion-list>
          <ion-button expand="block" color="success" @click="saveActivity">Guardar Cambios</ion-button>
        </ion-content>
      </ion-modal>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonContent,
  IonHeader,
  IonPage,
  IonModal,
  IonInput,
} from "@ionic/vue";

import bannerImage from "@/img/Bio-Ritmo-abrio-Tonus-Gym-su-cuarto-micro-gimnasio.jpg";

const today = new Date().toLocaleDateString("es-CL", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const weekSchedule = ref([
  { day: "Lunes", activity: "Yoga", duration: "60 minutos" },
  { day: "Martes", activity: "Pesas", duration: "45 minutos" },
  { day: "Miércoles", activity: "Cardio", duration: "30 minutos" },
  { day: "Jueves", activity: "HIIT", duration: "20 minutos" },
  { day: "Viernes", activity: "Descanso", duration: "No programado" },
]);

const isModalOpen = ref(false);
const selectedDay = ref({ day: "", activity: "", duration: "" });
let selectedIndex = -1;

const editDay = (index: number) => {
  selectedIndex = index;
  selectedDay.value = { ...weekSchedule.value[index] };
  isModalOpen.value = true;
};

const editNewActivity = () => {
  selectedIndex = -1;
  selectedDay.value = { day: "", activity: "", duration: "" };
  isModalOpen.value = true;
};

const saveActivity = () => {
  if (selectedIndex >= 0) {
    weekSchedule.value[selectedIndex] = { ...selectedDay.value };
  } else {
    weekSchedule.value.push({ ...selectedDay.value });
  }
  closeModal();
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.banner-img {
  width: 100%;
  height: auto;
  max-width: 650px;
  border-radius: 15px;
  display: block;
  margin: 0 auto;
}

.green-banner {
  text-align: center;
  margin-bottom: 20px;
}

.green-card {
  border-radius: 20px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  text-align: center;
}

.routine-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
}

.routine-icon {
  font-size: 1.5rem;
  color: var(--ion-color-success);
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

.add-routine-btn {
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
}
</style>
