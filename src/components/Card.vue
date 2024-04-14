<template>
    <div tabindex="1" @keyup.esc="$emit('deselectObs')" class="absolute left-0 right-0 top-0 bottom-0 w-full h-full p-12 m-auto">
      <img class="w-full h-full" src="../assets/images/Book.png">
      <div class="w-1/3 h-1/2 overflow-hidden absolute top-1/4 left-1/8">
        <img :src="this.originalPhotoUrl" class="max-w-full object-cover">
      </div>
      <div class="w-1/3 h-1/2 p-12 absolute top-1/4 right-1/8">
        <h1 class="text-3xl bold font-pixel">Common Name: {{observation.taxon.preferred_common_name}}</h1>
        <a :href="observation.taxon.wikipedia_url" class="underline font-alien text-xl">Subpar Human Explanation</a>
        <p class="font-alien text-xl">Taxon Name: {{observation.taxon.iconic_taxon_name}}</p>
        <p class="font-alien text-xl">Observed On: {{observation.observed_on_string}}</p>
        <p class="font-alien text-xl" v-if="observation.place_guess">Location: {{observation.place_guess}}</p>
      </div>
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
