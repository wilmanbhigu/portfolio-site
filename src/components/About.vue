<template>
  <div class="container">
    <h3>.</h3>
    <div class="dashboard">
      <div class="header">
        <ul class="sub-nav">
          <li>
            <button
              v-bind:class="{ active: type === 'skills'}"
              id="skills"
              @click="type = 'skills'"
            >Skills</button>
          </li>
          <li>
            <button
              v-bind:class="{ active: type === 'experience'}"
              id="experience"
              @click="type = 'experience'"
            >Experience</button>
          </li>
          <li>
            <button
              v-bind:class="{ active: type === 'education'}"
              id="education"
              @click="type = 'education'"
            >Education</button>
          </li>
        </ul>
      </div>
      <div class="content">
        <skill-list v-if="type === 'skills'"/>
        <experience-list v-if="type === 'experience'"/>
        <education-list v-if="type === 'education'"/>
      </div>
    </div>
  </div>
</template>

<script>
import SkillList from "./SkillList";
import ExperienceList from "./ExperienceList";
import EducationList from "./EducationList";

export default {
  data() {
    return {
      type: "skills"
    };
  },
  methods: {},
  components: {
    "skill-list": SkillList,
    "experience-list": ExperienceList,
    "education-list": EducationList
  }
};
</script>

<style scoped>
.dashboard {
  margin-top: 3rem;
}
.header {
  width: 100%;
  border-bottom: 1px solid #999;
}

.sub-nav li {
  display: inline-block;
}

.sub-nav li button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
}

.sub-nav li button::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #f57c00;
  transition: width 0.3s;
}

.sub-nav li button:hover::after {
  width: 100%;
}

.sub-nav li button.active::after {
  width: 100%;
}
</style>