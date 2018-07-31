<template>
  <div id="jumbotron">
    <div id="title">
      <h2 class="white-text z-index-2">Andrew Robilliard</h2>
      <h4 class="orange-text text-darken-2">Full Stack Developer</h4>
    </div>
    <ul id="links">
      <li class="z-depth-2"><a href="https://dev.to/alrobilliard" target="_blank">DEV.to</a></li>
      <li class="z-depth-2"><a href="https://linkedin.com/in/andrew-robilliard/" target="_blank">LinkedIn</a></li>
      <li class="z-depth-2"><a href="https://github.com/alrobilliard" target="_blank">Github</a></li>
      <li class="z-depth-2"><a href="https://twitter.com/ALRobilliard" target="_blank">Twitter</a></li>
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

#title {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 50%;
}

#title h2,
#title h4 {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.3), -1px 1px rgba(0, 0, 0, 0.3),
    1px -1px rgba(0, 0, 0, 0.3), -1px -1px rgba(0, 0, 0, 0.3);
}

#title h4 {
  font-family: 'Merriweather', 'serif';
}

#links {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 15%;
}
#links li {
  display: inline-block;
  margin: 10px;
  border: 1px solid #ffffff;
  background: rgba(255, 255, 255, 0.1);
}
#links li:hover {
  background: rgba(255, 255, 255, 0.3);
  -webkit-transition: background 0.2s; /* Safari */
  transition: background 0.2s;
}
#links li a {
  min-width: 90px;
  display: inline-block;
  color: white;
  font-size: 1.2rem;
  padding: 10px;
}
</style>
