// v-reveal: fades/slides an element into view when it scrolls into the viewport.
//
// Usage:
//   <div v-reveal>...</div>
//   <div v-reveal="{ delay: 150 }">...</div>   // stagger by ms
//
// Registered universally (NOT `.client`) so the server can resolve the
// directive during SSR — a client-only directive makes Vue crash on
// `getSSRProps` during server render. The actual reveal work (Intersection
// Observer) is guarded to the client; on the server the element just renders
// visible and animates in once hydrated.

import type { DirectiveBinding } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
    let observer: IntersectionObserver | null = null
    let reduceMotion = false

    if (import.meta.client) {
        reduceMotion =
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

        observer =
            'IntersectionObserver' in window
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
    }

    nuxtApp.vueApp.directive('reveal', {
        // Present so Vue's SSR renderer has something to call; adds nothing.
        getSSRProps: () => ({}),

        mounted(el: HTMLElement, binding: DirectiveBinding) {
            if (import.meta.server) return

            const delay = binding.value?.delay
            if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)

            el.classList.add('reveal')

            // No observer / reduced motion: just show it, no animation.
            if (reduceMotion || !observer) {
                el.classList.remove('reveal')
                return
            }

            // Once the reveal animation finishes, strip the helper classes so
            // the element returns to its natural state — this keeps `animation:
            // ... both` from locking `transform` and breaking hover lifts.
            // Guard on animationName so bubbled events from floating children
            // (ttk-float, ttk-shine, …) don't clear it early.
            const onEnd = (e: AnimationEvent) => {
                if (e.animationName !== 'ttk-reveal') return
                el.classList.remove('reveal', 'reveal-in')
                el.style.removeProperty('--reveal-delay')
                el.removeEventListener('animationend', onEnd)
            }
            el.addEventListener('animationend', onEnd)

            observer.observe(el)
        },

        unmounted(el: HTMLElement) {
            observer?.unobserve(el)
        },
    })
})
