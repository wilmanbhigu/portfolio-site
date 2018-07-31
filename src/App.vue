<template>
  <div id="app-root">
    <header>
      <app-navigation></app-navigation>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <app-footer v-bind:year="currentYear"></app-footer>
    </footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import BlogList from './components/BlogList.vue';
import ProjectList from './components/ProjectList.vue';
import Footer from './components/Footer.vue';
import SignIn from './components/SignIn.vue';

export default {
  name: 'app',
  data() {
    return {
      currentYear: null
    };
  },
  components: {
    'app-navigation': Navigation,
    'blog-list': BlogList,
    'project-list': ProjectList,
    'app-footer': Footer,
    'sign-in': SignIn
  },
  methods: {
    getCurrentYear() {
      let date = new Date();
      return date.getFullYear();
    }
  },
  created() {
    this.currentYear = this.getCurrentYear();
  }
};
</script>
<style>
/** 
  Controls styling for <a> tags within html fetched from Firebase
  Styling must be globally styled rather than scoped
**/
#fetched-article a {
  font-weight: 600;
}
#fetched-article a:hover {
  color: #01579b;
  -webkit-transition: color 0.2s; /* Safari */
  transition: color 0.2s;
}
/**
  ---------------------------------------------------------------
**/
</style>
