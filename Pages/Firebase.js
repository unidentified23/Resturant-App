import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqADUmPNiuP07nDDD00zUyePQhHQ-Ek4A",
  authDomain: "manskitchen-2be46.firebaseapp.com",
  projectId: "manskitchen-2be46",
  storageBucket: "manskitchen-2be46.appspot.com",
  messagingSenderId: "178482271036",
  appId: "1:178482271036:web:8e1467ed40c9c39c8d4439"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

