<template>
  <div>
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
          <li>
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
export default {
  data() {
    return {
      blogNotifications: {
        isNewBlog: false,
        count: 0
      },
      activePage: ''
    };
  },
  components: {},
  methods: {
    setActivePage(newActive) {
      this.activePage = newActive;
    },
    getPath() {
      return this.$route.path.slice(1);
    }
  },
  created() {
    this.activePage = this.getPath();
  }
};

$(document).ready(() => {
  $('.sidenav').sidenav();
});
</script>

<style scoped>
nav .container ul li a i {
  position: relative;
  top: 5px;
}
</style>
