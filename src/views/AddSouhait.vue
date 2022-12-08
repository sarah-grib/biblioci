<template>
  <div class="addSouhait">
    <AddSouhaitComp msg="Liste des entrées"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddSouhaitComp from '@/components/AddSouhaitComp.vue'

export default {
  name: 'addSouhait',
  components: {
    AddSouhaitComp
  }
}
</script>