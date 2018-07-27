<template>
  <div>
    <ul id="accountDropdown" class="dropdown-content">
      <li><a href="#">Add Post</a></li>
      <li><a v-on:click.prevent="logout">Logout</a></li>
    </ul>
    <nav class="nav-wrapper indigo lighten-1">
      <div class="container">
        <a href="/" class="brand-logo">AndrewR</a>
        <a href="#" class="sidenav-trigger" data-target="mobile-links">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li v-bind:class="{ active: activePage === 'about'}">
            <a href="/about"><i class="material-icons left">person_pin</i>About Me</a>
          </li>
          <li v-bind:class="{ active: activePage === 'projects'}">
            <a href="/projects"><i class="material-icons left">developer_board</i>Projects</a>
          </li>
          <li v-bind:class="{ active: activePage === 'blog'}">
            <a href="/blog"><i class="material-icons left">library_books</i>
              Blog
              <span v-if="blogNotifications.isNewBlog" class="badge blue lighten-4 black-text new">
                {{blogNotifications.count}}
              </span>
            </a>
          </li>
          <li v-if="!this.signedIn" v-bind:class="{ active: activePage === 'login'}">
            <a href="/login"><i class="material-icons left">exit_to_app</i>Sign In</a>
          </li>
          <li v-else v-bind:class="{ active: activePage === 'account'}">
            <a href="/account" class="dropdown-trigger" data-target="accountDropdown"><i class="material-icons left">account_circle</i>My Account</a>
          </li>
        </ul>
      </div>
    </nav>
    <ul id="mobile-links" class="sidenav">
      <li v-bind:class="{ active: activePage === ''}">
        <a href="/"><i class="material-icons right">home</i>Home</a>
      </li>
      <li v-bind:class="{ active: activePage === 'about'}">
        <a href="/about"><i class="material-icons right">person_pin</i>About Me</a>
      </li>
      <li v-bind:class="{ active: activePage === 'projects'}">
        <a href="/projects"><i class="material-icons right">developer_board</i>Projects</a>
      </li>
      <li v-bind:class="{ active: activePage === 'blog'}">
        <a href="/blog"><i class="material-icons right">library_books</i>Blog</a>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  data() {
    return {
      signedIn: null,
      blogNotifications: {
        isNewBlog: false,
        count: 0
      },
      activePage: ''
    };
  },
  components: {},
  methods: {
    getPath() {
      return this.$route.path.slice(1);
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('Firebase signout successful.');
          this.refreshUser();
        })
        .catch(error => {
          console.log(error);
        });
    },
    refreshUser() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) this.setSignIn(true);
        else this.setSignIn(false);
      });
    },
    setSignIn(isSignedIn) {
      this.signedIn = isSignedIn;
    }
  },
  created() {
    this.activePage = this.getPath();
    this.refreshUser();
  },
  updated() {
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown({ hover: true, coverTrigger: false });
  }
};
</script>

<style scoped>
nav .container ul li a i {
  position: relative;
  top: 5px;
}
</style>
