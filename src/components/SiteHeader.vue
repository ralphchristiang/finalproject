<template>
  <header class="site-header">
    <div class="container navigation">
      <RouterLink class="brand" to="/#home">
        <img src="/ccs-icon.png" alt="CCS logo" width="52" height="52" />
        <span>CPU College of Computer Studies</span>
      </RouterLink>

      <nav aria-label="Main navigation">
        <!-- These links also work when a visitor is on a program page. -->
        <RouterLink to="/#home">Home</RouterLink>
        <RouterLink to="/#programs">Programs Offered</RouterLink>
        <RouterLink to="/#partnerships">Partnerships and Memberships</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Styles for this component only. */
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 16px 0;
  border-bottom: 4px solid #c9dccd;
  background: #e5dcef;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 700;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 290px;
  color: #4b3d5f;
  font-weight: 700;
  text-decoration: none;
}

.brand img {
  flex-shrink: 0;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px 22px;
}

nav a {
  color: #4b3d5f;
  text-decoration: none;
}

@media (max-width: 900px) {
  .navigation {
    flex-direction: column;
    gap: 18px;
  }

  .brand {
    max-width: none;
  }

  nav {
    justify-content: center;
  }
}
</style>
