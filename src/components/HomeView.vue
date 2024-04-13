<template>
<button @click="syncINat">Report Findings!</button>
  <img src="../assets/images/Hub World.png" class="w-screen h-screen absolute top-0 left-0 z-0">
  <BulletinBoard />
  <BulletinBoardLarge />


  <p v-for="obs in observations" class="font-pixel bg-yellow-200">{{obs.species_guess}}</p>
</template>

<script>
import BulletinBoard from './BulletinBoard.vue';
import BulletinBoardLarge from './BulletinBoardLarge.vue';
export default {
  components: {
    BulletinBoard,
    BulletinBoardLarge,
  },
  data() {
    return {
      observations: [],
    }
  },
  methods: {
    async syncINat() {
      const response = await fetch('https://api.inaturalist.org/v1/observations?user_id=katie-n&order=desc&order_by=created_at', {
          headers: {
              'Accept': 'application/json'
          }
      });

      const obs = await response.json();
      this.observations = obs.results;
      // this.observations = ["Hi"]

      console.log(this.observations)
    }
  }
}
</script>
