import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_eK6ENC9-naFQzytoIQFTUUod1bEKa9s",
  authDomain: "udemy-ninja-chat-bd777.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-bd777.firebaseio.com",
  projectId: "udemy-ninja-chat-bd777",
  storageBucket: "udemy-ninja-chat-bd777.appspot.com",
  messagingSenderId: "94195870696",
  appId: "1:94195870696:web:d230ddb6896459a236925d",
  measurementId: "G-Z8XJDZYDZ4",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore();
