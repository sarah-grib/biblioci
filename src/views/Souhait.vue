<template>
  <div class="souhait">
    <SouhaitComp msg="Détails du livre"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SouhaitComp from '@/components/SouhaitComp.vue'

export default {
  name: 'souhait',
  components: {
    SouhaitComp
  }
}
</script>