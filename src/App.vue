<template>
  <div>
    <div class="container-fluid overflow-hidden">
      <div class="row vh-100 overflow-auto">
        <div
          class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 laCouleur d-flex sticky-top"
          id="row"
        >
          <div
            class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white"
          >
            <!--
            <router-link to="/login">
              <a
                class="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span class="fs-5"
                  >B<span class="d-none d-sm-inline">ibliothèque</span></span
                >
              </a>
            </router-link>
            -->
            <p>BIBLIOTHÈQUE PERSONNELLE</p>
            <ul
              class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item">
                <router-link
                  to="/livres"
                  class="nav-item nav-link px-sm-0 px-2"
                >
                  <a>
                    <i class="fas fa-book"></i>
                    <span class="ms-1 d-none d-sm-inline text-white"
                      >Bibliothèque</span
                    >
                  </a>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/classement"
                  class="nav-item nav-link px-sm-0 px-2"
                >
                  <a>
                    <i class="fas fa-medal"></i>
                    <span class="ms-1 d-none d-sm-inline text-white"
                      >Classement</span
                    >
                  </a>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/historique"
                  class="nav-item nav-link px-sm-0 px-2"
                >
                  <a>
                    <i class="fas fa-history"></i>
                    <span class="ms-1 d-none d-sm-inline text-white"
                      >Historique</span
                    >
                  </a>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pretEmprunt"
                  class="nav-item nav-link px-sm-0 px-2"
                >
                  <a>
                    <i class="fas fa-people-arrows"></i>
                    <span class="ms-1 d-none d-sm-inline text-white"
                      >Prêt ou emprunt</span
                    >
                  </a>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/souhaits"
                  class="nav-item nav-link px-sm-0 px-2"
                >
                  <a>
                    <i class="fas fa-bookmark"></i>
                    <span class="ms-1 d-none d-sm-inline text-white"
                      >Souhaits</span
                    >
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div id="app" class="col d-flex flex-column h-sm-100">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a:hover {
  color: grey;
  border-radius: 0.5rem;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: orangered;
  border-radius: 0.5rem;
}
.laCouleur {
  background-color: rgb(44, 44, 44);
}
@media (max-width: 575px) {
  #row {
    height: 50px !important;
  }
}
</style>
