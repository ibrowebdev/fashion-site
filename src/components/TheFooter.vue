<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">

      <!-- Brand block -->
      <div class="footer-brand">
        <div class="footer-logo">ALFABET CLOTHING</div>
        <p class="label-xs">EDE · OSUN STATE</p>
      </div>

      <!-- Columns -->
      <div class="footer-grid">

        <div class="footer-col">
          <p class="footer-col-label">Explore</p>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/services">Our Services</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <p class="footer-col-label">Atelier</p>
          <address>
            <p>Sawmill Area Ede</p>
            <p>Osun, Nigeria</p>
            <p class="mt">By appointment only</p>
            <p class="mt"><a href="tel:+2348169388173">+234 816 938 8173</a></p>
            <p><a href="mailto:oaubot7@gmail.com">Email us</a></p>
          </address>
        </div>

        <div class="footer-col">
          <p class="footer-col-label">Follow</p>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="https://wa.me/2348169388173">WhatsApp</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p>© 2026 ALFABET CLOTHING. All garments are one of one.</p>
        <p>Crafted in Ede, Osun State</p>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: 4rem 1.5rem 2rem;
}

@media (min-width: 1024px) {
  .footer {
    padding: 5rem 3rem 2rem;
  }
}

.footer-inner {
  max-width: 80rem;
  margin: 0 auto;
}

.footer-brand {
  margin-bottom: 3.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-brand {
    text-align: left;
    margin-bottom: 5rem;
  }
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 2.5rem;
  letter-spacing: 0.3em;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .footer-logo {
    font-size: 3rem;
  }
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 3.5rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-bottom: 5rem;
  }
}

.footer-col-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: var(--color-text-dim);
  margin-bottom: 1.25rem;
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-col a {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.footer-col a:hover {
  color: var(--color-text);
}

address {
  font-style: normal;
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

address .mt {
  margin-top: 0.75rem;
}

address a {
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

address a:hover {
  color: var(--color-text);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-bottom p {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-text-dim);
}
</style>
