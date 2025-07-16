// firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCqlNaYoZ5YpGU9f9yYGzuQWUi7D4Sj8jM",
  authDomain: "laxmistrendyboutique.firebaseapp.com",
  projectId: "laxmistrendyboutique",
  storageBucket: "laxmistrendyboutique.appspot.com", // ✅ Corrected
  messagingSenderId: "631367725415",
  appId: "1:631367725415:web:b739a05711810e2c40ffc2"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
