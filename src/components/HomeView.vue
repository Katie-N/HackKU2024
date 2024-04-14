<template>
  <!-- <button @click="syncINat" class="absolute z-30 bg-white">Report Findings!</button> -->
  <img src="../assets/images/Hub World.png" class="w-screen h-screen absolute top-0 left-0 z-0">
  <img src="../assets/images/CrowCaw.png" class="absolute left-37/100 top-80 w-20 z-10" @click="interactWithCrow" >
  <BulletinBoard @click="showBulletin = true; showSyncPrompt = false" class="cursor-pointer" />
  <BulletinBoardLarge v-if="showBulletin" @closeBulletinBoard="showBulletin = false" class="z-20"/>
  <Plot class="w-56 h-24 bg-transparent absolute left-1/5 top-80" :observations="this.observations.slice(0,2).concat('').concat(this.observations.slice(2,4)).concat('').concat(this.observations.slice(4,6))" @obsSelected="this.selectedObs = $event" />
  <Plot class="w-56 h-24 bg-transparent absolute right-1/5 top-80" :observations="this.observations.slice(9,12).concat('').concat(this.observations.slice(12))" @obsSelected="this.selectedObs = $event" />

  <Chat v-if="showSyncPrompt" @closeChat="showSyncPrompt=false" text="Do you have more discoveries for the island?" character="crow" interactionPrompt="Report Findings!" @promptButtonPressed="syncINat" />

  <Alien class="absolute w-24 left-0 right-0 m-auto top-1/2 h-min"/>

  <Card v-if="this.selectedObs" :observation="this.selectedObs" class="absolute bg-white w-screen h-screen left-0 right-0 z-30" @deselectObs="this.selectedObs=null" />
</template>

<script>
import BulletinBoard from './BulletinBoard.vue';
import BulletinBoardLarge from './BulletinBoardLarge.vue';
import Plot from './Plot.vue';
import Chat from './Chat.vue';
import Alien from './Alien.vue';
import Card from './Card.vue';

export default {
  components: {
    BulletinBoard,
    BulletinBoardLarge,
    Plot,
    Chat,
    Alien,
    Card,
  },
  data() {
    return {
      observations: [],
      showBulletin: false,
      showSyncPrompt: false,
      selectedObs: null,
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
    },
    interactWithCrow() {
      this.showSyncPrompt = true;
    }
  }
}
</script>
