<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { vReveal } from '../composables/useScrollReveal'

import heroImg from '../assets/image.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'

const garments = [
  {
    name: 'Sultan\'s Blue Agbada',
    price: '185,000',
    description: 'Hand-embroidered three-piece Agbada in royal blue with star motif detailing',
    image: img2
  },
  {
    name: 'White Gold Ceremony',
    price: '240,000',
    description: 'Ceremonial Agbada in pristine white with hand-stitched gold geometric embroidery',
    image: img3
  },
  {
    name: 'Onyx Heritage Vest',
    price: '120,000',
    description: 'Striking sky-blue Agbada featuring a heavy black embroidered chest plate',
    image: img4
  }
]

const processes = [
  { num: '01', title: 'Consultation', description: 'In-studio or video. Brief, fabric library, sketches.' },
  { num: '02', title: 'Fabric', description: 'Aso-Oke, brocade, silk, damask — chosen with you.' },
  { num: '03', title: 'Fittings', description: 'Two to three sessions. Calibration to the body.' },
  { num: '04', title: 'Delivery', description: 'Hand-finished, boxed, ready for the occasion.' }
]

const testimonials = [
  { quote: 'The attention to detail on my Agbada was extraordinary. I felt like royalty at my daughter\'s wedding.', author: 'Chief Emeka Okafor', location: 'Lagos' },
  { quote: 'ALFABET CLOTHING seamlessly blends our cultural heritage with modern luxury. Simply impeccable.', author: 'Mrs. Adaeze Nwosu', location: 'Abuja' },
  { quote: 'Their bespoke service is unmatched. The silk kaftan fits perfectly and turns heads everywhere.', author: 'Alhaji Musa Danjuma', location: 'Kano' }
]

const currentTestimonial = ref(0)
let testimonialInterval

const heroLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    heroLoaded.value = true
  }, 200)

  testimonialInterval = setInterval(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
  }, 5000)
})

onUnmounted(() => {
  if (testimonialInterval) {
    clearInterval(testimonialInterval)
  }
})
</script>

