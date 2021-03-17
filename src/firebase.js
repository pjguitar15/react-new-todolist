import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBFDl_TLyNVmZCnZJHeVarKW7L05G-47fI",
  authDomain: "new-todo-list-829f1.firebaseapp.com",
  projectId: "new-todo-list-829f1",
  storageBucket: "new-todo-list-829f1.appspot.com",
  messagingSenderId: "826900855294",
  appId: "1:826900855294:web:7cdd44da4fd3837ccea8af"
};

firebase.initializeApp(firebaseConfig)

export default firebase