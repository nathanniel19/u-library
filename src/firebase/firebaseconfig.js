//firebase
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

//Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzshsIoDqrxjHlUs719XqGcvJNCmEs2xU",
    authDomain: "u-library-68864.firebaseapp.com",
    projectId: "u-library-68864",
    storageBucket: "u-library-68864.appspot.com",
    messagingSenderId: "423403071259",
    appId: "1:423403071259:web:3bd86edab5e9baafac15be"
  };

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  export default storage;