<template>
  <div class="home">
    
    <!-- ═══ HERO ═══ -->
    <section class="hero">
      <div class="hero-bg" :style="{ backgroundImage: `url(${heroImg})` }"></div>
      <div class="hero-gradient-bottom"></div>

      <!-- Decorative line -->
      <div class="hero-deco" :class="{ visible: heroLoaded }">
        <svg width="400" height="55" viewBox="0 0 400 55" fill="none" class="deco-svg">
          <defs>
            <linearGradient id="hero-line-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="#C9A84C" stop-opacity="0" />
              <stop offset="0.55" stop-color="#C9A84C" stop-opacity="0.5" />
              <stop offset="1" stop-color="#C9A84C" stop-opacity="0.85" />
            </linearGradient>
          </defs>
          <path d="M 395,50 L 348,3 L 0,3" stroke="url(#hero-line-grad)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="395" cy="50" fill="#C9A84C" r="3" />
        </svg>
        <p class="deco-label">Bespoke Couture · Osun</p>
      </div>

      <div class="hero-content" :class="{ 'hero-loaded': heroLoaded }">
        <p class="hero-label">Bespoke Native Couture · Osun</p>
        <h1 class="hero-title">
          Royalty,<br />
          <span>in every stitch.</span>
        </h1>
        <p class="hero-sub">Hand-tailored Kaftans, Agbadas & Aso-Oke for grooms, chiefs, and gentlemen of culture — from owambe to the throne.</p>
        <div class="hero-actions">
          <a href="#collection" class="btn-pill btn-pill-gold">
            <span class="btn-pill-inner">Explore Collection</span>
          </a>
        </div>
      </div>

      <div class="scroll-hint" :class="{ visible: heroLoaded }">
        <span class="bounce">↓</span>
        <span>Scroll</span>
      </div>
    </section>

    <!-- ═══ ABOUT / PHILOSOPHY ═══ -->
    <section class="about-section">
      <div class="about-inner">
        <div class="about-image reveal-hidden" v-reveal>
          <div class="about-img-wrapper">
            <img :src="img4" alt="Inside the ALFABET CLOTHING atelier" />
            <div class="about-img-overlay"></div>
          </div>
        </div>
        <div class="about-text reveal-hidden" v-reveal="{ delay: 200 }">
          <span class="section-label">The Atelier Story</span>
          <h2 class="about-heading">
            Where heritage meets <span class="italic">couture.</span>
          </h2>
          <div class="about-quote">
            "An agbada is not merely draped; it is a canvas of identity."
          </div>
          <p class="about-body">
            Rooted in West African textile mastery, ALFABET CLOTHING brings architectural precision to ceremonial attire. 
            Our master artisans spend upwards of eighty hours on a single piece, embedding custom Yoruba and Hausa iconography 
            into every garment.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ COLLECTION ═══ -->
    <section id="collection" class="collection-section">
      <div class="container">
        <div class="collection-header reveal-hidden" v-reveal>
          <p class="section-label">The Collection</p>
          <h2 class="section-display">Pieces from the atelier.</h2>
        </div>
        
        <div class="collection-grid">
          <article 
            v-for="(item, index) in garments" 
            :key="item.name"
            class="piece-card group reveal-hidden"
            v-reveal="{ delay: index * 120 }"
          >
            <div class="piece-img-wrapper">
              <img :src="item.image" :alt="item.name" class="piece-img" />
              <div class="piece-img-gradient"></div>
              <div class="piece-number label-xs">№ {{ String(index + 1).padStart(2, '0') }}</div>
              <div class="piece-overlay">
                <h3 class="piece-name">{{ item.name }}</h3>
                <p class="piece-price label-xs">From ₦{{ item.price }}</p>
              </div>
            </div>
            <div class="piece-info">
              <p class="piece-desc">{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══ PROCESS ═══ -->
    <section class="process-section">
      <div class="container">
        <p class="section-label text-center reveal-hidden" v-reveal>How it works</p>
        
        <div class="process-grid">
          <div 
            v-for="(step, index) in processes" 
            :key="step.num"
            class="process-step reveal-hidden"
            v-reveal="{ delay: index * 150 }"
          >
            <div class="process-num label-xs">{{ step.num }}</div>
            <h4 class="process-title">{{ step.title }}</h4>
            <p class="process-desc">{{ step.description }}</p>
          </div>
        </div>

        <div class="process-cta reveal-hidden" v-reveal>
          <RouterLink to="/contact" class="btn-pill btn-pill-gold">
            <span class="btn-pill-inner">Place Your Order</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══ TESTIMONIALS ═══ -->
    <section class="testimonials-section">
      <div class="container">
        <div class="testimonial-wrapper reveal-hidden" v-reveal>
          <p class="section-label text-center">Client Stories</p>
          
          <Transition name="fade" mode="out-in">
            <div :key="currentTestimonial" class="testimonial-card">
              <blockquote class="testimonial-quote">{{ testimonials[currentTestimonial].quote }}</blockquote>
              <div class="testimonial-author">
                <span class="testimonial-name">{{ testimonials[currentTestimonial].author }}</span>
                <span class="label-xs">{{ testimonials[currentTestimonial].location }}</span>
              </div>
            </div>
          </Transition>
          
          <div class="carousel-dots">
            <span 
              v-for="(t, i) in testimonials" 
              :key="i"
              class="dot"
              :class="{ active: i === currentTestimonial }"
              @click="currentTestimonial = i"
            ></span>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<style scoped>
/* ═══ HERO ═══ */
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.08);
  animation: heroPan 25s ease-in-out infinite alternate;
}

@keyframes heroPan {
  0% { transform: scale(1.08) translate(0, 0); }
  100% { transform: scale(1.12) translate(-1%, -0.5%); }
}

.hero-gradient-bottom {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom left, transparent 30%, rgba(0,0,0,0.35) 100%);
}

.hero-gradient-bottom::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45%;
  background: linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.85) 40%, transparent 100%);
}

.hero-deco {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateY(-50%);
  display: none;
  flex-direction: column;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 1.5s ease 0.8s;
}

.hero-deco.visible {
  opacity: 1;
}

@media (min-width: 1024px) {
  .hero-deco {
    display: flex;
  }
}

.deco-svg {
  margin-right: 140px;
  overflow: visible;
}

.deco-label {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: rgba(255,255,255,0.85);
  margin-right: 160px;
  margin-bottom: 1rem;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 36rem;
  text-align: right;
  padding: 3rem 1.5rem;
  opacity: 0;
  transform: translateY(40px);
  filter: blur(8px);
  transition: opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s,
              transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s,
              filter 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s;
}

