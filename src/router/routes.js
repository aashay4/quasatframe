
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/2-in-binary/',
    component: () => import('pages/2inbinary.vue')
  },
  {
    path: '/3-in-binary/',
    component: () => import('pages/3inbinary.vue')
  },
  {
    path: '/decimal-to-binary/',
    component: () => import('pages/decimalbinary.vue')
  },
  {
    path: '/write-6-in-binary/',
    component: () => import('pages/6inbinary.vue')
  },
  {
    path: '/how-to-write-10-in-binary/',
    component: () => import('pages/10inbinary.vue')
  },
  {
    path: '/22inbinary/',
    component: () => import('pages/22inbinary.vue')
  },
  {
    path: '/ascii-to-binary/',
    component: () => import('pages/asciibinary.vue')
  },
  {
    path: '/binary-converter/',
    component: () => import('pages/binaryconverter.vue')
  },
  {
    path: '/binary-to-decimal/',
    component: () => import('pages/binarydecimal.vue')
  },
  {
    path: '/binary-to-hexadecimal/',
    component: () => import('pages/binaryhexadecimal.vue')
  },
  {
    path: '/binary-numbers/',
    component: () => import('pages/binarynumbers.vue')
  },
  {
    path: '/binary-to-octal/',
    component: () => import('pages/binaryoctal.vue')
  },
  {
    path: '/blog/',
    component: () => import('pages/blogs.vue')
  },
  {
    path: '/about-creator/',
    component: () => import('pages/creator.vue')
  },
  {
    path: '/decimal-to-fraction/',
    component: () => import('pages/decimalfraction.vue')
  },
  {
    path: '/decimal-to-hexadecimal/',
    component: () => import('pages/decimalhexadecimal.vue')
  },
  {
    path: '/decimal-to-octal/',
    component: () => import('pages/decimaloctal.vue')
  },
  {
    path: '/hexadecimal-to-binary-converter/',
    component: () => import('pages/hexadecimalbinary.vue')
  },
  {
    path: '/hexadecimal-to-decimal/',
    component: () => import('pages/hexadecimaldecimal.vue')
  },
  {
    path: '/hexadecimal-to-octal/',
    component: () => import('pages/hexadecimaloctal.vue')
  },
  {
    path: '/lan-local-area-network/',
    component: () => import('pages/lan.vue')
  },
  {
    path: '/octal-to-binary-converter/',
    component: () => import('pages/octalbinary.vue')
  },
  {
    path: '/octal-to-decimal/',
    component: () => import('pages/octaldecimal.vue')
  },
  {
    path: '/qr-code-reader/',
    component: () => import('pages/qrcodegenerator.vue')
  },
  {
  path: '/qr-code-generator/',
  component: () => import('pages/qrcodereader.vue')
  },
  {
  path: '/wake-on-lan/',
  component: () => import('pages/wakeonlan.vue')
  },
  {
  path: '/write-for-us/',
  component: () => import('pages/writeus.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
