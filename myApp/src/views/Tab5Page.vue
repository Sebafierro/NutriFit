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
        <img src="C:\Users\Vicente\Desktop\NutriFit-accesso\NutriFit\myApp\src\img\avena-con-frutas.jpg" alt="Desayuno" class="meal-img" />
        <ion-card-header>
          <ion-card-title>Desayuno</ion-card-title>
          <ion-card-subtitle>Avena con frutas</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Calorías: 250</p>
          <ion-chip color="success">Proteínas: 10g</ion-chip>
          <ion-chip color="warning">Carbohidratos: 40g</ion-chip>
          <ion-chip color="tertiary">Grasas: 5g</ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card class="green-card">
        <img src="C:\Users\Vicente\Desktop\NutriFit-accesso\NutriFit\myApp\src\img\0f96f4fe5221fbbb50b5caf69b2f2ee5_Maggi_-_Chicken_Vegetable_Stir_fry_1080_850.jpg" alt="Almuerzo" class="meal-img" />
        <ion-card-header>
          <ion-card-title>Almuerzo</ion-card-title>
          <ion-card-subtitle>Pechuga de pollo con ensalada</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Calorías: 500</p>
          <ion-chip color="success">Proteínas: 40g</ion-chip>
          <ion-chip color="warning">Carbohidratos: 60g</ion-chip>
          <ion-chip color="tertiary">Grasas: 10g</ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-card class="green-card">
        <img src="C:\Users\Vicente\Desktop\NutriFit-accesso\NutriFit\myApp\src\img\ensalada-de-atún-internet-1.jpg" alt="Cena" class="meal-img" />
        <ion-card-header>
          <ion-card-title>Cena</ion-card-title>
          <ion-card-subtitle>Ensalada con atún</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>Calorías: 300</p>
          <ion-chip color="success">Proteínas: 25g</ion-chip>
          <ion-chip color="warning">Carbohidratos: 20g</ion-chip>
          <ion-chip color="tertiary">Grasas: 15g</ion-chip>
        </ion-card-content>
      </ion-card>

      <ion-button expand="block" color="success" class="recipes-button">
        Ver más recetas <ion-icon name="restaurant-outline" slot="end"></ion-icon>
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
  IonChip,
  IonContent,
  IonHeader,
  IonPage,
} from '@ionic/vue';
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

.recipes-button {
  margin-top: 20px;
  border-radius: 20px;
  font-weight: bold;
}
</style>

