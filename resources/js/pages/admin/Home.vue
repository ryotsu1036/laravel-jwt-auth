<template>
  <div>
    <h2>Home</h2>
    <p>{{ count }}</p>
    <p>
      <v-btn fab dark small color="primary" @click="decrement">
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>

      <v-btn fab dark small color="primary" @click="increment">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit('count/increment');
    },
    decrement() {
      this.$store.commit('count/decrement');
    }
  }
}
</script>
