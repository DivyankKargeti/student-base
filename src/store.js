import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase';
import {composeWithDevTools} from "redux-devtools-extension";
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';// <- needed if using firestore
const fbConfig = {
    apiKey: "AIzaSyBole420GrfqvA-9Q5H8GQ125AlNZ6iTTg",
    authDomain: "student-base-343d3.firebaseapp.com",
    databaseURL: "https://student-base-343d3.firebaseio.com",
    projectId: "student-base-343d3",
    storageBucket: "student-base-343d3.appspot.com",
    messagingSenderId: "776349308278",
    appId: "1:776349308278:web:e008caf98ae361f7765657",
    measurementId: "G-Q99PT463JB"
};
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
 
// Initialize firebase instance
firebase.initializeApp(fbConfig);
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});
 
// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools());
 
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default store;