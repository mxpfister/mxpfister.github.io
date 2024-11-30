<script setup>
import { ref } from 'vue'
import SkillBlock from './components/SkillBlock.vue';
import Timeline from './components/Timeline.vue';

const skills = ref(
  [
    { name: 'HTML', imgUrl: 'images/skill-logos/html.svg', alt: 'HTML Logo', color: '#ffa02e', grading: 9.5 },
    { name: 'CSS', imgUrl: 'images/skill-logos/css.svg', alt: 'CSS Logo', color: '#2965F1', grading: 9 },
    { name: 'JavaScript', imgUrl: 'images/skill-logos/js.svg', alt: 'JavaScript Logo', color: '#ffd600', grading: 7.5 },
    { name: 'PHP', imgUrl: 'images/skill-logos/php.svg', alt: 'PHP Logo', color: '#927ba9', grading: 8 },
    { name: 'Python', imgUrl: 'images/skill-logos/python.svg', alt: 'Python Logo', color: '#0295ec', grading: 6.5 },
  ]
)

</script>

<template>
  <section id="welcome">
    <div class="container">
      <div class="text-wrapper">
        <p class="catch-phrase">Hi, ich bin <br><span class="bold highlight">Max</span></p>
      </div>
      <div class="media-wrapper">
        <img src="./assets/images/me.png">
      </div>
      <div class="text-wrapper">
        <p style="font-size: 35px; padding-left: 45px;"><span class="highlight">Web-Entwickler </span>mit Verständnis
          für Business und E-Commerce</p>
      </div>
    </div>
  </section>
  <section id="about-me">
    <div class="container">
      <div id="spinning-text" class="media-wrapper"></div>
      <div class="text-wrapper">
        <h2>Über mich</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </section>
  <section id="skills">
    <div class="container">
      <h2>Skills</h2>
      <div class="skill-block-wrapper">
        <SkillBlock v-for="skill in skills" :key="skill.imgUrl" :skill-name="skill.name" :image-url="skill.imgUrl"
          :image-alt="skill.alt" :color="skill.color" :grading="skill.grading"/>
      </div>
    </div>
  </section>
  <section id="cv">
    <div class="container">
      <h2>Lebenslauf</h2>
      <Timeline />
    </div>
  </section>
  <section id="socials" aria-labelledby="socials-heading">
    <h2 id="socials-heading" class="visually-hidden">Soziale Netzwerke</h2>
    <div class="socials-wrapper">
      <a href="https://www.linkedin.com/in/max-pfister-a6a363201/" aria-label="LinkedIn Profil von Max Pfister">
        <img src="./assets/images/social-logos/linkedIn.svg" alt="LinkedIn-Logo">
      </a>
      <a href="https://github.com/mxpfister" aria-label="GitHub Profil von Max Pfister">
        <img src="./assets/images/social-logos/github-mark-white.svg" alt="GitHub-Logo">
      </a>
    </div>
  </section>
  <section id=stars></section>
</template>

<style>
section {
  padding: 20px 0;
  background-color: #242526;
}

#welcome {
  padding: 0;
}

section#welcome,
section#skills {
  background-color: #595959 !important;
}

section .container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

section#skills .container {
  display: block;
}

.text-wrapper {
  width: 50%;
}

.media-wrapper {
  width: 50%;
}

#about-me .text-wrapper {
  width: 70%;
}

#about-me .media-wrapper {
  width: 30%;
}

#about-me .media-wrapper img {
  height: fit-content;
  margin: auto;
}

.media-wrapper img {
  max-width: 100%;
  height: auto;
}

.catch-phrase {
  font-size: 50px;
  line-height: 90px;
}

.skill-block-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

#cv .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#cv h2 {
  align-self: flex-start;
}

.socials-wrapper {
  width: fit-content;
  margin: auto;
}

.socials-wrapper img {
  max-height: 60px;
  width: auto;
}

.socials-wrapper a {
  display: inline-block;
  margin: 0 20px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
