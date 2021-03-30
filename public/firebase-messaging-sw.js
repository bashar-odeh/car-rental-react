importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js");
// importScripts('/__/firebase/init.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyAEq1lCqamOlQw1Hc12cbRlVQKmHUPtKfI",
  authDomain: "test-71faa.firebaseapp.com",
  projectId: "test-71faa",
  storageBucket: "test-71faa.appspot.com",
  messagingSenderId: "608611186397",
  appId: "1:608611186397:web:daacec1403c3e884cbcd34",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
