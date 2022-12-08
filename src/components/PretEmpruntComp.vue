<template>
  <div>
    <h1>Livres prétés ou empruntés</h1>
    <div>
      <!-- Via space separated string of IDs passed to directive value -->
      <b-button class="btn btn-dark" v-b-toggle="'collapse-pret'">
        <span class="when-open">Prêté <i class="fas fa-arrow-down"></i></span>
        <span class="when-closed">Prêté <i class="fas fa-arrow-right"></i></span>
      </b-button>
      <!-- Via array of string IDs passed to directive value -->
      <b-button class="btn btn-dark" v-b-toggle="'collapse-emprunt'">
        <span class="when-open"
          >Emprunté <i class="fas fa-arrow-down"></i
        ></span>
        <span class="when-closed"
          >Emprunté <i class="fas fa-arrow-right"></i
        ></span>
      </b-button>
      <!-- Elements to collapse -->
      <b-collapse visible id="collapse-pret" class="mt-2">
        <div>
          <div v-for="image in images" :key="image.id">
            <div class="row" v-if="image.prete===true">
              <div class="col-2"></div>
              <div class="col-4">
                <router-link :to="{path:'livre/'+ image.id}"><img class="mini" :src="image.url" :alt="image.alt" /></router-link>
              </div>
              <div class="col-4 description">
                <h5>{{ image.alt }}</h5>
                <h5>Prêté à {{image.emprunteur}} le {{image.datePret}}</h5>
              </div>
              <div class="col-2"></div>
            </div>
          </div>
        </div>
      </b-collapse>
      <b-collapse visible id="collapse-emprunt" class="mt-2">
        <div>
          <div v-for="image in images" :key="image.id">
            <div class="row" v-if="image.achete === false">
              <div class="col-2"></div>
              <div class="col-4">
                <router-link :to="{ path: 'livre/' + image.id }"
                  ><img class="mini" :src="image.url" :alt="image.alt"
                /></router-link>
              </div>
              <div class="col-4 description">
                <h5>{{ image.alt }}</h5>
                <h5>
                  Emprunté à {{ image.proprietaire }} le {{ image.dateAchat }}
                </h5>
              </div>
              <div class="col-2"></div>
            </div>
          </div>
        </div>
      </b-collapse>
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
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.images.push({
              id: doc.id,
              url: doc.data().cover,
              alt: doc.data().title,
              achete: doc.data().purchased,
              proprietaire: doc.data().owner,
              dateAchat: doc.data().purchase ? this.formatDate(doc.data().purchase) : '',
              prete: doc.data().borrowed,
              emprunteur: doc.data().borrower,
              datePret: doc.data().borrowDate ? this.formatDate(doc.data().borrowDate) : ''
            })
            console.log('push ', doc.data().title)
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
