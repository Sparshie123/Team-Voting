import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyCJn1dOGwRpv9ZddrSiKUp7LCacGQSLdAs",
        authDomain: "project67-413c6.firebaseapp.com",
        projectId: "project67-413c6",
        storageBucket: "project67-413c6.appspot.com",
        messagingSenderId: "177524144688",
        appId: "1:177524144688:web:5bee8c059224f199b68bf5"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();