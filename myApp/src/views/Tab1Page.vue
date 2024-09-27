<template>
  <ion-page>
    <ion-content class="ion-padding login-page">
      <div class="container-login">
        <div class="logo-box">
          <img src="https://via.placeholder.com/150" alt="Logo del sitio" class="logo-img" />
        </div>

        <ion-card class="form-card">
          <ion-segment value="login">
            <ion-segment-button value="login">
              <ion-label>Iniciar Sesión</ion-label>
            </ion-segment-button>
            <ion-segment-button value="register">
              <ion-label>Crear Cuenta</ion-label>
            </ion-segment-button>
          </ion-segment>

          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Correo Electrónico</ion-label>
              <ion-input type="email" placeholder="Introduce tu correo"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Clave de Acceso</ion-label>
              <ion-input type="password" placeholder="Introduce tu clave"></ion-input>
            </ion-item>

            <ion-button expand="block" color="primary" class="btn-login">Acceder</ion-button>

            <ion-text class="forgot-link">
              <a href="#">¿Has olvidado tu clave?</a>
            </ion-text>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonText,
} from '@ionic/vue';
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.container-login {
  width: 100%;
  max-width: 420px;
  padding: 25px;
  text-align: center;
}

.logo-box {
  margin-bottom: 25px;
}

.logo-img {
  width: 90px;
  height: 90px;
  margin: 0 auto;
}

.form-card {
  border-radius: 25px;
  padding: 25px;
  box-shadow: 0px 5px 14px rgba(0, 0, 0, 0.15);
}

ion-item {
  margin-bottom: 20px;
}

.forgot-link {
  display: block;
  text-align: center;
  margin-top: 15px;
}

a {
  color: var(--ion-color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.btn-login {
  margin-top: 20px;
  font-weight: bold;
  border-radius: 12px;
}
</style>
