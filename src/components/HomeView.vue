<template>
  <img src="../assets/images/Attention.png">
  <button @click="syncINat">Report Findings!</button>
  <p v-for="obs in observations" class="font-pixel bg-yellow-200">{{obs.species_guess}}</p>
</template>

<script>
export default {
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
