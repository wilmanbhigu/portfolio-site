<template>
  <div id="form-container" class="container white z-depth-2">
    <div class="row">
      <form v-on:submit.prevent v-if="!submitted" name="writeForm" class="col s12">
        <h3>Add a New Post</h3>
        <div class="row">
          <div class="input-field col s12">
            <input v-model.lazy="article.title" id="title" type="text" />
            <label for="title">Title</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <p>
              <label>
                <input v-model="article.type" name="group1" type="radio" class="with-gap" value="blog" checked/>
                <span>Blog Post</span>
              </label>
            </p>
            <p>
              <label>
                <input v-model="article.type" name="group1" type="radio" class="with-gap" value="project" />
                <span>Project</span>
              </label>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea name="textarea" v-model.lazy="article.content" id="textarea" class="materialize-textarea" />
            <label for="textarea">Content</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m2 offset-m8">
            <button class="btn waves-effect waves-light right orange darken-2" v-on:click="submitPost(false)">
              <i class="material-icons left">save</i>
              Save Draft
            </button>
          </div>
          <div class="col s12 m2">
            <button class="btn waves-effect waves-light right orange darken-2" v-on:click="submitPost(true)">
              <i class="material-icons left">publish</i>
              Publish Post
            </button>
          </div>
        </div>
        
      </form>
      <div v-if="submitted">
        <h3>Post added successfully</h3>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from './PostPreview.vue';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      article: {
        title: '',
        type: 'blog',
        content: '',
        author: 'Andrew Robilliard',
        published: null
      },
      isEdit: false,
      submitted: false
    };
  },
  components: {
    'post-preview': PostPreview
  },
  methods: {
    submitPost(publish) {
      this.article.published = publish;
      firebase
        .auth()
        .currentUser.getIdTokenResult(true)
        .then(idToken => {
          this.$http
            .post(
              `${this.$baseUrl}/projects.json?auth=${idToken.token}`,
              this.article
            )
            .then(data => {
              this.submitted = true;
            });
        });
    },
    routeOnSave() {
      let route = this.article.type === 'blog' ? '/posts' : '/projects';
      return route;
    }
  }
};
</script>

<style scoped>
#form-container {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
}

[type='radio']:checked + span:after,
[type='radio'].with-gap:checked + span:before,
[type='radio'].with-gap:checked + span:after {
  border: 2px solid #f57c00;
}

[type='radio']:checked + span:after,
[type='radio'].with-gap:checked + span:after {
  background-color: #f57c00;
}
</style>
