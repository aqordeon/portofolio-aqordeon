<script setup lang="ts">
const SITE_URL = 'https://tokotangankanan.com'

// Sitewide structured data: identifies the brand (Organization) and the site
// (WebSite) to Google. Helps with the Knowledge Panel / branding in search and
// is a prerequisite for sitelinks.
const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Toko Tangan Kanan',
      url: SITE_URL,
      logo: `${SITE_URL}/ttk_logo_1000.jpg`,
      image: `${SITE_URL}/ttk_logo_1000.jpg`,
      description: 'Koleksi permainan kartu untuk nongkrong, pasangan, dan keluarga.',
      sameAs: [
        'https://www.instagram.com/tokotangankanan',
        'https://www.tiktok.com/@tokotangankanan',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Toko Tangan Kanan',
      inLanguage: 'id-ID',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

useHead({
  htmlAttrs: {
    class: 'text-slate-700'
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(siteJsonLd),
    },
  ],
})
</script>


<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
