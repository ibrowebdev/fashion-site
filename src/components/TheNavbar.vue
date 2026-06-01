<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['navbar', { 'navbar--scrolled': isScrolled }]">
    <nav class="navbar-container">
      <RouterLink to="/" class="brand" @click="closeMobileMenu">
        <span class="brand-name">ALFABET CLOTHING</span>
        <span class="brand-sub">Native Couture · Ede</span>
      </RouterLink>

      <!-- Desktop Nav -->
      <ul class="nav-links desktop-only">
        <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
        <li><RouterLink to="/services" class="nav-link">Our Services</RouterLink></li>
        <li><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
      </ul>

      <div class="nav-cta desktop-only">
        <RouterLink to="/contact" class="btn-pill">
          <span class="btn-pill-inner">Order</span>
        </RouterLink>
      </div>

      <!-- Mobile Hamburger -->
      <button 
        class="hamburger mobile-only" 
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
        :aria-expanded="isMobileMenuOpen"
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line 
            x1="0" y1="1" x2="22" y2="1" 
            stroke="currentColor" stroke-width="1.5"
            :class="{ 'bar-top': isMobileMenuOpen }"
          />
          <line 
            x1="0" y1="13" x2="14" y2="13" 
            stroke="currentColor" stroke-width="1.5"
            :class="{ 'bar-bot': isMobileMenuOpen }"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Nav -->
    <Transition name="slide">
      <div v-show="isMobileMenuOpen" class="mobile-nav mobile-only">
        <RouterLink to="/" class="mobile-link" @click="closeMobileMenu">Home</RouterLink>
        <RouterLink to="/services" class="mobile-link" @click="closeMobileMenu">Our Services</RouterLink>
        <RouterLink to="/contact" class="mobile-link" @click="closeMobileMenu">Contact</RouterLink>
        <div class="mobile-nav-cta">
          <RouterLink to="/contact" class="btn-pill btn-pill-gold" @click="closeMobileMenu">
            <span class="btn-pill-inner">Place Order</span>
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  background-color: transparent;
}

.navbar--scrolled {
  background-color: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom-color: var(--color-border);
}

.navbar-container {
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 5rem;
}

@media (min-width: 1024px) {
  .navbar-container {
    padding: 0 3rem;
    height: 6rem;
  }
}

.brand {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  color: var(--color-text);
}

@media (min-width: 768px) {
  .brand-name {
    font-size: 1.5rem;
  }
}

.brand-sub {
  margin-top: 0.2rem;
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: var(--color-text-muted);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-text);
}

.nav-cta {
  display: flex;
}

.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: flex;
  }
  .mobile-only {
    display: none !important;
  }
}

.hamburger {
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-text);
  z-index: 1001;
}

.hamburger svg line {
  transition: all 0.3s ease;
  transform-origin: center;
}

.bar-top {
  transform: translateY(6px) rotate(45deg);
}

.bar-bot {
  transform: translateY(-6px) rotate(-45deg);
  x2: 22;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 999;
}

.mobile-link {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.mobile-link:hover,
.mobile-link.router-link-active {
  color: var(--color-text);
}

.mobile-nav-cta {
  margin-top: 2rem;
}
</style>
