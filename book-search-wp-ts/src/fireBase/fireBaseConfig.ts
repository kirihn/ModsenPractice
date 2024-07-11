import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { FirebaseApiKey, FireBaseAppId, FireBaseAuthDomain, FireBaseMessagingSenderId, FireBaseProjectId, FireBaseStorageBucke } from '../../config'

const firebaseConfig = {
  apiKey: FirebaseApiKey,
  authDomain: FireBaseAuthDomain,
  projectId: FireBaseProjectId,
  storageBucket: FireBaseStorageBucke,
  messagingSenderId: FireBaseMessagingSenderId,
  appId: FireBaseAppId
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);

const auth = getAuth(fbApp);

const provider = new GoogleAuthProvider();

export { auth, GoogleAuthProvider };
export default fbApp;
