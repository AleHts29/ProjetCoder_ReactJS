import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDdknZIdyxfPEkd3pn3aSUqJ2WHnGUgye0",
    authDomain: "ht-store-2021.firebaseapp.com",
    projectId: "ht-store-2021",
    storageBucket: "ht-store-2021.appspot.com",
    messagingSenderId: "238512992556",
    appId: "1:238512992556:web:f6b81944af688ed14bfc89"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// export {auth}