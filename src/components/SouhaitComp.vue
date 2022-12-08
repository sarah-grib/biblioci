<template>
    <div class="detail">
        <div class="fleche">
        <!-- <router-link to="/souhaits"><i class="fas fa-arrow-left"></i></router-link> -->
        <router-link v-if="$routerHistory.hasPrevious()" :to="{ path: $routerHistory.previous().path }">
          <i class="fas fa-arrow-left"></i>
        </router-link>
    </div>
    <h1>{{ title }}</h1>
    <h2>{{ author }}</h2>
    <label class="spacing">Paru le {{ publication }}</label>
    <img class="grand" :src="cover" :alt="title" />
    <label class="spacing">Categorie(s) : </label>
    <ul>
      <li v-for="categorie in categories" :key="categorie.ID">
        <label :for="categorie.ID">{{ categorie }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import { db } from '../firebase/db'
require('../firebase/db.js')
export default {
  data () {
    return {
      title: '',
      author: '',
      publication: '',
      cover: null,
      categories: []
    }
  },
  methods: {
    formatDate (timestamp) {
      let date = new Date(timestamp.seconds * 1000)
      return moment(String(date)).format('DD/MM/YYYY')
    },
    readData () {
      db.collection('Wishes').doc(this.$route.params.id)
        .get().then((doc) => {
          if (doc.exists) {
            this.title = doc.data().title
            this.author = doc.data().author
            this.publication = this.formatDate(doc.data().publication)
            this.cover = doc.data().cover
            this.categories = doc.data().categories
          } else {
            console.log('No such document!')
          }
        })
    }
  },
  created () {
    this.readData()
  }
}
</script>

<style>
.grand {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 4px;
  margin: auto;
  max-width: 25%;
  height: auto;
}
.detail {
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
}
.spacing {
  margin-top: 1%;
  margin-bottom: 1%;
}
.fleche {
  text-align: left;
}
@media (max-width: 575px) {
  .detail {
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>