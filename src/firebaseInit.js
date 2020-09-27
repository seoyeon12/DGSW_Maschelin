import firebase from 'firebase'
import 'firebase/firestore'
// import firebaseConfig from './firebaseConfig'
var firebaseConfig = {
  apiKey: 'AIzaSyACerQzDBx0XSiq8fH62yp68TH6yWeapno',
  authDomain: 'dgsw-msl.firebaseapp.com',
  databaseURL: 'https://dgsw-msl.firebaseio.com',
  projectId: 'dgsw-msl',
  storageBucket: 'dgsw-msl.appspot.com',
  messagingSenderId: '582511727983',
  appId: '1:582511727983:web:9af8ffe5fc4369ffef849a',
  measurementId: 'G-7W35S0WBJE'
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
// firebase.analytics()
export default firebaseApp.firestore()
// export default firebase.initializeApp(firebaseConfig)
