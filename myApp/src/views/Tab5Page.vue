<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Plan de Nutrición</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card class="green-card">
        <img :src="breakfastImage" alt="Desayuno" class="meal-img" />
        <ion-card-header>
          <ion-card-title>Desayuno</ion-card-title>
          <ion-card-subtitle>Avena con frutas</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Calorías: 250</p>
          <ion-chip color="success">Proteínas: 10g</ion-chip>
          <ion-chip color="warning">Carbohidratos: 40g</ion-chip>
          <ion-chip color="tertiary">Grasas: 5g</ion-chip>
          <ion-button expand="block" color="success" @click="addMeal('breakfast')" :disabled="selectedMeals.breakfast">
            Agregar
          </ion-button>
        </ion-card-content>
      </ion-card>

      <ion-card class="green-card">
        <img :src="lunchImage" alt="Almuerzo" class="meal-img" />
        <ion-card-header>
          <ion-card-title>Almuerzo</ion-card-title>
          <ion-card-subtitle>Pechuga de pollo con ensalada</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Calorías: 500</p>
          <ion-chip color="success">Proteínas: 40g</ion-chip>
          <ion-chip color="warning">Carbohidratos: 60g</ion-chip>
          <ion-chip color="tertiary">Grasas: 10g</ion-chip>
          <ion-button expand="block" color="success" @click="addMeal('lunch')" :disabled="selectedMeals.lunch">
            Agregar
          </ion-button>
        </ion-card-content>
      </ion-card>

      <ion-card class="green-card">
        <img :src="dinnerImage" alt="Cena" class="meal-img" />
        <ion-card-header>
          <ion-card-title>Cena</ion-card-title>
          <ion-card-subtitle>Ensalada con atún</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Calorías: 300</p>
          <ion-chip color="success">Proteínas: 25g</ion-chip>
          <ion-chip color="warning">Carbohidratos: 20g</ion-chip>
          <ion-chip color="tertiary">Grasas: 15g</ion-chip>
          <ion-button expand="block" color="success" @click="addMeal('dinner')" :disabled="selectedMeals.dinner">
            Agregar
          </ion-button>
        </ion-card-content>
      </ion-card>

      <ion-card class="summary-card">
        <ion-card-header>
          <ion-card-title>Resumen del Día</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>Total Proteínas: {{ totalProteins }}g</p>
          <p>Total Carbohidratos: {{ totalCarbs }}g</p>
          <p>Total Grasas: {{ totalFats }}g</p>
        </ion-card-content>
      </ion-card>

      <ion-button expand="block" color="success" class="recipes-button">
        Ver más recetas <ion-icon name="restaurant-outline" slot="end"></ion-icon>
      </ion-button>
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
  IonContent,
  IonHeader,
  IonPage,
} from '@ionic/vue';
import breakfastImage from '@/img/avena-con-frutas.jpg';
import lunchImage from '@/img/0f96f4fe5221fbbb50b5caf69b2f2ee5_Maggi_-_Chicken_Vegetable_Stir_fry_1080_850.jpg';
import dinnerImage from '@/img/ensalada-de-atún-internet-1.jpg';

const selectedMeals = ref({
  breakfast: false,
  lunch: false,
  dinner: false,
});

const meals = {
  breakfast: { proteins: 10, carbs: 40, fats: 5 },
  lunch: { proteins: 40, carbs: 60, fats: 10 },
  dinner: { proteins: 25, carbs: 20, fats: 15 },
};

const addMeal = (mealType: 'breakfast' | 'lunch' | 'dinner') => {
  selectedMeals.value[mealType] = true;
};

const totalProteins = computed(() => {
  return (selectedMeals.value.breakfast ? meals.breakfast.proteins : 0) +
         (selectedMeals.value.lunch ? meals.lunch.proteins : 0) +
         (selectedMeals.value.dinner ? meals.dinner.proteins : 0);
});

const totalCarbs = computed(() => {
  return (selectedMeals.value.breakfast ? meals.breakfast.carbs : 0) +
         (selectedMeals.value.lunch ? meals.lunch.carbs : 0) +
         (selectedMeals.value.dinner ? meals.dinner.carbs : 0);
});

const totalFats = computed(() => {
  return (selectedMeals.value.breakfast ? meals.breakfast.fats : 0) +
         (selectedMeals.value.lunch ? meals.lunch.fats : 0) +
         (selectedMeals.value.dinner ? meals.dinner.fats : 0);
});
</script>

<style scoped>
.meal-img {
  width: 100%; 
  max-width: 700px; 
  height: auto;
  border-radius: 15px;
  display: block; 
  margin: 0 auto; 
}

.green-card {
  border-radius: 15px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
}

.summary-card {
  border-radius: 15px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
  background-color: #e0f7fa;
}

.recipes-button {
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
}
</style>
