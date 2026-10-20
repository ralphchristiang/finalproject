<script setup>
import ccsLogo from '../assets/images/ccs-logo.png'
import bsitLogo from '../assets/images/bsit-logo.png'
import bscsLogo from '../assets/images/bscs-logo.png'
import bsdmiaLogo from '../assets/images/bsdmia-logo.png'
import blisLogo from '../assets/images/blis-logo.png'
import oracleLogo from '../assets/images/oracle-logo.png'
import ciscoLogo from '../assets/images/cisco-logo.png'
import acerLogo from '../assets/images/acer-logo.jpg'
import huaweiLogo from '../assets/images/huawei-logo.jpg'
import psiteLogo from '../assets/images/psite-logo.png'
import govesmartLogo from '../assets/images/govesmart-logo.jpg'
import mayadLogo from '../assets/images/mayad-logo.png'
import lasortechLogo from '../assets/images/lasortech-logo.jpg'
import startupLogo from '../assets/images/startup-logo.jpg'

// Arrays keep repeated cards together. v-for displays one card for each object.
const programs = [
  {
    code: 'BSIT',
    name: 'Bachelor of Science in Information Technology',
    description: 'Learn how to develop, connect, and maintain the technologies used by people and organizations.',
    logo: bsitLogo,
    path: '/programs/bsit',
  },
  {
    code: 'BSCS',
    name: 'Bachelor of Science in Computer Science',
    description: 'Study computing concepts, algorithms, and software development to solve problems through programming.',
    logo: bscsLogo,
    path: '/programs/bscs',
  },
  {
    code: 'BSDMIA',
    name: 'Bachelor of Science in Digital Media and Interactive Arts',
    description: 'Combine creativity and technology through digital design, animation, and interactive media.',
    logo: bsdmiaLogo,
    path: '/programs/bsdmia',
  },
  {
    code: 'BLIS',
    name: 'Bachelor of Library and Information Science',
    description: 'Learn to organize information, manage resources, and help people find the knowledge they need.',
    logo: blisLogo,
    path: '/programs/blis',
  },
]

// These organizations are listed on the official college linkages page.
const partners = [
  { name: 'Oracle Academy', logo: oracleLogo, description: 'Database and computing education.' },
  { name: 'Cisco Networking Academy', logo: ciscoLogo, description: 'Networking and technology education.' },
  { name: 'Acer', logo: acerLogo, description: 'Computers and related technology.' },
  { name: 'Huawei ICT Academy', logo: huaweiLogo, description: 'Information and communications technology learning.' },
  { name: 'Philippine Society of Information Technology Educators', logo: psiteLogo, description: 'A professional community for IT educators.' },
  { name: 'GoveSmart', logo: govesmartLogo },
  { name: 'Mayad', logo: mayadLogo },
  { name: 'Lasortech', logo: lasortechLogo },
  { name: 'Startup Project Ventures', logo: startupLogo },
]
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-content">
      <img :src="ccsLogo" alt="College of Computer Studies logo" width="150" height="150" />
      <p class="university-name">Central Philippine University</p>
      <h1>College of Computer Studies</h1>
      <p class="hero-description">
        Welcome to CCS. Explore computing, digital creativity, and information services.
        Our college helps students develop knowledge and practical skills for the changing world of technology.
      </p>
      <RouterLink class="button" to="/#programs">Explore Our Programs</RouterLink>
    </div>
  </section>

  <section id="programs" class="section">
    <div class="container">
      <h2>Programs Offered</h2>
      <p class="section-introduction">Discover a program that matches your interests and goals.</p>

      <div class="program-grid">
        <article v-for="program in programs" :key="program.code" class="card program-card">
          <img :src="program.logo" :alt="program.code + ' student organization logo'" width="100" height="100" loading="lazy" />
          <h3>{{ program.code }}</h3>
          <p class="program-name">{{ program.name }}</p>
          <p>{{ program.description }}</p>
          <RouterLink class="button" :to="program.path" :aria-label="'Read more about ' + program.code">Read More</RouterLink>
        </article>
      </div>
    </div>
  </section>

  <section id="partnerships" class="section alternate-section">
    <div class="container">
      <h2>Partnerships and Memberships</h2>
      <p class="section-introduction">Organizations featured in the official CCS linkages directory.</p>

      <div class="partner-grid">
        <article v-for="partner in partners" :key="partner.name" class="card partner-card">
          <img :src="partner.logo" :alt="partner.name + ' logo'" width="180" height="90" loading="lazy" />
          <h3>{{ partner.name }}</h3>
          <p v-if="partner.description">{{ partner.description }}</p>
        </article>
      </div>
      <p class="source-note">
        Source: <a href="https://ccs.cpu.edu.ph/linkages/" target="_blank" rel="noopener noreferrer">Official CCS Linkages</a>.
        Contact the college for current partnership and membership details.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Styles for this component only. */
.hero {
  padding: 48px 0;
  background: #f0ebf5;
  text-align: center;
}

.hero-content > img {
  margin: 0 auto 20px;
}

.hero h1 {
  margin: 10px 0 20px;
  font-size: 40px;
}

.hero-description {
  max-width: 700px;
  margin: 0 auto 24px;
  font-size: 18px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  background: #d8e8dc;
  color: #34513d;
  font-weight: 700;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
}

.button:hover {
  background: #c6dbcd;
  text-decoration: none;
}

.section {
  padding: 48px 0;
}

.section h2 {
  margin: 0 0 12px;
  font-size: 30px;
  text-align: center;
}

.section-introduction {
  margin-bottom: 28px;
  text-align: center;
}

.alternate-section {
  background: #eaf2ec;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.card {
  padding: 24px;
  border: 1px solid #d9d6df;
  border-radius: 6px;
  background: #fcfbfd;
}

.program-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.program-card img {
  margin-bottom: 16px;
}

.program-card h3 {
  margin: 0 0 12px;
  font-size: 24px;
}

.program-name {
  font-weight: 400;
}

.program-card .button {
  margin-top: auto;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.partner-card {
  text-align: center;
}

.partner-card img {
  margin: 0 auto 18px;
}

.partner-card h3 {
  margin: 0 0 10px;
  font-size: 19px;
}

.partner-card p {
  margin-bottom: 0;
}

.source-note {
  margin: 24px 0;
  font-size: 14px;
}

.university-name { font-family: Helvetica, Arial, sans-serif; font-weight: 700; }

@media (max-width: 900px) {

  .partner-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 30px;
  }

  .section h2 {
    font-size: 26px;
  }

  .hero-description {
    font-size: 16px;
  }

  .program-grid, .partner-grid {
    grid-template-columns: 1fr;
  }
}
</style>
