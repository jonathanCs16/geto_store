import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-VmrkyAUjfJyVAA8R16K7MEfWwpu3X6k",
  authDomain: "geto-store.firebaseapp.com",
  projectId: "geto-store",
  storageBucket: "geto-store.appspot.com",
  messagingSenderId: "970482530766",
  appId: "1:970482530766:web:7c0be8b3fb1ff6e292d39f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;