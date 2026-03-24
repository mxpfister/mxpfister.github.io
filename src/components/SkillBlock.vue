<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
  logos: {
    type: Array,
    default: () => [],
  },
  color: {
    type: String,
    default: '#d16464',
  },
})

const logoSources = computed(() => {
  return props.logos.map((logo) => ({
    alt: logo.alt,
    src: new URL(`../assets/${logo.url}`, import.meta.url).href,
  }))
})
</script>

<template>
  <article class="skill-block">
    <div v-if="logoSources.length" class="skill-block-logos" aria-hidden="true">
      <img
        v-for="logo in logoSources"
        :key="logo.src"
        :src="logo.src"
        :alt="logo.alt"
      >
    </div>
    <h3>{{ props.title }}</h3>
    <div class="skill-item-list">
      <span v-for="(item, index) in props.items" :key="item">{{ item }}{{ index < props.items.length - 1 ? ', ' : '' }}</span>
    </div>
  </article>
</template>

<style scoped>
.skill-block {
  border: 5px solid var(--sec-color);
  border-radius: 16px;
  padding: 18px;
  text-align: left;
  box-shadow: inset 0 0 0 2px #00000026, 0 0 0 2px #00000026, 0 0 15px var(--sec-color);
  transition: box-shadow 500ms;
  color: #fff;
}
.skill-block-wrapper:hover .skill-block {
  box-shadow: none;
}
.skill-block:hover {
  box-shadow: inset 0 0 0 2px #00000026, 0 0 0 2px #00000026, 0 0 15px var(--sec-color) !important;
}
.skill-block-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}
.skill-block-logos img {
  width: 34px;
  height: 34px;
  object-fit: contain;
}
.skill-block h3 {
  margin: 0;
  font-weight: 600;
  font-size: 23px;
}
.skill-item-list {
  margin: 12px 0 0;
}
@media (max-width: 768px) {
  .skill-block {
    padding: 16px;
  }
  .skill-block-logos img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 576px) {
  .skill-block {
    padding: 14px;
  }
  .skill-block h3 {
    font-size: 21px;
  }
  .skill-item-list {
    margin-top: 10px;
    gap: 4px;
  }
  .skill-block-logos {
    gap: 8px;
    margin-bottom: 8px;
  }
  .skill-block-logos img {
    width: 28px;
    height: 28px;
  }
}
</style>