<script setup>
import { computed } from 'vue'
import {
  faBrain,
  faChartLine,
  faDatabase,
  faDiagramProject,
  faMagnifyingGlass,
  faPeopleGroup,
  faSitemap,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCss3Alt,
  faDocker as faDockerBrand,
  faGitAlt,
  faHtml5,
  faJs,
  faPhp,
  faPython,
  faShopify,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
  icons: {
    type: Array,
    default: () => [],
  }
})

const iconMap = {
  php: faPhp,
  javascript: faJs,
  mysql: faDatabase,
  html: faHtml5,
  css: faCss3Alt,
  python: faPython,
  shopware: faShopify,
  wordpress: faWordpress,
  git: faGitAlt,
  docker: faDockerBrand,
  scraping: faMagnifyingGlass,
  analysis: faChartLine,
  ai: faBrain,
  accessibility: faUniversalAccess,
  requirements: faDiagramProject,
  process: faSitemap,
  agile: faPeopleGroup,
}

const resolvedIcons = computed(() => {
  return props.icons
    .map((item) => {
      const definition = iconMap[item.name]
      if (!definition) {
        return null
      }

      return {
        key: `${item.name}-${item.label}`,
        label: item.label,
        width: definition.icon[0],
        height: definition.icon[1],
        path: definition.icon[4],
      }
    })
    .filter(Boolean)
})
</script>

<template>
  <article class="skill-block">
    <div v-if="resolvedIcons.length" class="skill-block-icons" aria-hidden="true">
      <svg
        v-for="icon in resolvedIcons"
        :key="icon.key"
        class="skill-icon"
        xmlns="http://www.w3.org/2000/svg"
        :viewBox="`0 0 ${icon.width} ${icon.height}`"
      >
        <path :d="icon.path" />
      </svg>
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
  box-shadow: inset 0 0 0 2px #00000026, 0 0 0 2px #00000026, 0 0 7px var(--sec-color);
  transition: box-shadow 500ms;
  color: #e9e9e9;
  text-align: center;
  background-color: var(--dark-bckgr);
}
.skill-block-wrapper:hover .skill-block {
  box-shadow: none;
}
.skill-block:hover {
  box-shadow: inset 0 0 0 2px #00000026, 0 0 0 2px #00000026, 0 0 12px var(--sec-color) !important;
}
.skill-block-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}
.skill-icon {
  width: 34px;
  height: 34px;
  fill: currentColor;
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
  .skill-icon {
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
  .skill-block-icons {
    gap: 8px;
    margin-bottom: 8px;
  }
  .skill-icon {
    width: 28px;
    height: 28px;
  }
}
</style>