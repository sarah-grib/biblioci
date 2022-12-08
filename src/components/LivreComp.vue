<template>
  <div class="detail">
    <div class="fleche">
      <router-link
        v-if="$routerHistory.hasPrevious()"
        :to="{ path: $routerHistory.previous().path }"
      >
        <i class="fas fa-arrow-left"></i>
      </router-link>
    </div>
    <h1>{{ title }}</h1>
    <h2>{{ author }}</h2>
    <label class="bigtxt">Paru le {{ publication }}</label>
    <img class="grand" :src="cover" :alt="title" />
    <label class="bigtxt">Categorie(s) : </label>
    <ul>
      <li v-for="categorie in categories" :key="categorie.ID">
        <label class="bigtxt" :for="categorie.ID">{{ categorie }}</label>
      </li>
    </ul>
    <label v-if="purchased === true" class="bigtxt"
      >Acheté le {{ purchase }}</label
    >
    <label v-else class="bigtxt"
      >Emprunté le {{ purchase }} à {{ owner }}</label
    >
    <div class="note">
      <label class="bigtxt">Note :</label>
      <b-form-rating
        v-model="rating"
        color="#000000"
        show-value
        no-border
        @change="rateBook()"
      ></b-form-rating>
    </div>
    <template v-if="borrowed === true">
      <label class="bigtxt">Prêté le {{ borrowDate }} à {{ borrower }}</label>
      <button type="submit" class="btn btn-dark" @click="unborrowBook()">
        Livre rendu
      </button>
    </template>
    <template v-else>
      <h3>Emplacement</h3>
      <label class="bigtxt">Pièce : {{ room }}</label>
      <label class="bigtxt">Etagère : {{ column }}</label>
      <label class="bigtxt">Rangée : {{ row }}</label>
      <b-button v-b-modal="'borrow-modal'" class="btn btn-dark"
        >Prêter le livre</b-button
      >
      <b-button v-b-modal="'delete-modal'" class="btn btn-danger"
        >Supprimer le livre</b-button
      >
    </template>

    <!-- Modal de prêt -->
    <b-modal id="borrow-modal">
      <template #modal-title>Prêt du livre</template>
      <div class="d-block text-center">
        <div>
          <label>Emprunteur </label>
          <input v-model="borrower" type="text" />
        </div>
        <div>
          <label>Date d'emprunt </label>
          <input v-model="borrowDate" type="date" />
        </div>
      </div>
      <template #modal-footer>
        <b-button
          class="btn btn-secondary"
          @click="$bvModal.hide('borrow-modal')"
          >Annuler</b-button
        >
        <b-button class="btn btn-dark" @click="borrowBook()">Prêter</b-button>
      </template>
    </b-modal>

    <!-- Modal de suppression -->
    <b-modal id="delete-modal">
      <template #modal-title>Suppression du livre</template>
      <div>
        <p>Êtes-vous sûr(e) de vouloir supprimer ce livre de votre bibliothèque ?</p>
      </div>
      <template #modal-footer>
        <b-button
          class="btn btn-secondary"
          @click="$bvModal.hide('delete-modal')"
          >Annuler</b-button
        >
        <b-button class="btn btn-danger" @click="deleteBook()">Supprimer</b-button>
      </template>
    </b-modal>
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
      categories: [],
      purchased: true,
      purchase: '',
      borrowed: false,
      owner: '',
      rating: 0,
      room: '',
      column: '',
      row: '',
      borrower: '',
      borrowDate: ''
    }
  },
  methods: {
    formatDate (timestamp) {
      let date = new Date(timestamp.seconds * 1000)
      return moment(String(date)).format('DD/MM/YYYY')
    },
    rateBook () {
      db.collection('Books')
        .doc(this.$route.params.id)
        .update({
          rating: this.rating
        })
    },
    borrowBook () {
      this.borrowed = true
      db.collection('Books')
        .doc(this.$route.params.id)
        .update({
          borrowed: this.borrowed,
          borrower: this.borrower,
          borrowDate: new Date(this.borrowDate)
        })
      this.$bvModal.hide('borrow-modal')
    },
    unborrowBook () {
      this.borrowed = false
      db.collection('Books')
        .doc(this.$route.params.id)
        .update({
          borrowed: this.borrowed,
          borrower: '',
          borrowDate: new Date()
        })
    },
    deleteBook () {
      db.collection('Books')
        .doc(this.$route.params.id)
        .delete().then(() => {
          this.$router.push('../livres')
        })
    },
    readData () {
      db.collection('Books')
        .doc(this.$route.params.id)
        .get()
        .then(doc => {
          if (doc.exists) {
            this.title = doc.data().title
            this.author = doc.data().author
            this.publication = doc.data().publication ? this.formatDate(doc.data().publication) : ''
            this.cover = doc.data().cover
            this.categories = doc.data().categories
            this.purchased = doc.data().purchased
            this.purchase = this.formatDate(doc.data().purchase)
            this.borrowed = doc.data().borrowed
            this.borrower = doc.data().borrower
            this.borrowDate = doc.data().borrowDate ? this.formatDate(doc.data().borrowDate) : ''
            this.owner = doc.data().owner
            this.rating = doc.data().rating
            this.room = doc.data().room
            this.column = doc.data().column
            this.row = doc.data().row
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
.bigtxt {
  font-size: 120%;
}
.button {
  margin-top: 20px;
}
.btn {
  margin-top: 3%;
  margin-bottom: 3%;
}
.fleche {
  text-align: left;
}
.note {
  margin-left: 25%;
  margin-right: 25%;
}
@media (max-width: 575px) {
  .detail {
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>
