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
      <!-- Desayuno -->
      <ion-card class="green-card">
        <img :src="breakfastImage" alt="Desayuno" class="meal-img" />
        <ion-card-header>
          <ion-card-title>Desayuno</ion-card-title>
          <ion-card-subtitle>Avena con frutas</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Calorías: {{ meals.breakfast.calories }}</p>
          <ion-chip color="success">Proteínas: {{ meals.breakfast.proteins }}g</ion-chip>
          <ion-chip color="warning">Carbohidratos: {{ meals.breakfast.carbs }}g</ion-chip>
          <ion-chip color="tertiary">Grasas: {{ meals.breakfast.fats }}g</ion-chip>
          <ion-button expand="block" color="success" @click="addMeal('breakfast')" :disabled="selectedMeals.breakfast">
            Agregar
          </ion-button>
          <ion-button expand="block" color="warning" @click="openEditModal('breakfast')">Modificar</ion-button>
        </ion-card-content>
      </ion-card>

      <!-- Almuerzo -->
      <ion-card class="green-card">
        <img :src="lunchImage" alt="Almuerzo" class="meal-img" />
        <ion-card-header>
          <ion-card-title>Almuerzo</ion-card-title>
          <ion-card-subtitle>Pechuga de pollo con ensalada</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Calorías: {{ meals.lunch.calories }}</p>
          <ion-chip color="success">Proteínas: {{ meals.lunch.proteins }}g</ion-chip>
          <ion-chip color="warning">Carbohidratos: {{ meals.lunch.carbs }}g</ion-chip>
          <ion-chip color="tertiary">Grasas: {{ meals.lunch.fats }}g</ion-chip>
          <ion-button expand="block" color="success" @click="addMeal('lunch')" :disabled="selectedMeals.lunch">
            Agregar
          </ion-button>
          <ion-button expand="block" color="warning" @click="openEditModal('lunch')">Modificar</ion-button>
        </ion-card-content>
      </ion-card>

      <!-- Cena -->
      <ion-card class="green-card">
        <img :src="dinnerImage" alt="Cena" class="meal-img" />
        <ion-card-header>
          <ion-card-title>Cena</ion-card-title>
          <ion-card-subtitle>Ensalada con atún</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Calorías: {{ meals.dinner.calories }}</p>
          <ion-chip color="success">Proteínas: {{ meals.dinner.proteins }}g</ion-chip>
          <ion-chip color="warning">Carbohidratos: {{ meals.dinner.carbs }}g</ion-chip>
          <ion-chip color="tertiary">Grasas: {{ meals.dinner.fats }}g</ion-chip>
          <ion-button expand="block" color="success" @click="addMeal('dinner')" :disabled="selectedMeals.dinner">
            Agregar
          </ion-button>
          <ion-button expand="block" color="warning" @click="openEditModal('dinner')">Modificar</ion-button>
        </ion-card-content>
      </ion-card>

      <!-- Resumen -->
      <ion-card class="summary-card">
        <ion-card-header>
          <ion-card-title>Resumen del Día</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>Total Calorías: {{ totalCalories }}</p>
          <p>Total Proteínas: {{ totalProteins }}g</p>
          <p>Total Carbohidratos: {{ totalCarbs }}g</p>
          <p>Total Grasas: {{ totalFats }}g</p>
        </ion-card-content>
      </ion-card>

      <!-- Modal -->
      <ion-modal :is-open="isModalOpen" @will-dismiss="closeModal">
        <ion-content>
          <ion-header>
            <ion-toolbar>
              <ion-title>Modificar {{ currentMealTitle }}</ion-title>
              <ion-buttons slot="end">
                <ion-button @click="closeModal">Cerrar</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-item>
              <ion-label>Calorías</ion-label>
              <ion-input v-model.number="editMeal.calories" type="number"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Proteínas</ion-label>
              <ion-input v-model.number="editMeal.proteins" type="number"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Carbohidratos</ion-label>
              <ion-input v-model.number="editMeal.carbs" type="number"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Grasas</ion-label>
              <ion-input v-model.number="editMeal.fats" type="number"></ion-input>
            </ion-item>
            <ion-button expand="block" color="success" @click="saveMealEdit">Guardar Cambios</ion-button>
          </ion-content>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import breakfastImage from '@/img/avena-con-frutas.jpg';
import lunchImage from '@/img/0f96f4fe5221fbbb50b5caf69b2f2ee5_Maggi_-_Chicken_Vegetable_Stir_fry_1080_850.jpg';
import dinnerImage from '@/img/ensalada-de-atún-internet-1.jpg';

const selectedMeals = ref({
  breakfast: false,
  lunch: false,
  dinner: false,
});

const meals = ref({
  breakfast: { title: 'Desayuno', subtitle: 'Avena con frutas', calories: 250, proteins: 10, carbs: 40, fats: 5 },
  lunch: { title: 'Almuerzo', subtitle: 'Pechuga de pollo con ensalada', calories: 500, proteins: 40, carbs: 60, fats: 10 },
  dinner: { title: 'Cena', subtitle: 'Ensalada con atún', calories: 300, proteins: 25, carbs: 20, fats: 15 },
});

const addMeal = (mealType) => {
  selectedMeals.value[mealType] = true;
};

const totalCalories = computed(() =>
  Object.entries(selectedMeals.value).reduce((total, [mealType, selected]) => selected ? total + meals.value[mealType].calories : total, 0)
);

const totalProteins = computed(() =>
  Object.entries(selectedMeals.value).reduce((total, [mealType, selected]) => selected ? total + meals.value[mealType].proteins : total, 0)
);

const totalCarbs = computed(() =>
  Object.entries(selectedMeals.value).reduce((total, [mealType, selected]) => selected ? total + meals.value[mealType].carbs : total, 0)
);

const totalFats = computed(() =>
  Object.entries(selectedMeals.value).reduce((total, [mealType, selected]) => selected ? total + meals.value[mealType].fats : total, 0)
);

const isModalOpen = ref(false);
const editMeal = ref({});
const currentMealTitle = ref('');

const openEditModal = (mealType) => {
  currentMealTitle.value = meals.value[mealType].title;
  editMeal.value = { ...meals.value[mealType] };
  isModalOpen.value = true;
};

const saveMealEdit = () => {
  meals.value[currentMealTitle.value.toLowerCase()] = { ...editMeal.value };
  closeModal();
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
