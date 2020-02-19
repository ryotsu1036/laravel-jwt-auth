<template>
  <div>
    <h2>About</h2>
    <Snackbar></Snackbar>
    <v-btn small @click="openSnackbar">Normal</v-btn>
  </div>
</template>

<script>
import Snackbar from '../../components/Snackbar';

export default {
  components: {
    Snackbar
  },
  methods: {
    openSnackbar() {
      this.$store.dispatch('snackbar/open', {
        text: '俏如來',
      })
    }
  }
}
</script>
