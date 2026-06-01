<script setup>
import { reactive, ref } from 'vue'
import { vReveal } from '../composables/useScrollReveal'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const submitted = ref(false)
const error = ref('')

const services = [
  'Bespoke Tailoring',
  'Bridal & Aso-Ebi Packages',
  'Corporate Native Wear',
  'Fabric Sourcing',
  'Style Consultation',
  'Alterations & Restoration'
]

const submitForm = () => {
  error.value = ''
  if (!form.name || !form.email || !form.message) {
    error.value = 'Please fill in all required fields.'
    return
  }
  setTimeout(() => {
    submitted.value = true
    form.name = ''
    form.email = ''
    form.phone = ''
    form.service = ''
    form.message = ''
  }, 500)
}
</script>

<template>
  <div class="contact-page">
    <div class="container">
      <div class="contact-grid">

        <!-- Left column -->
        <div class="contact-left">
          <p class="section-label reveal-hidden" v-reveal>Contact</p>
          <h1 class="contact-heading section-display reveal-hidden" v-reveal="{ delay: 100 }">Place your order.</h1>
          <p class="contact-sub reveal-hidden" v-reveal="{ delay: 200 }">
            Reach the atelier directly. We respond within twenty-four hours, every day. 
            Bring your event date, your fabric preferences, and the silhouette you have in mind.
          </p>

          <div class="contact-actions reveal-hidden" v-reveal="{ delay: 300 }">
            <a href="https://wa.me/2348169388173" class="btn-pill btn-pill-gold">
              <span class="btn-pill-inner">Chat on WhatsApp</span>
            </a>
            <a href="mailto:oaubot7@gmail.com" class="email-link">Email us</a>
          </div>

          <address class="contact-address reveal-hidden" v-reveal="{ delay: 400 }">
            <p class="address-label label-xs">Studio</p>
            <p class="address-name">ALFABET CLOTHING</p>
            <p class="address-detail">Sawmill Area Ede</p>
            <p class="address-detail">Osun, Nigeria</p>
            <p class="address-detail">By appointment only</p>
            <p class="address-phone"><a href="tel:+2348169388173">+234 816 938 8173</a></p>
            <p class="address-hours">Mon–Sat, 9am–6pm WAT</p>
          </address>
        </div>

        <!-- Right column: Form card -->
        <div class="contact-right reveal-hidden" v-reveal="{ delay: 250 }">
          <div class="form-card">
            <Transition name="fade" mode="out-in">
              <div v-if="!submitted" key="form">
                <h2 class="form-title">Book a Consultation</h2>
                
                <form @submit.prevent="submitForm">
                  <div class="field">
                    <label for="name" class="label-xs">Full Name *</label>
                    <input type="text" id="name" v-model="form.name" required />
                  </div>
                  
                  <div class="field">
                    <label for="email" class="label-xs">Email Address *</label>
                    <input type="email" id="email" v-model="form.email" required />
                  </div>
                  
                  <div class="field">
                    <label for="phone" class="label-xs">Phone (Optional)</label>
                    <input type="tel" id="phone" v-model="form.phone" />
                  </div>
                  
                  <div class="field">
                    <label for="service" class="label-xs">Service Interest</label>
                    <select id="service" v-model="form.service">
                      <option value="" disabled>Select a service</option>
                      <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
                    </select>
                  </div>
                  
                  <div class="field">
                    <label for="message" class="label-xs">Message *</label>
                    <textarea id="message" v-model="form.message" rows="4" required></textarea>
                  </div>
                  
                  <p v-if="error" class="error-msg">{{ error }}</p>
                  
                  <button type="submit" class="submit-btn btn-pill btn-pill-gold" style="width:100%">
                    <span class="btn-pill-inner" style="width:100%; justify-content: center;">Send Message</span>
                  </button>
                </form>
              </div>
              
              <div v-else key="success" class="success-state">
                <div class="success-icon">✨</div>
                <h2 class="success-title">Thank you.</h2>
                <p class="success-sub">We'll be in touch within 24 hours.</p>
                <button @click="submitted = false" class="btn-pill">
                  <span class="btn-pill-inner">Send Another Message</span>
                </button>
              </div>
            </Transition>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding: 9rem 0 5rem;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .contact-page {
    padding: 10rem 0 6rem;
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: 7fr 5fr;
    gap: 4rem;
  }
}

/* Left column */
.contact-heading {
  margin-bottom: 1.5rem;
}

.contact-sub {
  max-width: 32rem;
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.email-link {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  text-underline-offset: 4px;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: var(--color-text);
  text-decoration: underline;
}

.contact-address {
  font-style: normal;
}

.address-label {
  margin-bottom: 0.75rem;
}

.address-name {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.address-detail {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.address-phone {
  margin-top: 0.75rem;
  font-size: 0.875rem;
}

.address-phone a {
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.address-phone a:hover {
  color: var(--color-text);
}

.address-hours {
  font-size: 0.875rem;
  color: var(--color-text-dim);
  margin-top: 0.25rem;
}

/* Right column: Form card */
.form-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  padding: 2.5rem 2rem;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}

@media (min-width: 768px) {
  .form-card {
    padding: 3rem 2.5rem;
  }
}

.form-title {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--color-text);
}

.field {
  margin-bottom: 1.25rem;
}

.field label {
  display: block;
  margin-bottom: 0.5rem;
}

input, select, textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 400;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--color-gold);
  background-color: rgba(255, 255, 255, 0.06);
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C9A84C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}

select option {
  background-color: var(--color-surface);
  color: var(--color-text);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.error-msg {
  color: #ff6b6b;
  margin-bottom: 1rem;
  font-size: 0.85rem;
}

.submit-btn {
  margin-top: 0.5rem;
}

/* Success state */
.success-state {
  text-align: center;
  padding: 3rem 1rem;
}

.success-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.success-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.success-sub {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
}
</style>
