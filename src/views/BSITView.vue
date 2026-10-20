<script setup>
import ProgramHeader from '../components/ProgramHeader.vue'
import bsitLogo from '../assets/images/bsit-logo.png'
</script>

<template>
  <!-- The class gives this page its soft gray-green theme. -->
  <div class="program-page bsit-page">
    <ProgramHeader
      code="BSIT"
      title="Bachelor of Science in Information Technology"
      description="Build practical technology solutions for everyday needs."
      :logo="bsitLogo"
    />

    <div class="container program-details">
      <section class="overview">
        <h2>Program Overview</h2>
        <p>BSIT focuses on applying hardware and software to organizational needs. Students learn to develop, integrate, manage, and maintain computing systems.</p>
      </section>

      <div class="details-grid">
        <section>
          <h2>What You Will Learn</h2>
          <ul>
            <li>Web systems and programming</li>
            <li>Networking and systems administration</li>
            <li>Information management and databases</li>
            <li>Information security and system integration</li>
          </ul>
        </section>
        <section>
          <h2>Career Opportunities</h2>
          <p>Possible career areas include:</p>
          <ul>
            <li>Web and application development</li>
            <li>Network and systems administration</li>
            <li>Database administration</li>
            <li>Technical support and information security</li>
          </ul>
        </section>
        <section>
          <h2>Why Choose This Program?</h2>
          <p>Choose BSIT if you want to connect technical skills with practical needs. Its focus on infrastructure and user requirements supports work across different organizations.</p>
        </section>
        <section>
          <h2>Who Should Enroll?</h2>
          <p>This program may suit students who enjoy troubleshooting, building applications, connecting devices, and helping people use technology.</p>
        </section>
      </div>

      <section class="learning-note">
        <h2>Learning Opportunities</h2>
        <p>The published curriculum covers networking, web technologies, and systems integration. ITSO is the program's student organization.</p>
      </section>
      <p class="source-note">Program reference: <a href="https://ccs.cpu.edu.ph/information-technology/" target="_blank" rel="noopener noreferrer">Official CCS BSIT page</a>. Ask CCS for the latest curriculum and admission details.</p>
      <RouterLink class="back-link" to="/#programs">← Back to Programs</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Styles for this component only. */
.source-note {
  margin: 24px 0;
  font-size: 14px;
}
.bsit-page {
  --program-color: #4d655c;
  --program-background: #e9f1ec;
}

.back-link {
  display: inline-block;
  color: var(--program-color);
  font-weight: 700;
  font-family: Helvetica, Arial, sans-serif;
}

.program-details {
  padding: 36px 0 48px;
}

.program-details h2 {
  margin: 0 0 14px;
  font-size: 24px;
  color: var(--program-color);
}

.overview {
  max-width: 850px;
  margin-bottom: 32px;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px 40px;
}

.details-grid section {
  padding-top: 22px;
  border-top: 2px solid var(--program-color);
}

.details-grid ul {
  margin: 0;
  padding-left: 22px;
}

.details-grid li {
  margin-bottom: 8px;
}

.learning-note {
  margin-top: 28px;
  padding: 24px;
  border-left: 4px solid var(--program-color);
  background: var(--program-background);
}

.learning-note p {
  margin-bottom: 0;
}

@media (max-width: 600px) {

  .details-grid {
    grid-template-columns: 1fr;
  }
}
</style>
