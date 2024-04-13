import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import BulletinBoard from '../components/BulletinBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bulletin',
      name: 'bulletin',
      component: BulletinBoard
    }
  ]
})

export default router
