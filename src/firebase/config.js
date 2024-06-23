import firebase from "firebase/app"
// import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCcI5_FHp4lGBiDtrxT-NzZy2AgbRqTEJ0",
    authDomain: "vue-blog-system-470b0.firebaseapp.com",
    projectId: "vue-blog-system-470b0",
    storageBucket: "vue-blog-system-470b0.appspot.com",
    messagingSenderId: "21708935439",
    appId: "1:21708935439:web:984c2f5f4313310e65ee7a"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let auth = firebase.auth();
  let  timestamp = firebase.firestore.FieldValue.serverTimestamp;

  // database setup
 
  export {db,auth,timestamp};

  //-----------------------------------------

// import firebase from 'firebase/app';
// import "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore";
// import {getAuth} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAny_Gml3RTfzxVL2sA_NO37C2l22QT01s",
//   authDomain: "library-management-abf5f.firebaseapp.com",
//   projectId: "library-management-abf5f",
//   StorageBucket: "library-management-abf5f.appspot.com",
//   messagingSenderId: "568764478154",
//   appId: "1:568764478157:web:a5889c1139f554007d7a33",
//   measurementId: "G-N4L6S9Q6XD",
// };

// const app = initializeApp(firebaseConfig);
// let db = getFirestore(app);
// let auth = getAuth(app);
// import "firebase/firestore";

// export {db,auth};

