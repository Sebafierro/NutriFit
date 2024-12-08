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
      <ion-text>
        <p><strong>Inicio</strong> / Calendario</p>
      </ion-text>

      <!-- Entrenamiento de Hoy -->
      <ion-card class="green-card">
        <ion-card-header>
          <ion-card-title>Entrenamiento de Hoy</ion-card-title>
          <ion-card-subtitle>{{ todayFormatted }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-chip color="success">Cardio</ion-chip>
          <ion-chip color="warning">45 minutos</ion-chip>
          <ion-chip color="danger">HIIT</ion-chip>
          <p>Calorías estimadas quemadas: {{ caloriesBurned }}</p>
        </ion-card-content>
        <ion-button expand="block" color="success" @click="showDetails = true">
          Ver detalles <ion-icon name="calendar" slot="end"></ion-icon>
        </ion-button>
      </ion-card>

      <!-- Modal Detalles -->
      <ion-modal v-if="showDetails" :is-open="showDetails" @willDismiss="showDetails = false">
        <ion-header>
          <ion-toolbar>
            <ion-title>Detalles del Entrenamiento</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="showDetails = false">Cerrar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>
              <ion-label>Tipo: Cardio + HIIT</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Duración: 45 minutos</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>Calorías quemadas: {{ caloriesBurned }} kcal</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-modal>

      <!-- Lista de Entrenamientos -->
      <ion-list class="green-list" ref="trainingList">
        <ion-item v-for="(training, index) in sortedTrainings" :key="index">
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>
            <h2>{{ training.day }}: {{ training.type }}</h2>
            <p>Duración: {{ training.duration }} minutos</p>
            <p>Calorías estimadas: {{ calculateCalories(training.type, training.duration) }} kcal</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <!-- Botón Agregar Entrenamiento -->
      <ion-button expand="block" color="success" @click="showAddTraining = true">
        Agregar Entrenamiento <ion-icon name="add-circle-outline" slot="end"></ion-icon>
      </ion-button>

      <!-- Modal Agregar Entrenamiento -->
      <ion-modal v-if="showAddTraining" :is-open="showAddTraining" @willDismiss="showAddTraining = false">
        <ion-header>
          <ion-toolbar>
            <ion-title>Agregar Entrenamiento</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="showAddTraining = false">Cerrar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item class="aligned-item">
              <ion-label>Tipo de Entrenamiento</ion-label>
              <ion-select v-model="newTraining.type" placeholder="Seleccionar Tipo">
                <ion-select-option value="Cardio">Cardio</ion-select-option>
                <ion-select-option value="Pesas">Pesas</ion-select-option>
                <ion-select-option value="HIIT">HIIT</ion-select-option>
                <ion-select-option value="Yoga">Yoga</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item class="aligned-item">
              <ion-label>Duración</ion-label>
              <ion-input type="number" v-model="newTraining.duration" placeholder="Duración en minutos" class="right-align"></ion-input>
            </ion-item>
            <ion-item class="aligned-item">
              <ion-label>Día</ion-label>
              <ion-input type="text" v-model="newTraining.day" placeholder="Día (ej. Lunes)" class="right-align"></ion-input>
            </ion-item>
            <ion-button expand="block" color="success" @click="addTraining">Agregar</ion-button>
          </ion-list>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
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
  IonText,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonInput
} from '@ionic/vue';

// Formatear fecha actual
const today = new Date();
const todayFormatted = `${today.toLocaleDateString('es-ES', {
  weekday: 'long',
})}, ${today.getDate()} de ${today.toLocaleDateString('es-ES', {
  month: 'long',
})}`;

// Mostrar y agregar entrenamientos
const showDetails = ref(false);
const showAddTraining = ref(false);

const dayOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const trainings = ref([
  { day: 'Lunes', type: 'Pesas', duration: 60 },
  { day: 'Martes', type: 'Yoga', duration: 45 },
  { day: 'Miércoles', type: 'HIIT', duration: 30 },
  { day: 'Jueves', type: 'Cardio', duration: 40 },
  { day: 'Viernes', type: 'Descanso', duration: 0 },
]);

const sortedTrainings = computed(() => {
  return trainings.value.sort((a, b) => {
    return dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day);
  });
});

const newTraining = ref({
  type: '',
  duration: 0,
  day: ''
});

// Calcular calorías quemadas en función del tipo de entrenamiento y duración
const calculateCalories = (type: string, duration: number) => {
  const caloriesPerMinute = {
    Cardio: 8,
    Pesas: 4,
    HIIT: 12,
    Yoga: 3,
  };
  return caloriesPerMinute[type] ? caloriesPerMinute[type] * duration : 0;
};

const addTraining = () => {
  if (newTraining.value.type && newTraining.value.duration && newTraining.value.day) {
    trainings.value.push({ ...newTraining.value });
    showAddTraining.value = false;
    newTraining.value = { type: '', duration: 0, day: '' };
  } else {
    alert('Por favor, completa todos los campos.');
  }
};
</script>

<style scoped>
.green-card {
  border-radius: 15px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
}

.green-list {
  max-height: 300px;
  overflow-y: auto;
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

.aligned-item ion-label {
  flex-grow: 1;
}

.right-align {
  text-align: right;
}

ion-chip {
  margin-right: 10px;
}
</style>
