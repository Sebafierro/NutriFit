<template>
  <ion-page>
    <ion-content class="ion-padding login-page">
      <div class="container-login">
        <div class="logo-box">
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
                <ion-label position="floating">RUT</ion-label>
                <ion-input v-model="rut" type="text" placeholder="Introduce tu RUT"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label position="floating">Clave de Acceso</ion-label>
                <ion-input v-model="password" type="password" placeholder="Introduce tu clave"></ion-input>
              </ion-item>

              <ion-button expand="block" color="success" class="btn-login" @click="iniciarSesion">Acceder</ion-button>

              <ion-text color="danger" v-if="errorMessage">{{ errorMessage }}</ion-text>
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

              <ion-text color="danger" v-if="errorMessage">{{ errorMessage }}</ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "@/img/dv9y2021487932021-05-263911643Gorilla-Gym.jpg";
import { db } from "@/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonDatetime,
} from '@ionic/vue';

const segment = ref("login");

const rut = ref("");
const nombre = ref("");
const apellidos = ref("");
const fechaNacimiento = ref("");
const password = ref("");
const isValidRUT = ref(true);
const isPasswordStrong = ref(true);
const errorMessage = ref("");

const validateRUT = () => {
    if (!rut.value || rut.value.trim() === "") {
      errorMessage.value = "El RUT no puede estar vacío.";
      isValidRUT.value = false;
      return;
    }

    const rutWithoutDots = rut.value.replace(/\./g, "").replace("-", "").trim();
    const body = rutWithoutDots.slice(0, -1);
    const dv = rutWithoutDots.slice(-1).toUpperCase();
    let sum = 0;
    let multiplier = 2;

    for (let i = body.length - 1; i >= 0; i--) {
      sum += parseInt(body[i]) * multiplier;
      multiplier = multiplier < 7 ? multiplier + 1 : 2;
    }

    const calculatedDV = 11 - (sum % 11);
    const validDV = calculatedDV === 11 ? "0" : calculatedDV === 10 ? "K" : String(calculatedDV);

    isValidRUT.value = dv === validDV;

    if (!isValidRUT.value) {
      errorMessage.value = "El RUT ingresado no es válido.";
    }
};

const validatePassword = () => {
    const passwordCriteria = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    isPasswordStrong.value = passwordCriteria.test(password.value);
};

const registrarUsuario = async () => {
    try {
        if (!isValidRUT.value || rut.value.trim() === "") {
            errorMessage.value = "El RUT ingresado no es válido.";
            return;
        }

        const rutFormatted = rut.value.trim().replace(/\./g, "").replace("-", "").toUpperCase();

        await setDoc(doc(db, "Usuario", rutFormatted), {
            nombre: `${nombre.value} ${apellidos.value}`,
            fechaNacimiento: fechaNacimiento.value,
            rut: rutFormatted,
            clave_acceso: password.value,
        });

        errorMessage.value = "";
        console.log("Usuario registrado exitosamente");
    } catch (error) {
        errorMessage.value = "Error al registrar usuario. Intenta de nuevo.";
        console.error("Error:", error);
    }
};

const iniciarSesion = async () => {
  try {
    const rutFormatted = rut.value.trim().replace(/\./g, "");

    if (!rutFormatted) {
      errorMessage.value = "El RUT no puede estar vacío.";
      return;
    }

    const userDoc = await getDoc(doc(db, "Usuario", rutFormatted));

    if (!userDoc.exists()) {
      errorMessage.value = "El RUT no está registrado.";
      return;
    }

    const userData = userDoc.data();

    if (userData.clave_acceso !== password.value) {
      errorMessage.value = "La contraseña es incorrecta.";
      return;
    }

    errorMessage.value = "";
    console.log("Inicio de sesión exitoso:", userData);
  } catch (error) {
    errorMessage.value = "Error al iniciar sesión. Intenta de nuevo.";
    console.error("Error:", error);
  }
};
</script>

<style scoped>
</style>