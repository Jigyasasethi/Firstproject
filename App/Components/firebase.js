var firebaseConfig = {
  apiKey: 'AIzaSyBLquEQM_nWBaev_MT4dNAcC00NwLzcX1U',
  authDomain: 'reactnative-database-8baca.firebaseapp.com',
  projectId: 'reactnative-database-8baca',
  storageBucket: 'reactnative-database-8baca.appspot.com',
  messagingSenderId: '2842702065',
  appId: '1:2842702065:web:bd206de7de518eca01b950',
  measurementId: 'G-54QNE5XE3W',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.analytics();

firebase
  .database()
  .ref('users/004')
  .set({
    name: 'Pheng Sengvuthy 004',
    age: 24,
  })
  .then(() => {
    console.log('INSERTED !');
  })
  .catch((error) => {
    console.log(error);
  });
export default firebase;
