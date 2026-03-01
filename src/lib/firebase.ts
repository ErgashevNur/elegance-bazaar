// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";
import { getAnalytics, Analytics } from "firebase/analytics";

// Firebase loyihangiz konfiguratsiyasi (env faylidan olish yaxshiroq, lekin hozircha hardcode)
const firebaseConfig = {
  apiKey: "AIzaSyDHlvbSsPUpWEXYZ8UpaRI5PrbSQkESh1w",
  authDomain: "e-commerce-4c064.firebaseapp.com",
  projectId: "e-commerce-4c064",
  storageBucket: "e-commerce-4c064.firebasestorage.app",
  messagingSenderId: "568176006341",
  appId: "1:568176006341:web:9d41157ad7064ab8d14cac",
  measurementId: "G-LZSME9LNTB",
} as const;

// Firebase ilovasini ishga tushirish
const app = initializeApp(firebaseConfig);

// Analytics (tracking uchun, ixtiyoriy)
const analytics: Analytics = getAnalytics(app);

// Authentication
export const auth: Auth = getAuth(app);

// Google provayder (Google bilan kirish uchun)
export const googleProvider = new GoogleAuthProvider();

// Agar loyihada boshqa Firebase xizmatlari qo'shmoqchi bo'lsangiz, shu yerga qo'shing va export qiling
// Misollar:
// import { getFirestore } from "firebase/firestore";
// export const db = getFirestore(app);

// import { getStorage } from "firebase/storage";
// export const storage = getStorage(app);

export default app;
