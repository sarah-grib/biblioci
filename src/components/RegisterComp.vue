<template>
  <div class="register">
    <label class="spacing">Adresse mail</label>
    <input name="email" type="text" v-model="email" />
    <label class="spacing"> Mot de passe</label>
    <input name="password" type="password" v-model="password" />
    <label class="spacing">Confirmer le mot de passe</label>
    <input name="password" type="password" v-model="confirmPassword" />
    <span class="spacing" v-if="password !== confirmPassword"
      >Le mot de passe ne correspond pas à celui introduit ci-dessus</span
    >
    <button class="btn btn-dark" type="submit" @click="connect()">
      S'inscrire
    </button>
  </div>
</template>

<script>
import firebase from 'firebase'
require('../firebase/db.js')
export default {
  name: 'RegisterComp',

  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    connect (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.confirmPassword)
        .catch((error) => {
          var errorCode = error.code
          var errorMessage = error.message
          console.log('error ' + errorCode + ': ' + errorMessage)
        })
    }
  }
}
</script>

<style>
.register {
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
