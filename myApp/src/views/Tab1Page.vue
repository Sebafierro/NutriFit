<template>
  <ion-page>
    <ion-content class="ion-padding login-page">
      <div class="login-container">
        <div class="logo-container">
          <img src="https://via.placeholder.com/150" alt="Logo" class="logo" />
        </div>

        
        <ion-card class="login-card">
          <ion-segment value="login">
            <ion-segment-button value="login">
              <ion-label>Log In</ion-label>
            </ion-segment-button>
            <ion-segment-button value="register">
              <ion-label>Registrarse</ion-label>
            </ion-segment-button>
          </ion-segment>

          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Correo</ion-label>
              <ion-input type="email" placeholder="Ingresa tu correo"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Contraseña</ion-label>
              <ion-input type="password" placeholder="Ingresa tu contraseña"></ion-input>
            </ion-item>

            <ion-button expand="block" color="success" class="ion-margin-top">Log In</ion-button>
            
            <ion-text class="forgot-password">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </ion-text>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonCard, IonCardContent, IonSegment, IonSegmentButton, IonLabel, IonItem, IonInput, IonButton, IonText } from '@ionic/vue';
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
}

.logo-container {
  margin-bottom: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.login-card {
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

ion-item {
  margin-bottom: 15px;
}

.forgot-password {
  display: block;
  text-align: center;
  margin-top: 10px;
}

a {
  color: var(--ion-color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
