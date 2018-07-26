import AboutMe from './components/AboutMe.vue';
import ProjectList from './components/ProjectList.vue';
import BlogList from './components/BlogList.vue';
import Article from './components/Article.vue';

export default [
  { path: '/about', component: AboutMe },
  { path: '/projects', component: ProjectList },
  { path: '/blog', component: BlogList },
  { path: '/projects/:id', component: Article },
  { path: '/blog/:id', component: Article }
];
