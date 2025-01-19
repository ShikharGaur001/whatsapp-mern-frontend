import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4TQlEIIvWTMi_vWfHRQzF6jGV-aKgDTY",
  authDomain: "whatsapp-clone-e3637.firebaseapp.com",
  projectId: "whatsapp-clone-e3637",
  storageBucket: "whatsapp-clone-e3637.firebasestorage.app",
  messagingSenderId: "803419702533",
  appId: "1:803419702533:web:033bf7ba15068cd933636c",
  measurementId: "G-XVEP916X35",
};

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)