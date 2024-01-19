
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bulk-mailer-90741.firebaseapp.com",
  projectId: "bulk-mailer-90741",
  storageBucket: "bulk-mailer-90741.appspot.com",
  messagingSenderId: "314293473033",
  appId: "1:314293473033:web:0ba93799f70932ed670dd8",
  measurementId: "G-8F87448FLB"
};
 
export const app = initializeApp(firebaseConfig);
