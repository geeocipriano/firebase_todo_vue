import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAR6aeMQFT8UmSsGUqmumApAH2lAGkQdtg",
    authDomain: "fir-tarefas.firebaseapp.com",
    projectId: "fir-tarefas",
    storageBucket: "fir-tarefas.appspot.com",
    messagingSenderId: "117619181802",
    appId: "1:117619181802:web:23038bde2c0215e155af93"
})


//Deixando firebase ser utilizado de forma global
//Criando um plugin $firebase
export default function install (Vue) {
    Object.defineProperty(Vue.prototype, '$firebase', {
        get(){
            return firebaseApp
        }
    })
}