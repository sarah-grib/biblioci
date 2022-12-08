<template>
  <div class="addlivre">
    <AddLivreComp msg="Liste des entrées"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddLivreComp from '@/components/AddLivreComp.vue'

export default {
  name: 'addLivre',
  components: {
    AddLivreComp
  }
}
</script>