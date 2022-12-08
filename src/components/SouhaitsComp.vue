<template>
<div>
  <h1>Souhaits</h1>
    <button class="btn btn-dark" type="submit" @click="$router.push('AddSouhait')">Ajouter un livre aux souhaits</button>
    <div class="row">
        <div class="col-3" v-for="image in images" :key="image.id">
          <router-link :to="{name:'Souhait', params: { id: image.id }}"><img class="img" :src="image.url" :alt="image.alt" /></router-link>
        </div>
    </div>
</div>
</template>

<script>
import { db } from '../firebase/db'
require('../firebase/db.js')
export default {
  data () {
    return {
      images: []
    }
  },
  methods: {
    readData () {
      db.collection('Wishes')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.images.push({ id: doc.id, url: doc.data().cover, alt: doc.data().title })
          })
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
        })
    }
  },
  mounted () {
    this.readData()
  }
}
</script>

<style>
.img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 4px;
  margin: 4px;
  height: 256px;
}
.img:hover {
  box-shadow: 0 0 4px 2px rgba(0, 140, 186, 0.5);
}
@media only screen and (max-width: 900px){
  .img {
    height: 128px;
  }
}

@media only screen and (max-width: 480px){
  .img {
    height: 96px;
  }
}

.btn {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>