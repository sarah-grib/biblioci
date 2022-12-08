<template>
  <div class="livre">
    <LivresComp msg="Liste des entrées"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LivresComp from '@/components/LivresComp.vue'

export default {
  name: 'Livres',
  components: {
    LivresComp
  }
}
</script>