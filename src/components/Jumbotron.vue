<template>
  <div id="jumbotron">
    <ul id="links" class="z-depth-2">
      <li><a href="https://dev.to/alrobilliard" target="_blank">DEV.to</a></li>
      <li><a href="https://linkedin.com/in/andrew-robilliard/" target="_blank">LinkedIn</a></li>
      <li><a href="https://github.com/alrobilliard" target="_blank">Github</a></li>
      <li><a href="https://twitter.com/ALRobilliard" target="_blank">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
#jumbotron {
  position: relative;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/andrewrobilliard-website.appspot.com/o/langs-beach.jpg?alt=media&token=50683c87-d7ff-4e95-a500-f86f037f0633');
  background-size: cover;
  background-position: 75% 0;
  height: 100vh;
  top: -56px;
  margin-bottom: -56px;
  width: auto;
}

@media only screen and (min-width: 601px) {
  #jumbotron {
    top: -64px;
    margin-bottom: -64px;
  }
}

#links {
  padding: 5px 0;
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 15%;
}
#links li {
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
#links li a {
  color: white;
  font-size: 1.2rem;
}
#links li a:hover {
  color: #cccccc !important;
  -webkit-transition: color 0.2s; /* Safari */
  transition: color 0.2s;
}
</style>
