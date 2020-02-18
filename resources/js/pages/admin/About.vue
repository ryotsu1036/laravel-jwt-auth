<template>
  <div>
    <h2>About</h2>
    <Snackbar></Snackbar>
    <v-btn small @click="showSnackbar">Normal</v-btn>
  </div>
</template>

<script>
import Snackbar from '../../components/Snackbar';

export default {
  components: {
    Snackbar
  },
  methods: {
    showSnackbar() {
      this.$store.dispatch('snackbar/showSnackbar', {
        text: '俏如來',
      })
    }
  }
}
</script>
