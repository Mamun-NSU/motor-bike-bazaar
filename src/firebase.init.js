// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjMF6nUFtI4mbBNfA_7eqKsNMhkSffdZU",
  authDomain: "warehouse-management-58b77.firebaseapp.com",
  projectId: "warehouse-management-58b77",
  storageBucket: "warehouse-management-58b77.appspot.com",
  messagingSenderId: "784488763576",
  appId: "1:784488763576:web:0c4b43fdeefd9c5edea44d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
