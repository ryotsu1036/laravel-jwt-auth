<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                    v-model="username"
                    :error-messages="errors.get('username')"
                    @keydown="errors.clear('username')"
                    label="Username"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    :error-messages="errors.get('password')"
                    @keydown="errors.clear('password')"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />

                  <v-card-actions>
                    <v-spacer />
                    <v-btn type="submit" color="primary">Login</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
class Errors {
  constructor() {
    this.errors = {};
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  record(errors) {
    this.errors = errors;
  }

  clear(field) {
    if (field) {
      delete this.errors[field];

      return;
    }

    this.errors = {};
  }
}

export default {
  props: {
    source: String,
  },
  data() {
    return {
      username: 'jiafeng',
      password: '12345678',
      errors: new Errors(),
    }
  },
  methods: {
    login() {
      this.$http
        .post('/auth/login', {
          username: this.username,
          password: this.password,
        })
        .then(response => {
          localStorage.setItem('laravel_token', response.data.access_token);
          this.username = '';
          this.password = '';
          this.$router.push({ path: '/admin' });
        })
        .catch(error => {
          this.errors.record(error.response.data.errors);
        });
    }
  }
}
</script>
