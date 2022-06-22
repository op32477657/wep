import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCv3Tnq-CAKVN3x-Xh6gjkLe2mXKrjpPmk",
  authDomain: "instagram-b5ad2.firebaseapp.com",
  projectId: "instagram-b5ad2",
  storageBucket: "instagram-b5ad2.appspot.com",
  messagingSenderId: "141383335744",
  appId: "1:141383335744:web:b5a8ab41335bf3cf7184a5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;