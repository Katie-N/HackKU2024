<template>
    <div tabindex="1" @keyup.esc="$emit('deselectObs')">
      <div class="w-1/3 h-1/2 overflow-hidden">
        <img :src="this.originalPhotoUrl" class="max-w-full object-cover">
      </div>
      <a :href="observation.taxon.wikipedia_url">{{observation.taxon.wikipedia_url}}</a>
      <p>Taxon Name: {{observation.taxon.iconic_taxon_name}}</p>
      <p>Common Name: {{observation.taxon.preferred_common_name}}</p>
      <p>Observed On: {{observation.observed_on_string}}</p>
      <p v-if="observation.place_guess">Location: {{observation.place_guess}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    originalPhotoUrl() {
      return this.observation.photos[0].url.replace("square", "original")
    },
  },
  props: ['observation'],
  methods:{
  },
}
</script>
