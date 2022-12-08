<template>
  <div class="classement">
    <ClassementComp msg="Classement des livres"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ClassementComp from '@/components/ClassementComp.vue'

export default {
  name: 'classement',
  components: {
    ClassementComp
  }
}
</script>