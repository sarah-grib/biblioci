<template>
  <div class="historique">
    <HistoriqueComp msg="Historique"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HistoriqueComp from '@/components/HistoriqueComp.vue'

export default {
  name: 'historique',
  components: {
    HistoriqueComp
  }
}
</script>