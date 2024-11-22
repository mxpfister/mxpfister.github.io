<script setup>
import { computed } from 'vue'

const props = defineProps(['skillName', 'imageUrl', 'imageAlt','grading', 'color']);
const imgSrc = computed(() => {
  return new URL(`../assets/${props.imageUrl}`, import.meta.url).href
})
</script>

<template>
    <div class="skill-block" :style="{ '--color': props.color}">
      <img :src="imgSrc" :alt="imageAlt">  
      <h3>{{ skillName }}</h3>
      <div class="grading">{{ grading }} / 10</div>
    </div>
</template>

<style setup>
.skill-block {
  border: 5px solid var(--color);
  border-radius: 16px;
  padding: 7px;
  text-align: center;
  box-shadow: inset 0 0 0 2px #00000026, 0 0 0 2px #00000026, 0 0 15px var(--color);
  transition: box-shadow 500ms;
  color: var(--color);
}
.skill-block-wrapper:hover .skill-block {
  box-shadow: none;
}
.skill-block:hover {
  box-shadow: inset 0 0 0 2px #00000026, 0 0 0 2px #00000026, 0 0 15px var(--color) !important;
}
.skill-block img {
  width: 50px;
  margin: auto
}
.skill-block h3 {
  font-weight: 600;
  font-size: 23px;
}
.grading {
  font-size: 23px;
}
</style>