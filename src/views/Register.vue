<template>
  <div class="register">
    <RegisterComp msg="Liste des entrées"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterComp from '../components/RegisterComp'

export default {
  name: 'Register',
  components: {
    RegisterComp

  }
}
</script>
