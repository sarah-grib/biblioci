<template>
  <div class="livre">
    <LivreComp msg="Détails du livre"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LivreComp from '@/components/LivreComp.vue'

export default {
  name: 'livre',
  components: {
    LivreComp
  }
}
</script>