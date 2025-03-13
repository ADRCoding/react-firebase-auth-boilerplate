import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFcUuuglAj0nsBakJifVHlkzqKsuktdc8",
  authDomain: "collegebites-eb1a0.firebaseapp.com",
  projectId: "collegebites-eb1a0",
  storageBucket: "collegebites-eb1a0.firebasestorage.app",
  messagingSenderId: "1085974052839",
  appId: "1:1085974052839:web:0b197211918bdce33a0742",
  measurementId: "G-YWWBQXVZ6N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
