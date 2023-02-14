export default {
  title: 'CoderBot Developer documentation',
  description: 'CoderBot Developer documentation',
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Description', link: '/Description' },
          { text: 'Getting Started', link: '/Getting_started' },
          { text: 'Deployment', link: '/Deployment' },
          { text: 'Hardware Architecture', link: '/Hardware_Architecture' },
          { text: 'Software Architecture', link: '/Software_Architecture' },
          { text: 'Backend API', link: '/api.md' },
          { text: 'Frontend', link: '/Frontend' },
          { text: 'Backend', link: '/Backend' },
        ]
      }
    ]
  },
  head: [
    ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XNTKRP57LY'}],
    ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-XNTKRP57LY');"]
  ]
}