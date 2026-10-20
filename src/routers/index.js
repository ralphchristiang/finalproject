import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BSITView from '../views/BSITView.vue'
import BSCSView from '../views/BSCSView.vue'
import BSDMIAView from '../views/BSDMIAView.vue'
import BLISView from '../views/BLISView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Each path has its own Vue view. The main page also has section anchors.
  routes: [
    { path: '/', component: HomeView, meta: { title: 'College of Computer Studies' } },
    { path: '/programs/bsit', component: BSITView, meta: { title: 'BSIT' } },
    { path: '/programs/bscs', component: BSCSView, meta: { title: 'BSCS' } },
    { path: '/programs/bsdmia', component: BSDMIAView, meta: { title: 'BSDMIA' } },
    { path: '/programs/blis', component: BLISView, meta: { title: 'BLIS' } },
    // Return to Home if someone types a path that does not exist.
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Restore the position when the browser's Back or Forward button is used.
    if (savedPosition) return savedPosition

    // A hash such as #programs matches the id of a section in HomeView.
    if (to.hash) {
      // Leave room for the sticky header, including when its links wrap on phones.
      const header = document.querySelector('.site-header')
      const headerHeight = header ? header.offsetHeight : 0
      return { el: to.hash, top: headerHeight + 16, behavior: 'smooth' }
    }

    // Start at the top when opening a program page.
    return { top: 0 }
  },
})

// Give each page a useful browser-tab title after navigation.
router.afterEach(function (to) {
  document.title = to.meta.title + ' | CPU CCS'
})

export default router
