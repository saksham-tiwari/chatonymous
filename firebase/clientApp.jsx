import firebase from 'firebase/compat/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const credentials={
    experimentalForceLongPolling: true,
    useFetchStreams: false,
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

if (!firebase.apps.length) {
    initializeApp(credentials);
 }
// initializeApp(credentials);


const db = getFirestore();
export {db}

export default firebase;