import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgRRtNKX1L9ho7-2bUp9hQJp-7ohPzzBk",
  authDomain: "tu-consola.firebaseapp.com",
  projectId: "tu-consola",
  storageBucket: "tu-consola.appspot.com",
  messagingSenderId: "305134924185",
  appId: "1:305134924185:web:834eb8097a2f714f1d2308"
};

const app = initializeApp(firebaseConfig);
export const getFirestoreApp =() => {
    return app
}