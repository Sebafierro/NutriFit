<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" scrollable>
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 4</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/tab5">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Tab 5</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab6" href="/tabs/tab6">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 6</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab7" href="/tabs/tab7">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 7</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab8" href="/tabs/tab8">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Tab 8</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>

<style scoped>
ion-tab-bar {
  display: flex;
  overflow-x: scroll; 
  white-space: nowrap; 
  scroll-behavior: smooth; 
  padding-left: 0; 
  justify-content: flex-start; 
}

ion-tab-button {
  flex-shrink: 0; 
  min-width: 100px; 
}

ion-tabs {
  overflow: hidden; 
}

ion-tab-bar::-webkit-scrollbar {
  display: none; 
}

ion-tab-bar {
  margin-left: 0; 
  padding-right: 10px; 
}
</style>
