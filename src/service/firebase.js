import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCPVIXWUyjg3AzjrFanwYklQZKPC4N_088",
    authDomain: "test-shop-582ad.firebaseapp.com",
    databaseURL: "https://test-shop-582ad.firebaseio.com",
    projectId: "test-shop-582ad",
    storageBucket: "test-shop-582ad.appspot.com",
    messagingSenderId: "1050859708381",
    appId: "1:1050859708381:web:eb5f5779a00d05cb936034"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
db.enablePersistence({ synchronizeTabs: true });

export const fb = firebase;