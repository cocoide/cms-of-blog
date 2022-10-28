import { getApp, getApps, initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBI4t8AwWo2o5FaGSF8McOdsGqfyG-EsIs",
    authDomain: "osicomi.firebaseapp.com",
    projectId: "osicomi",
    storageBucket: "osicomi.appspot.com",
    messagingSenderId: "798145779007",
    appId: "1:798145779007:web:b9530c9eab0a50536baf8a",
    measurementId: "G-8GHS16W4F4"
  };
  export const app = initializeApp(firebaseConfig);
  export const initializeFirebaseApp = () =>
  !getApps().length ? initializeApp(firebaseConfig) : getApp()

