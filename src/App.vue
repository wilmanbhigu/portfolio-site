<template>
  <div id="app-root">
    <header>
      <app-navigation></app-navigation>
    </header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <footer>
      <app-footer v-bind:year="currentYear"></app-footer>
    </footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import LandingBio from './components/LandingBio.vue';
import BlogList from './components/BlogList.vue';
import ProjectList from './components/ProjectList.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  data() {
    return {
      currentYear: null
    };
  },
  components: {
    'app-navigation': Navigation,
    'landing-bio': LandingBio,
    'blog-list': BlogList,
    'project-list': ProjectList,
    'app-footer': Footer
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
<style scoped>
#app-root {
  overflow-x: hidden;
}

main {
  min-height: calc(100vh - 76px);
}

@media only screen and (min-width: 601px) {
  main {
    min-height: calc(100vh - 84px);
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-active {
  transition: opacity 0.3s ease;
  opacity: 0;
}
</style>
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
