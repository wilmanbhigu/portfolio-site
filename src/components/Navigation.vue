<template>
  <div style="z-index: 999">
    <ul id="accountDropdown" class="dropdown-content">
      <li><router-link v-bind:to="'/AddPost'">Add Post</router-link></li>
      <li><a v-on:click.prevent="logout">Logout</a></li>
    </ul>
    <nav id="nav-wrapper" class="nav-wrapper orange darken-2">
      <div class="container">
        <router-link v-bind:to="'/'" v-on:click.native="updateActivePage" class="brand-logo"><span id="logo-text">AndrewR</span></router-link>
        <a href="#" class="sidenav-trigger" data-target="mobile-links">
          <i class="material-icons">menu</i>
        </a>
        <ul class="right hide-on-med-and-down">
          <li v-bind:class="{ active: activePage === 'about'}">
            <router-link v-bind:to="'/about'" v-on:click.native="updateActivePage"><i class="material-icons left">assignment_ind</i>About Me</router-link>
          </li>
          <li v-bind:class="{ active: activePage === 'projects'}">
            <router-link v-bind:to="'/projects'" v-on:click.native="updateActivePage"><i class="material-icons left">developer_board</i>Projects</router-link>
          </li>
          <li v-bind:class="{ active: activePage === 'blog'}">
            <router-link v-bind:to="'/blog'" v-on:click.native="updateActivePage"><i class="material-icons left">library_books</i>
              Blog
              <span v-if="blogNotifications.isNewBlog" class="badge blue lighten-4 black-text new">
                {{blogNotifications.count}}
              </span>
            </router-link>
          </li>
          <li v-if="isAuthenticated()" v-bind:class="{ active: activePage === 'login'}">
            <router-link v-bind:to="'/login'" v-on:click.native="updateActivePage"><i class="material-icons left">lock_open</i>Sign In</router-link>
          </li>
          <li v-else v-bind:class="{ active: activePage === 'account'}">
            <router-link v-bind:to="'/account'" v-on:click.native="updateActivePage" class="dropdown-trigger" data-target="accountDropdown"><i class="material-icons left">account_circle</i>My Account</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul id="mobile-links" class="sidenav">
      <li v-bind:class="{ active: activePage === ''}">
        <router-link class="sidenav_close" v-bind:to="'/'" v-on:click.native="updateActivePage"><i class="material-icons right">home</i>Home</router-link>
      </li>
      <li v-bind:class="{ active: activePage === 'about'}">
        <router-link class="sidenav_close" v-bind:to="'/about'" v-on:click.native="updateActivePage"><i class="material-icons right">assignment_ind</i>About Me</router-link>
      </li>
      <li v-bind:class="{ active: activePage === 'projects'}">
        <router-link class="sidenav_close" v-bind:to="'/projects'" v-on:click.native="updateActivePage"><i class="material-icons right">developer_board</i>Projects</router-link>
      </li>
      <li v-bind:class="{ active: activePage === 'blog'}">
        <router-link class="sidenav_close" v-bind:to="'/blog'" v-on:click.native="updateActivePage"><i class="material-icons right">library_books</i>Blog</router-link>
      </li>
      <li v-if="isAuthenticated()" v-bind:class="{ active: activePage === 'login'}">
        <router-link class="sidenav_close" v-bind:to="'/login'" v-on:click.native="updateActivePage"><i class="material-icons right">lock_open</i>Sign In</router-link>
      </li>
      <li v-else>
        <router-link class="sidenav_close" v-bind:to="'/account'" v-on:click.native="updateActivePage"><i class="material-icons right">account_circle</i>My Account</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
export default {
  data() {
    return {
      blogNotifications: {
        isNewBlog: false,
        count: 0
      },
      activePage: '',
      homePageBackground: ['transparent'],
      generalBackground: ['orange', 'darken-2']
    };
  },
  components: {},
  methods: {
    getPath() {
      return this.$route.path.slice(1);
    },
    logout() {
      firebase.auth().signOut();
    },
    updateActivePage() {
      this.activePage = this.getPath();
      console.log(this.activePage);
      this.updateNavColor();
    },
    updateNavColor() {
      let navBar = $('#nav-wrapper');
      navBar.removeClass();
      navBar.addClass('nav-wrapper');
      if (this.$route.name === 'home') {
        for (let attr of this.homePageBackground) {
          navBar.addClass(attr);
        }
      } else {
        for (let attr of this.generalBackground) {
          navBar.addClass(attr);
        }
      }
    },
    isAuthenticated() {
      return this.$firebaseUser != null;
    }
  },
  beforeMount() {
    this.updateActivePage();
  },
  updated() {
    this.updateNavColor();
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
#logo-text {
  font-family: 'Lobster', 'cursive';
  font-size: 2.5rem;
}
</style>
