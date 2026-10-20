<script setup>
import ProgramHeader from '../components/ProgramHeader.vue'
import bsdmiaLogo from '../assets/images/bsdmia-logo.png'
</script>

<template>
  <!-- The class gives this page its pastel purple theme. -->
  <div class="program-page bsdmia-page">
    <ProgramHeader
      code="BSDMIA"
      title="Bachelor of Science in Digital Media and Interactive Arts"
      description="Express ideas through art, storytelling, and technology."
      :logo="bsdmiaLogo"
    />

    <div class="container program-details">
      <section class="overview">
        <h2>Program Overview</h2>
        <p>BSDMIA combines applied arts and digital media. Students develop creative skills for visual communication and interactive experiences in entertainment, education, and other industries.</p>
      </section>

      <div class="details-grid">
        <section>
          <h2>What You Will Learn</h2>
          <ul>
            <li>Graphic design and photography</li>
            <li>Video editing and animation</li>
            <li>3D modeling</li>
            <li>Game design and interactive media</li>
          </ul>
        </section>
        <section>
          <h2>Career Opportunities</h2>
          <p>Possible career areas include:</p>
          <ul>
            <li>Graphic design</li>
            <li>Animation</li>
            <li>Game and web design</li>
            <li>Multimedia art and digital content</li>
          </ul>
        </section>
        <section>
          <h2>Why Choose This Program?</h2>
          <p>Choose BSDMIA if you want to combine artistic interests with digital tools. Collaborative creative work helps students communicate ideas through different media.</p>
        </section>
        <section>
          <h2>Who Should Enroll?</h2>
          <p>This program may suit students interested in drawing, visual storytelling, design, animation, and creating interactive experiences.</p>
        </section>
      </div>

      <section class="learning-note">
        <h2>Learning Opportunities</h2>
        <p>The published program includes digital production tools and creative collaboration. MIDAS, its student organization, supports artistic identity, exhibits, and outreach.</p>
      </section>
      <p class="source-note">Program reference: <a href="https://ccs.cpu.edu.ph/digital-media-and-interactive-arts/" target="_blank" rel="noopener noreferrer">Official CCS BSDMIA page</a>. Ask CCS for the latest curriculum and admission details.</p>
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

.bsdmia-page {
  --program-color: #66527d;
  --program-background: #eee7f5;
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