@media (min-width: 1024px) {
  .hero-content {
    padding: 4rem;
  }
}

.hero-loaded {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.hero-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.hero-title span {
  font-style: italic;
  font-weight: 400;
  color: var(--color-gold);
}

.hero-sub {
  margin-top: 1.5rem;
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 28rem;
  margin-left: auto;
  line-height: 1.6;
}

.hero-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-text-dim);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 1s ease 1.5s;
}

.scroll-hint.visible {
  opacity: 1;
}

.bounce {
  display: inline-block;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* ═══ ABOUT ═══ */
.about-section {
  background: var(--color-bg);
  padding: 3.5rem 0 5rem;
}

@media (min-width: 768px) {
  .about-section {
    padding: 5rem 0;
  }
}

.about-inner {
  position: relative;
}

.about-image {
  width: 100%;
  overflow: hidden;
  background: #0f0f0f;
  position: relative;
  aspect-ratio: 3/2;
}

.about-img-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  transform: scale(1.1);
  transition: transform 12s ease;
}

.about-image:hover .about-img-wrapper {
  transform: scale(1.05);
}

.about-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.about-img-overlay {
  display: none;
}

@media (min-width: 768px) {
  .about-img-overlay {
    display: block;
    position: absolute;
    inset: 0;
    background: linear-gradient(to top right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.45) 40%, transparent 100%);
  }
}

.about-text {
  padding: 2.5rem 1.5rem 0;
  max-width: 48rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .about-text {
    position: absolute;
    bottom: 2.5rem;
    left: 2.5rem;
    padding: 0;
    margin: 0;
    max-width: 34rem;
    z-index: 20;
  }
}

@media (min-width: 1024px) {
  .about-text {
    bottom: 4rem;
    left: 4rem;
  }
}

.about-heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--color-text);
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;
}

.italic {
  font-style: italic;
  font-weight: 200;
  color: rgba(255,255,255,0.85);
}

.about-quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 0.95rem;
  color: rgba(255,255,255,0.75);
  font-weight: 400;
  border-left: 1px solid rgba(255,255,255,0.15);
  padding-left: 1rem;
  margin-bottom: 1.25rem;
  line-height: 1.6;
  max-width: 28rem;
}

.about-body {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  font-weight: 400;
  max-width: 28rem;
}

/* ═══ COLLECTION ═══ */
.collection-section {
  padding: 3.5rem 0 5rem;
}

@media (min-width: 768px) {
  .collection-section {
    padding: 5rem 0;
  }
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

.collection-header {
  text-align: center;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .collection-header {
    margin-bottom: 3.5rem;
  }
}

.text-center {
  text-align: center;
}

.collection-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .collection-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .collection-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

.piece-card {
  position: relative;
}

.piece-img-wrapper {
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: #0a0a0a;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
}

.piece-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.piece-card:hover .piece-img {
  transform: scale(1.04);
}

.piece-img-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
  pointer-events: none;
}

.piece-number {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
}

.piece-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
}

.piece-name {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.1;
  color: white;
  margin-bottom: 0.35rem;
}

@media (min-width: 768px) {
  .piece-name {
    font-size: 2rem;
  }
}

.piece-info {
  padding: 1rem 0.25rem 0;
}

.piece-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 90%;
}

/* ═══ PROCESS ═══ */
.process-section {
  background: var(--color-bg);
  padding: 4rem 0 5rem;
}

@media (min-width: 768px) {
  .process-section {
    padding: 5rem 0 6rem;
  }
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 2.5rem;
}

@media (min-width: 640px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}

.process-num {
  margin-bottom: 0.75rem;
}

.process-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .process-title {
    font-size: 2rem;
  }
}

.process-desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 15rem;
}

.process-cta {
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .process-cta {
    margin-top: 5rem;
  }
}

/* ═══ TESTIMONIALS ═══ */
.testimonials-section {
  background: var(--color-surface);
  padding: 5rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .testimonials-section {
    padding: 6rem 0;
  }
}

.testimonial-wrapper {
  max-width: 44rem;
  margin: 0 auto;
}

.testimonial-card {
  text-align: center;
  margin-top: 2rem;
}

.testimonial-quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.testimonial-quote::before {
  content: '"';
}

.testimonial-quote::after {
  content: '"';
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.testimonial-name {
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-text);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.dot.active {
  background-color: var(--color-gold);
  transform: scale(1.4);
}
</style>
