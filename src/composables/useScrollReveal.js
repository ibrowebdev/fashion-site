// Simple scroll reveal using IntersectionObserver
// Used as a custom Vue directive — NOT as a composable with lifecycle hooks.

const observers = new WeakMap()

export const vReveal = {
  mounted(el, binding) {
    const delay = binding.value?.delay || 0

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply stagger delay if provided
          if (delay) {
            entry.target.style.transitionDelay = `${delay}ms`
          }
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    observer.observe(el)
    observers.set(el, observer)
  },

  unmounted(el) {
    const observer = observers.get(el)
    if (observer) {
      observer.disconnect()
      observers.delete(el)
    }
  }
}
