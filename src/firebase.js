// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCwEQWihgFXFIPKD7vpGn-FXeo_2cjq4hI",
  authDomain: "ecommerce-35d3d.firebaseapp.com",
  projectId: "ecommerce-35d3d",
  storageBucket: "ecommerce-35d3d.appspot.com",
  messagingSenderId: "1037239677764",
  appId: "1:1037239677764:web:03e66bf6eb63544d6fdd11"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
