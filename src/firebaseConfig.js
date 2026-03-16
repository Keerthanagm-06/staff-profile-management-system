import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUIfcoRHcIGx2HwajxRucN30kG1H81yRU",
    authDomain: "staffprofile-management-system.firebaseapp.com",
    projectId: "staffprofile-management-system",
    storageBucket: "staffprofile-management-system.appspot.com",
    messagingSenderId: "1004221460842",
    appId: "1:1004221460842:web:47f4f272ea6a832dd47513",
    measurementId: "G-1HF48QCGF3"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getFirestore(app);