<script setup>
import ProgramHeader from '../components/ProgramHeader.vue'
import bscsLogo from '../assets/images/bscs-logo.png'
</script>

<template>
  <!-- The class gives this page its pastel green theme. -->
  <div class="program-page bscs-page">
    <ProgramHeader
      code="BSCS"
      title="Bachelor of Science in Computer Science"
      description="Understand computing and create solutions through code."
      :logo="bscsLogo"
    />

    <div class="container program-details">
      <section class="overview">
        <h2>Program Overview</h2>
        <p>BSCS studies the foundations of computing. It emphasizes theories, algorithms, and software design, helping students understand how to solve complex computing problems.</p>
      </section>

      <div class="details-grid">
        <section>
          <h2>What You Will Learn</h2>
          <ul>
            <li>Algorithms and problem solving</li>
            <li>Programming languages and software development</li>
            <li>Computer architecture and operating systems</li>
            <li>Software engineering and computing theory</li>
          </ul>
        </section>
        <section>
          <h2>Career Opportunities</h2>
          <p>Possible career areas include:</p>
          <ul>
            <li>Software development</li>
            <li>Software testing</li>
            <li>Systems analysis</li>
            <li>Computing research</li>
          </ul>
        </section>
        <section>
          <h2>Why Choose This Program?</h2>
          <p>BSCS offers a strong foundation for understanding how software works. Studying algorithms helps students compare solutions and approach unfamiliar problems logically.</p>
        </section>
        <section>
          <h2>Who Should Enroll?</h2>
          <p>This program may suit students who enjoy programming, logical puzzles, mathematics, and exploring why a computing solution works.</p>
        </section>
      </div>

      <section class="learning-note">
        <h2>Learning Opportunities</h2>
        <p>The published curriculum includes algorithms, software engineering, and operating systems. The Computer Science Society supports student activities and community involvement.</p>
      </section>
      <p class="source-note">Program reference: <a href="https://ccs.cpu.edu.ph/computer-science/" target="_blank" rel="noopener noreferrer">Official CCS BSCS page</a>. Ask CCS for the latest curriculum and admission details.</p>
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

.bscs-page {
  --program-color: #4d6755;
  --program-background: #e4efe7;
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
