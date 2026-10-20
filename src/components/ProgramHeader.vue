<script setup>
defineProps(['code', 'title', 'description', 'logo'])
</script>

<template>
  <header class="program-header">
    <div class="container">
      <RouterLink class="back-link" to="/#programs">← Back to Programs</RouterLink>
      <div class="program-heading">
        <img :src="logo" :alt="code + ' student organization logo'" width="120" height="120" />
        <div>
          <p class="program-code">{{ code }}</p>
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Styles for this component only. */
.program-header {
  padding: 30px 0 40px;
  border-bottom: 4px solid var(--program-color);
  background: var(--program-background);
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 700;
}

.back-link {
  display: inline-block;
  color: var(--program-color);
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
}

.program-heading {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 28px;
}

.program-heading img {
  flex-shrink: 0;
}

.program-code {
  margin-bottom: 8px;
  color: var(--program-color);
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
}

.program-heading h1 {
  margin: 0 0 16px;
  font-size: 34px;
  color: var(--program-color);
}

.program-heading p:last-child {
  margin-bottom: 0;
  font-size: 18px;
}

@media (max-width: 600px) {
  .program-heading h1 {
    font-size: 30px;
    color: var(--program-color);
  }

  .program-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .program-heading h1 {
    overflow-wrap: anywhere;
    color: var(--program-color);
  }
}
</style>
