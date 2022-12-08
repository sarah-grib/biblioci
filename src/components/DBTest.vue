<template>
  <div>
    <v-row>
      <v-col>
        <input type="text" v-model="newItem" placeholder="Nouveau livre" />
      </v-col>
      <v-col>
        <button v-on:click="addItem">Ajouter</button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { db } from '../firebase/db'
export default {
  data () {
    return {
      Books: [],
      newItem: ''
    }
  },
  methods: {
    addItem () {
      db.collection('Books').add({title: this.newItem})
      this.newItem = ''
    }
  }
}
</script>
