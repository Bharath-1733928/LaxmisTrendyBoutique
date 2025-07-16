// auth.ts
import { auth, googleProvider } from './firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut as firebaseSignOut,
  User
} from 'firebase/auth';

export const ADMIN_EMAILS = [
  'bharath1733928@gmail.com',
  'laxmistrendyboutique24@gmail.com'
];

export const ADMIN_CREDENTIALS = {
  'bharath1733928@gmail.com': 'B1733928',
  'laxmistrendyboutique24@gmail.com': 'laxmisboutique@24'
};

export const isAdmin = (user: User | null): boolean => {
  return user ? ADMIN_EMAILS.includes(user.email || '') : false;
};

export const signInWithEmail = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error: any) {
    if (error.code === 'auth/popup-blocked') {
      return await signInWithRedirect(auth, googleProvider);
    }
    throw error;
  }
};

export const handleRedirectResult = async () => {
  return await getRedirectResult(auth);
};

export const signOut = async () => {
  return await firebaseSignOut(auth);
};
