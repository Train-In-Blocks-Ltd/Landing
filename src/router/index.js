import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../components/Home.vue'
import FeaturesComponent from '../components/Features.vue'
import PricingComponent from '../components/Pricing.vue'
import RoadmapComponent from '../components/Roadmap.vue'
import ExploreComponent from '../components/Explore.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomeComponent,
      meta: {
        title: 'Welcome'
      }
    },
    {
      path: '/features',
      component: FeaturesComponent,
      meta: {
        title: 'Features'
      }
    },
    {
      path: '/pricing',
      component: PricingComponent,
      meta: {
        title: 'Pricing'
      }
    },
    {
      path: '/roadmap',
      component: RoadmapComponent,
      meta: {
        title: 'Roadmap'
      }
    },
    {
      path: '/Explore',
      component: ExploreComponent,
      meta: {
        title: 'Explore'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
