import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHlvbSsPUpWEXYZ8UpaRI5PrbSQkESh1w",
  authDomain: "e-commerce-4c064.firebaseapp.com",
  projectId: "e-commerce-4c064",
  storageBucket: "e-commerce-4c064.firebasestorage.app",
  messagingSenderId: "568176006341",
  appId: "1:568176006341:web:9d41157ad7064ab8d14cac",
  measurementId: "G-LZSME9LNTB",
} as const;

const app = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);

export const auth: Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db: Firestore = getFirestore(app);

export default app;
