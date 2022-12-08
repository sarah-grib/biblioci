<template>
  <div>
    <h1>Classement des livres</h1>
    <div class="row">
      <div class="col">
        <b-button class="btn btn-dark" @click="selectCategorie(categories[0].name)">
          {{ categories[0].name }}
        </b-button>
        <b-button class="btn btn-dark" @click="selectCategorie(categories[1].name)">
          {{ categories[1].name }}
        </b-button>
        <b-button class="btn btn-dark" @click="selectCategorie(categories[2].name)">
          {{ categories[2].name }}
        </b-button>
        <b-button class="btn btn-dark" @click="selectCategorie(categories[3].name)">
          {{ categories[3].name }}
        </b-button>
        <b-button class="btn btn-dark" @click="selectCategorie(categories[4].name)">
          {{ categories[4].name }}
        </b-button>
        <b-button class="btn btn-dark" @click="selectCategorie(categories[5].name)">
          {{ categories[5].name }}
        </b-button>
      </div>
    </div>
    <h2>{{ selectedCategorie }}</h2>
      <b-collapse visible class="mt-2">
        <div>
          <div v-for="image in images" :key="image.id">
            <div class="row" v-if="image.categories.includes(selectedCategorie)">
              <div class="col-1"></div>
              <div class="col-4">
                <router-link :to="{path:'livre/'+ image.id}"><img class="mini" :src="image.url" :alt="image.alt" /></router-link>
              </div>
              <div class="col-3 description">
                <h5>{{ image.alt }}</h5>
                <b-form-rating
                  v-model="image.rating"
                  color="#000000"
                  show-value
                  readonly
                  no-border
                ></b-form-rating>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
      </b-collapse>
  </div>
</template>

<script>
import { db } from '../firebase/db'
export default {
  name: 'ClassementComp',
  data () {
    return {
      selectedCategorie: '',
      categories: [
        { name: 'Drame' },
        { name: 'Policier' },
        { name: 'Science-fiction' },
        { name: 'Fantasy' },
        { name: 'Dystopie' },
        { name: 'Psychologie' }
      ],
      images: []
    }
  },
  methods: {
    selectCategorie (categorie) {
      this.selectedCategorie = categorie
    },
    readData () {
      db.collection('Books')
        .orderBy('rating', 'desc')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.images.push({
              id: doc.id,
              url: doc.data().cover,
              alt: doc.data().title,
              categories: doc.data().categories,
              rating: doc.data().rating
            })
          })
        })
        .catch(error => {
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
.mini {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  margin: 5px;
  margin-right: 20px;
  max-width: 30%;
  height: auto;
  float: right;
}
.mini:hover {
  box-shadow: 0 0 4px 2px rgba(0, 140, 186, 0.5);
}
.description {
  text-align: left;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}

@media (max-width: 575px) {
  .mini {
    max-width: 100% !important;
  }
}

.btn {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
