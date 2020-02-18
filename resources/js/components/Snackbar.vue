<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="visible"
      :color="color"
    >
      {{ text }}
      <v-btn
        text
        @click="close"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    color() {
      return this.$store.state.snackbar.color;
    },
    visible() {
      return this.$store.state.snackbar.visible;
    },
    text() {
      return this.$store.state.snackbar.text;
    }
  },
  methods: {
    close() {
      this.$store.commit('snackbar/close');
    }
  }
}
</script>
