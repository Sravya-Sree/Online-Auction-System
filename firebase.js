import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyDGVips71mT5st_mF0A-3SRwysgBae1SvI",
  authDomain: "auctioneer-13be5.firebaseapp.com",
  databaseURL: "https://auctioneer-13be5-default-rtdb.firebaseio.com",
  projectId: "auctioneer-13be5",
  storageBucket: "auctioneer-13be5.appspot.com",
  messagingSenderId: "361318195923",
  appId: "1:361318195923:web:d4f28a9efc96fd68bcaa26",
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
