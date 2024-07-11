import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDL_RcCU3Fs1La7QyFbiScNvvInrdr3wkw",
  authDomain: "book-search-wp-ts-fb.firebaseapp.com",
  projectId: "book-search-wp-ts-fb",
  storageBucket: "book-search-wp-ts-fb.appspot.com",
  messagingSenderId: "49218081773",
  appId: "1:49218081773:web:e6ccbcd1ef216b17f7cde4"
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);

const auth = getAuth(fbApp);

const provider = new GoogleAuthProvider();

export { auth, GoogleAuthProvider };
export default fbApp;
