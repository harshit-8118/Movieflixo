import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-f6808.firebaseapp.com",
  projectId: "netflix-f6808",
  storageBucket: "netflix-f6808.appspot.com",
  messagingSenderId: "920498311856",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-EZFC2NXCVF",
};

export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
