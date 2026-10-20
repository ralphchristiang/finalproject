<script setup>
import ProgramHeader from '../components/ProgramHeader.vue'
import blisLogo from '../assets/images/blis-logo.png'
</script>

<template>
  <!-- The class gives this page its soft gray theme. -->
  <div class="program-page blis-page">
    <ProgramHeader
      code="BLIS"
      title="Bachelor of Library and Information Science"
      description="Connect people with reliable and useful information."
      :logo="blisLogo"
    />

    <div class="container program-details">
      <section class="overview">
        <h2>Program Overview</h2>
        <p>BLIS is a four-year program focused on information resources. Students learn to develop, organize, and manage print, electronic, and digital collections for different users.</p>
      </section>

      <div class="details-grid">
        <section>
          <h2>What You Will Learn</h2>
          <ul>
            <li>Information resource organization</li>
            <li>Reference services and user needs</li>
            <li>Library automation and digital resources</li>
            <li>Information policy and research</li>
          </ul>
        </section>
        <section>
          <h2>Career Opportunities</h2>
          <p>Possible career areas include:</p>
          <ul>
            <li>Library and information services</li>
            <li>Records management</li>
            <li>Digital collections support</li>
            <li>Information resource management</li>
          </ul>
        </section>
        <section>
          <h2>Why Choose This Program?</h2>
          <p>BLIS combines service, organization, and technology. It prepares students to help communities access information and respond to changing research and learning needs.</p>
        </section>
        <section>
          <h2>Who Should Enroll?</h2>
          <p>This program may suit students who enjoy research, organizing materials, working carefully, and helping others locate useful resources.</p>
        </section>
      </div>

      <section class="learning-note">
        <h2>Learning Opportunities</h2>
        <p>The published outcomes cover information services, library automation, and research. Students learn to support access to both physical and digital resources.</p>
      </section>
      <p class="source-note">Program reference: <a href="https://ccs.cpu.edu.ph/library-information-science/" target="_blank" rel="noopener noreferrer">Official CCS BLIS page</a>. Ask CCS for the latest curriculum and admission details.</p>
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

.blis-page {
  --program-color: #5e5968;
  --program-background: #ecebf0;
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
