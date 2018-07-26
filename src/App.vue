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

export default {
  name: 'app',
  data() {
    return {
      currentYear: null
    };
  },
  components: {
    'app-navigation': Navigation,
    blogList: BlogList,
    projectList: ProjectList,
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

<style>
</style>
