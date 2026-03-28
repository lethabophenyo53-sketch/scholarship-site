import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB94Hy6sFUBXE4ObSOQmPW5As4Fbxaoi4",
  authDomain: "scholarship-platform-ec01f.firebaseapp.com",
  projectId: "scholarship-platform-ec01f",
  storageBucket: "scholarship-platform-ec01f.appspot.com",
  messagingSenderId: "807575045909",
  appId: "1:807575045909:web:9a61a548638423d7988b1c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
