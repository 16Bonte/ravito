import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCpdsGAiCkKQkwC_-Q9e1eePQk1xnK0HnA",
    authDomain: "ravito-f9d08.firebaseapp.com",
    databaseURL: "https://ravito-f9d08.firebaseio.com"
})

let base = Rebase.createClass(firebase.database())

export {firebaseApp}

export default base