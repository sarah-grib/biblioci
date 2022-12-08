<template>
  <div class="login">
    <label class="spacing">Adresse mail</label>
    <input name="email" type="text" v-model="email" />
    <label class="spacing">Mot de passe</label>
    <input name="password" type="password" v-model="password" />
    <button class="btn btn-dark" type="submit" @click="connect()">
      Se connecter
    </button>
    <label class="spacing"
      >Vous n'avez pas de compte?
      <router-link to="/register">Inscrivez vous.</router-link></label
    >
  </div>
</template>

<script>
import firebase from 'firebase'
require('../firebase/db.js')
export default {
  name: 'LoginComp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    connect (e) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          console.log('error ' + errorCode + ': ' + errorMessage)
        })
    }
  }
}
</script>

<style>
.login {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%;
}
.spacing {
  margin-top: 1%;
  margin-bottom: 1%;
}
.button {
  margin-top: 20px;
}
.btn {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
