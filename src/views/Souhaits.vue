<template>
  <div class="souhaits">
    <SouhaitsComp msg="Liste des souhaits"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SouhaitsComp from '@/components/SouhaitsComp.vue'

export default {
  name: 'Souhaits',
  components: {
    SouhaitsComp
  }
}
</script>