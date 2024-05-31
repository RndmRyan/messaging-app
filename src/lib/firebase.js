import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "sup-chat-ryan.firebaseapp.com",
  projectId: "sup-chat-ryan",
  storageBucket: "sup-chat-ryan.appspot.com",
  messagingSenderId: "337885680437",
  appId: "1:337885680437:web:2b85d6ff6f04f1c779b27c",
  measurementId: "G-N0TN4P4BS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
