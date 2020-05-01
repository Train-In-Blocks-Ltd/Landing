import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '../components/Home.vue'
import FeaturesComponent from '../components/Features.vue'
import PricingComponent from '../components/Pricing.vue'
import RoadmapComponent from '../components/Roadmap.vue'
import ExploreComponent from '../components/Explore.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeComponent,
    },
    {
      path: '/features',
      component: FeaturesComponent,
    },
    {
      path: '/pricing',
      component: PricingComponent,
    },
    {
      path: '/roadmap',
      component: RoadmapComponent,
    },
    {
      path: '/explore',
      component: ExploreComponent,
    }
  ]
})

export default router
