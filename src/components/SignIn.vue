<template>
  <center>
    <div class="container">
      <div class="row">
        <div id="loginForm" class="grey lighten-3 col s12 m6 l4 offset-m3 offset-l4 z-depth-1">
          <h5 class="orange-text text-accent-4">Sign in to Your Account</h5>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" v-model="email" />
              <label for="email">Email</label>
              <span class="helper-text" data-error="Invalid Format" data-success="Valid Format"></span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" v-model="password" />
              <label for="password">Password</label>
            </div>
          </div>
          <button class="btn waves-effect waves-light indigo lighten-1" type="submit" v-on:click="login">Sign In
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  </center>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  components: {},
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.replace('/');
        })
        .catch(function(error) {
          alert(`
          ${error.message}

          Error code:${error.code}`);
        });
    }
  }
};
</script>

<style scoped>
#loginForm {
  padding: 1rem;
  margin-top: 2rem;
}
</style>
