import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { FBASE_API_KEY, FBASE_APP_ID, FBASE_AUTH_DOMAIN, FBASE_MESSAGING_SENDER_ID, FBASE_PROJECT_ID, FBASE_STORAGE_BUCKET } from "../constants";

const firebaseConfig = {
  apiKey: FBASE_API_KEY,
  authDomain: FBASE_AUTH_DOMAIN,
  projectId: FBASE_PROJECT_ID,
  storageBucket: FBASE_STORAGE_BUCKET,
  messagingSenderId: FBASE_MESSAGING_SENDER_ID,
  appId: FBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);