<template>
  <div v-if="isLoaded" class="container">
      <a v-if="this.id != null" v-bind:href="this.parent.route" class="btn waves-effect waves-light right">
        <i class="material-icons left">arrow_back</i>
        Back to {{this.parent.name}}
      </a>
    <h3>{{article.title}}</h3>
    <h5>{{article.created}}</h5>
    <article v-cloak v-html="article.content"></article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      article: null,
      isLoaded: false,
      parent: null,
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    };
  },
  components: {},
  methods: {
    createDate(input) {
      let date = new Date(input);
      return `${this.days[date.getDay()]}, ${date.getDate()} ${
        this.months[date.getMonth()]
      } ${date.getFullYear()}`;
    },
    getParent() {
      let childStartIndex = this.$route.path.lastIndexOf('/');
      let route = this.$route.path.slice(0, childStartIndex);
      let name = route != '/blog' ? route.slice(1) : 'posts';
      return {
        name: name,
        route: route
      };
    }
  },
  props: ['postId'],
  created() {
    this.$http
      .get(`${this.$baseUrl}/posts/${this.postId || this.id}.json`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.article = data;
        this.article.created = this.createDate(data.created);
        this.parent = this.getParent();
        this.isLoaded = true;
      });
  }
};
</script>

<style scoped>
</style>