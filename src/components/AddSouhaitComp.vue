/* eslint-disable no-tabs */
<template>
  <div class="add">
    <div class="fleche">
      <router-link to="/souhaits"><i class="fas fa-arrow-left"></i></router-link>
    </div>
    <h1>Ajouter un souhait</h1>
    <label class="spacing">Titre</label>
    <input v-model="titre" type="text">
    <label class="spacing">Auteur</label>
    <input v-model="auteur" type="text">
    <label class="spacing">Date de parution</label>
    <input v-model="dateParution" type="date">
    <label class="spacing">Couverture</label>
    <input name="couverture" type="file" @change="onFileSelected()">
    <label class="spacing">Categorie(s)</label>
    <div class="row">
      <div class="check col-6 col-md-4 col-xl-3" v-for="categorie in categories" :key="categorie.id">
        <input type="checkbox" :id="categorie.id" :name="categorie.id" v-model="checkedCategories" :value="categorie.name">
        <label :for="categorie.id">{{categorie.name}}</label>
      </div>
    </div>
    <button class="btn btn-dark" type="submit" @click="addSouhait()">Ajouter</button>
  </div>
</template>

<script>
import { db, storage } from '../firebase/db'
export default {
  name: 'AddSouhaitComp',
  data () {
    return {
      titre: '',
      auteur: '',
      dateParution: new Date(),
      cover: null,
      upload: 0,
      categories: [
        { id: '1', name: 'Drame' },
        { id: '2', name: 'Policier' },
        { id: '3', name: 'Science-fiction' },
        { id: '4', name: 'Fantasy' },
        { id: '5', name: 'Dystopie' },
        { id: '6', name: 'Psychologie' }
      ],
      checkedCategories: []
    }
  },
  methods: {
    onFileSelected () {
      this.cover = event.target.files[0]
    },
    addSouhait () {
      const storageRef = storage.ref().child('images/' + this.cover.name)
      const task = storageRef.put(this.cover)
      task.on('state_change', snapshot => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        this.upload = percentage
      }, error => { console.log(error.message) },
      () => {
        this.upload = 100
        task.snapshot.ref.getDownloadURL().then((url) => {
          db.collection('Wishes').add({
            title: this.titre,
            author: this.auteur,
            publication: new Date(this.dateParution),
            cover: url,
            categories: this.checkedCategories
          }).then(() => {
            this.$router.push('Souhaits')
          })
        })
      })
    }
  }
}
</script>

<style>
 .add{
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-right: 20%;
  }
  .spacing {
    font-size: 120%;
    margin-top: 5%;
    margin-bottom: 1%;
  }
  .button {
    margin-top: 20px;
  }
  .btn {
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .radio, .check, .fleche {
      text-align: left;
  }
  @media (max-width: 575px) {
    .add {
        margin-left: 5%;
        margin-right: 5%;
    }
}
</style>