import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBKiGl70YQ0utIH16eejUrrOLCZAau7mY4",
  authDomain: "curso-react-tienda.firebaseapp.com",
  projectId: "curso-react-tienda",
  storageBucket: "curso-react-tienda.appspot.com",
  messagingSenderId: "572232587882",
  appId: "1:572232587882:web:484a72359dd48a50a80813",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

