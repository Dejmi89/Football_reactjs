import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';



const config = {
    apiKey: "AIzaSyDl2jPgePX2Bt5zPrzctXhqT4hgylXkEiM",
    authDomain: "mc-fcb.firebaseapp.com",
    databaseURL: "https://mc-fcb.firebaseio.com",
    projectId: "mc-fcb",
    storageBucket: "mc-fcb.appspot.com",
    messagingSenderId: "814923515691"
  };

  firebase.initializeApp(config);

  const firebaseDataBase = firebase.database();
  const firebaseMatches = firebaseDataBase.ref('matches');
  const firebasePromotions = firebaseDataBase.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}

