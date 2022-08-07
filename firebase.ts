// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//995ea1569ea5c8712ad558a07ab83e90
const firebaseConfig = {
  apiKey: "",
  authDomain: "milfy-way.firebaseapp.com",
  projectId: "milfy-way",
  storageBucket: "milfy-way.appspot.com",
  messagingSenderId: "730898679849",
  appId: "1:730898679849:web:364b3de9c82f0a88433438",
  measurementId: "G-WL843WBE75",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
