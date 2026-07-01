// v-reveal: fades/slides an element into view when it scrolls into the viewport.
//
// Usage:
//   <div v-reveal>...</div>
//   <div v-reveal="{ delay: 150 }">...</div>   // stagger by ms
//
// Client-only (IntersectionObserver) — on the server the element simply
// renders with the base `.reveal` styles and is revealed once hydrated.

import type { DirectiveBinding } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
    const reduceMotion =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    const observer =
        typeof IntersectionObserver !== 'undefined'
            ? new IntersectionObserver(
                  (entries, obs) => {
                      for (const entry of entries) {
                          if (entry.isIntersecting) {
                              entry.target.classList.add('reveal-in')
                              obs.unobserve(entry.target)
                          }
                      }
                  },
                  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
              )
            : null

    nuxtApp.vueApp.directive('reveal', {
        mounted(el: HTMLElement, binding: DirectiveBinding) {
            const delay = binding.value?.delay
            if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)

            el.classList.add('reveal')

            if (reduceMotion || !observer) {
                el.classList.add('reveal-in')
                return
            }
            observer.observe(el)
        },
        unmounted(el: HTMLElement) {
            observer?.unobserve(el)
        },
    })
})
