<template>
    <div>
        <h1>Historique</h1>
        <br>
        <div class="row" v-for="image in images" :key="image.id">
        <div class="col-6" :id="image.id">
            <h5> {{image.alt}} </h5>
        </div>
        <b-tooltip :target="image.id" noninteractive triggers="hover">
            <b-img :src="image.url" fluid alt="Responsive image"></b-img>
        </b-tooltip>
        <div class="col-3">
            <h5> {{image.dateAchat}} </h5>
        </div>
    </div>
    </div>
</template>

<script>
import moment from 'moment'
import { db } from '../firebase/db'
export default {
  data () {
    return {
      images: []
    }
  },
  methods: {
    formatDate (timestamp) {
      let date = new Date(timestamp.seconds * 1000)
      return moment(String(date)).format('DD/MM/YYYY')
    },
    readData () {
      db.collection('Books')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.images.push({ id: doc.id, url: doc.data().cover, alt: doc.data().title, dateAchat: this.formatDate(doc.data().purchase) })
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
  .grand {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 4px;
  margin: 4px;
  max-width: 75%;
  height: auto;
}
</style>