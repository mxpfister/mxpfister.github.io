<template>
  <div class="timeline-component">
    <div class="year">{{ event.year }}</div>
    <div class="content">
      <h3>{{ event.title }}</h3>
      <p v-if="event.institution">{{ event.institution }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
    left: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.timeline-component {
  padding: 20px;
  background-color: #242526;
  box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #242424;
  border-radius: 6px;
  padding: 1.75rem;
  transition: 0.4s ease;
  overflow-wrap: break-word;
}

.timeline-left .timeline-component {
  text-align: right;
}

.timeline-right .timeline-component {
  text-align: left;
}

.year {
  font-weight: bold;
  color: var(--sec-color);
}

.description {
  margin-top: 5px;
}

.even-item {
  background-color: #333;
}

.odd-item {
  background-color: #444;
}
</style>
