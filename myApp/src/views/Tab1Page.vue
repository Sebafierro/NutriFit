<template>
  <ion-page>
    <ion-content class="ion-padding login-page">
      <div class="container-login">
        <div class="logo-box">
          <!-- Imagen importada -->
          <img :src="logo" alt="Logo del sitio" class="logo-img" />
        </div>

        <ion-card class="form-card">
          <ion-segment v-model="segment">
            <ion-segment-button value="login">
              <ion-label>Iniciar Sesión</ion-label>
            </ion-segment-button>
            <ion-segment-button value="register">
              <ion-label>Crear Cuenta</ion-label>
            </ion-segment-button>
          </ion-segment>

          <ion-card-content>
            <div v-if="segment === 'login'">
              <ion-item>
                <ion-label position="floating">Correo Electrónico</ion-label>
                <ion-input type="email" placeholder="Introduce tu correo"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Clave de Acceso</ion-label>
                <ion-input type="password" placeholder="Introduce tu clave"></ion-input>
              </ion-item>

              <ion-button expand="block" color="success" class="btn-login">Acceder</ion-button>

              <ion-text class="forgot-link">
                <a href="#">¿Has olvidado tu clave?</a>
              </ion-text>
            </div>

            <div v-else>
              <ion-item>
                <ion-label position="floating">RUT</ion-label>
                <ion-input type="text" v-model="rut" @ionBlur="validateRUT" placeholder="Introduce tu RUT"></ion-input>
                <ion-text v-if="!isValidRUT" color="danger">RUT inválido</ion-text>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Nombre</ion-label>
                <ion-input type="text" v-model="nombre" placeholder="Introduce tu nombre"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Apellidos</ion-label>
                <ion-input type="text" v-model="apellidos" placeholder="Introduce tus apellidos"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Fecha de Nacimiento</ion-label>
                <ion-datetime display-format="DD MMM YYYY" picker-format="DD MMMM YYYY" placeholder="Selecciona tu fecha" v-model="fechaNacimiento"></ion-datetime>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Correo Electrónico</ion-label>
                <ion-input type="email" v-model="correo" placeholder="Introduce tu correo"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Crear Contraseña</ion-label>
                <ion-input
                  type="password"
                  v-model="password"
                  @ionBlur="validatePassword"
                  placeholder="Introduce tu contraseña"
                ></ion-input>
              </ion-item>
              <ion-text v-if="!isPasswordStrong" color="danger">Contraseña demasiado débil</ion-text>

              <ion-button expand="block" color="success" class="btn-register" :disabled="!isValidRUT || !isPasswordStrong" @click="registrarUsuario">
                Registrarse
              </ion-button>

              <!-- Registro de datos ingresados -->
              <div v-if="registroRealizado" class="registro-datos">
                <h3>Datos Registrados:</h3>
                <p><strong>RUT:</strong> {{ rut }}</p>
                <p><strong>Nombre:</strong> {{ nombre }}</p>
                <p><strong>Apellidos:</strong> {{ apellidos }}</p>
                <p><strong>Fecha de Nacimiento:</strong> {{ fechaNacimiento }}</p>
                <p><strong>Correo Electrónico:</strong> {{ correo }}</p>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/img/dv9y2021487932021-05-263911643Gorilla-Gym.jpg';

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
  IonDatetime
} from '@ionic/vue';

const segment = ref('login');

const rut = ref('');
const nombre = ref('');
const apellidos = ref('');
const fechaNacimiento = ref('');
const correo = ref('');
const password = ref('');
const isValidRUT = ref(true);
const isPasswordStrong = ref(true);
const registroRealizado = ref(false);

const validateRUT = () => {
  const rutWithoutDots = rut.value.replace(/\./g, '').replace('-', '');
  const body = rutWithoutDots.slice(0, -1);
  const dv = rutWithoutDots.slice(-1).toUpperCase();
  let sum = 0;
  let multiplier = 2;

  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * multiplier;
    multiplier = multiplier < 7 ? multiplier + 1 : 2;
  }

  const calculatedDV = 11 - (sum % 11);
  const validDV = calculatedDV === 11 ? '0' : calculatedDV === 10 ? 'K' : String(calculatedDV);

  isValidRUT.value = dv === validDV;
};

const validatePassword = () => {
  const passwordCriteria = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  isPasswordStrong.value = passwordCriteria.test(password.value);
};

const registrarUsuario = () => {
  if (isValidRUT.value && isPasswordStrong.value) {
    registroRealizado.value = true;
  }
};
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
  margin: 0 auto; 
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
  --padding-start: 12px;
  --padding-end: 12px;
  --inner-padding-top: 15px;
  --inner-padding-bottom: 10px;
}

ion-label {
  font-size: 15px;
  margin-bottom: 10px;
}

ion-input, ion-datetime {
  font-size: 14px;
  --padding-top: 12px;
}

.forgot-link {
  display: block;
  text-align: center;
  margin-top: 15px;
}

a {
  color: var(--ion-color-success);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.btn-login, .btn-register {
  margin-top: 20px;
  font-weight: bold;
  border-radius: 12px;
  color: white;
}

.registro-datos {
  margin-top: 20px;
}

@media (min-width: 768px) {
  .container-login {
    max-width: 500px;
  }

  .form-card {
    padding: 30px;
  }
}
</style>
