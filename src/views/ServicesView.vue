<script setup>
import { RouterLink } from 'vue-router'
import { vReveal } from '../composables/useScrollReveal'

import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'

const services = [
  {
    image: img2,
    num: '01',
    title: 'Bespoke',
    timeline: '6 weeks · 3 fittings',
    description: 'A one-of-one garment, drawn from your measurements. Fabric, embroidery, silhouette — every decision is yours.',
    price: 'From ₦185,000'
  },
  {
    image: img3,
    num: '02',
    title: 'Bridal & Aso-Ebi',
    timeline: '8 weeks · 2 fittings',
    description: 'Coordinated orders for brides, grooms and wedding party. One fabric, unified vision, unforgettable entrance.',
    price: 'From ₦310,000'
  },
  {
    image: img4,
    num: '03',
    title: 'Corporate Native',
    timeline: '3 weeks · 1 fitting',
    description: 'Agbadas and kaftans tailored for the executive boardroom. Refined silhouettes ready in less than a month.',
    price: 'From ₦95,000'
  }
]

const extras = [
  { icon: '🪡', title: 'Fabric Sourcing', description: 'Rare Aso-Oke, Adire, and imported silk procurement' },
  { icon: '✨', title: 'Style Consultation', description: 'One-on-one sessions with our master designers' },
  { icon: '🧶', title: 'Alterations & Restoration', description: 'Breathing new life into heirloom garments' }
]
</script>

<template>
  <div class="services-page">

    <!-- Hero -->
    <section class="services-hero">
      <div class="container">
        <div class="hero-inner reveal-hidden" v-reveal>
          <p class="section-label">Services & Process</p>
          <h1 class="section-display">Three ways to order.</h1>
        </div>
      </div>
    </section>

    <!-- Service Cards -->
    <section class="services-grid-section">
      <div class="container">
        <div class="services-grid">
          <article
            v-for="(service, index) in services"
            :key="service.num"
            class="service-card group reveal-hidden"
            v-reveal="{ delay: index * 150 }"
          >
            <div class="service-img-wrapper">
              <img :src="service.image" :alt="service.title" class="service-img" />
              <div class="service-img-gradient"></div>
              <div class="service-num label-xs">№ {{ service.num }}</div>
              <div class="service-overlay">
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-timeline label-xs">{{ service.timeline }}</p>
              </div>
            </div>
            <div class="service-body">
              <p class="service-desc">{{ service.description }}</p>
              <p class="service-price label-xs">{{ service.price }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Extra Services -->
    <section class="extras-section">
      <div class="container">
        <p class="section-label text-center reveal-hidden" v-reveal>Also available</p>
        <div class="extras-grid">
          <div
            v-for="(extra, index) in extras"
            :key="extra.title"
            class="extra-card reveal-hidden"
            v-reveal="{ delay: index * 120 }"
          >
            <div class="extra-icon">{{ extra.icon }}</div>
            <h4 class="extra-title">{{ extra.title }}</h4>
            <p class="extra-desc">{{ extra.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-inner reveal-hidden" v-reveal>
          <p class="section-label">Ready to begin?</p>
          <h2 class="section-display">Place your order.</h2>
          <p class="cta-sub">Reach the atelier directly. We respond within twenty-four hours.</p>
          <div class="cta-actions">
            <RouterLink to="/contact" class="btn-pill btn-pill-gold">
              <span class="btn-pill-inner">Contact Us</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.services-page {
  padding-top: 6rem;
}

.container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 1024px) {
  .container {
    padding: 0 3rem;
  }
}

.text-center {
  text-align: center;
}

/* Hero */
.services-hero {
  padding: 5rem 0 3rem;
  text-align: center;
}

@media (min-width: 768px) {
  .services-hero {
    padding: 6rem 0 4rem;
  }
}

/* Service Cards Grid */
.services-grid-section {
  padding-bottom: 4rem;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.service-card {
  position: relative;
}

.service-img-wrapper {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: #0a0a0a;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.service-card:hover .service-img {
  transform: scale(1.04);
}

.service-img-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
  pointer-events: none;
}

.service-num {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
}

.service-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
}

.service-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1;
  color: white;
  margin-bottom: 0.35rem;
}

.service-timeline {
  color: rgba(255,255,255,0.55);
}

.service-body {
  padding: 1.25rem 0.25rem 0;
}

.service-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
  max-width: 90%;
}

.service-price {
  color: var(--color-text-dim);
}

/* Extras */
.extras-section {
  padding: 4rem 0;
  border-top: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .extras-section {
    padding: 5rem 0;
  }
}

.extras-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .extras-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

.extra-card {
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  transition: border-color 0.3s ease;
}

.extra-card:hover {
  border-color: rgba(201, 168, 76, 0.25);
}

.extra-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.extra-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.extra-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* CTA */
.cta-section {
  padding: 5rem 0 6rem;
  text-align: center;
}

@media (min-width: 768px) {
  .cta-section {
    padding: 6rem 0 8rem;
  }
}

.cta-sub {
  max-width: 28rem;
  margin: 1.5rem auto 0;
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.cta-actions {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
}
</style>
