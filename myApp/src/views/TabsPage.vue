<template>
  <ion-app>
    <!-- Menú Lateral -->
    <ion-menu side="end" menu-id="main-menu" content-id="main-content">
      <ion-header>
        <ion-toolbar color="success">
          <ion-title>Más Opciones</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item router-link="/tabs/tab4">
            <ion-icon name="calendar-outline" slot="start"></ion-icon>
            <ion-label>Calendario</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/tab5">
            <ion-icon name="nutrition-outline" slot="start"></ion-icon>
            <ion-label>Nutrición</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/tab6">
            <ion-icon name="barbell-outline" slot="start"></ion-icon>
            <ion-label>Entrenamientos</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/tab7">
            <ion-icon name="notifications-outline" slot="start"></ion-icon>
            <ion-label>Notificaciones</ion-label>
          </ion-item>
          <ion-item router-link="/tabs/tab8">
            <ion-icon name="person-outline" slot="start"></ion-icon>
            <ion-label>Perfil</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- Contenido Principal -->
    <ion-page id="main-content">
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon name="home-outline"></ion-icon>
            <ion-label>Inicio</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon name="stats-chart-outline"></ion-icon>
            <ion-label>Perfil</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon name="settings-outline"></ion-icon>
            <ion-label>Ajustes</ion-label>
          </ion-tab-button>
          <ion-tab-button @click="openMenu">
            <ion-icon name="menu-outline"></ion-icon>
            <ion-label>Más</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </ion-app>
</template>

<script setup>
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
} from "@ionic/vue";
import { menuController } from "@ionic/vue";

const openMenu = async () => {
  await menuController.open("main-menu");
};
</script>

<style scoped>
ion-menu {
  --background: #222; /* Fondo oscuro para contraste */
}

ion-item {
  --background: #333; /* Fondo ligeramente más claro para los ítems */
  --border-radius: 8px;
  --color: white; /* Cambia el texto a blanco */
  margin: 5px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

ion-item ion-label {
  color: white; /* Asegura que las etiquetas sean blancas */
}

ion-item:hover {
  --background: #444; /* Color de fondo al pasar el mouse */
}
</style>
