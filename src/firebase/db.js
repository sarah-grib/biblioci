import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBasRXDrQlkrrZGa3IDNyxHJTV7kbUFh98',
  authDomain: 'biblioci-69c98.firebaseapp.com',
  projectId: 'biblioci-69c98',
  storageBucket: 'biblioci-69c98.appspot.com',
  messagingSenderId: '40771569608',
  appId: '1:40771569608:web:26f1b6f416c36b498fe2fd'
}
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const storage = firebase.storage()