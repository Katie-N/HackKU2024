<template>
  <!-- Background -->
  <img src="../assets/images/Hub World.png" class="w-screen h-screen absolute top-0 left-0 z-0">

  <!-- Crow -->
  <img src="../assets/images/CrowCaw.png" class="absolute left-37/100 top-80 w-20 z-10 cursor-pointer" @click="interactWithCrow" >

  <!-- Bulletin Board -->
  <BulletinBoard @click="openBulletin" class="cursor-pointer" />
  <BulletinBoardLarge v-if="showBulletin" @closeBulletinBoard="showBulletin = false" class="z-20"/>

  <!-- Garden -->
  <Plot class="w-56 h-24 bg-transparent absolute left-1/5 top-80" :observations="this.observations.slice(0,2).concat('').concat(this.observations.slice(2,4)).concat('').concat(this.observations.slice(4,6))" @obsSelected="this.selectedObs = $event; playClickSound()" />
  <Plot class="w-56 h-24 bg-transparent absolute right-1/5 top-80" :observations="this.observations.slice(9,12).concat('').concat(this.observations.slice(12))" @obsSelected="this.selectedObs = $event; playClickSound()" />

  <Chat v-for="line in crowDialogue.slice().reverse()" @closeChat="crowDialogue.splice(0,1)" :text="line" character="crow" />

  <!-- Chat Overlay -->
  <Chat v-if="showSyncPrompt" @closeChat="showSyncPrompt=false" text="Do you have more discoveries for the island?" character="crow" interactionPrompt="Report Findings!" @promptButtonPressed="syncINat(); buttonInteraction()" />

  <!-- Stewart the Alien -->
  <Alien class="absolute w-24 left-0 right-0 m-auto top-1/2 h-min"/>

  <!-- Shows the details of every plant in the garden -->
  <Card v-if="this.selectedObs" :observation="this.selectedObs" class="z-30" @deselectObs="this.selectedObs=null" />

  <!-- Easter egg (or should we say "duck egg") This div listens for a click over the duck in the waterfall and gives a big quack! -->
  <div class="absolute bg-transparent cursor-pointer z-10 w-12 h-12 right-28 bottom-28" @click="quack"></div>

  <!-- Audio Controls -->
  <Mute @click="playSoundtrack" v-if="this.muted" class="absolute w-24 h-24 m-8 cursor-pointer" />
  <Unmute @click="muteSoundtrack" v-if="!this.muted" class="absolute w-24 h-24 m-8 cursor-pointer" />
</template>

<script>
import BulletinBoard from './BulletinBoard.vue';
import BulletinBoardLarge from './BulletinBoardLarge.vue';
import Plot from './Plot.vue';
import Chat from './Chat.vue';
import Alien from './Alien.vue';
import Card from './Card.vue';
import Mute from './Mute.vue';
import Unmute from './Unmute.vue';

export default {
  components: {
    BulletinBoard,
    BulletinBoardLarge,
    Plot,
    Chat,
    Alien,
    Card,
    Mute,
    Unmute,
  },
  data() {
    return {
      observations: [],
      showBulletin: false,
      showSyncPrompt: false,
      selectedObs: null,
      muted: true,
      soundtrack: new Audio('/src/assets/sounds/BGMAtmosphere.mp3'),
      quackSound1: new Audio('/src/assets/sounds/Quack1.mp3'),
      quackSound2: new Audio('/src/assets/sounds/Quack2.mp3'),
      quackCounter: 0,
      crowDialogue : ["Hey pal, welcome to the site. Since its your first day, I’ll give you the rundown of how we do things around here.","First! See the bulletin board next to me? That’s where you communicate with the outside world."," You can operate the human that the management team gave you to take pictures of what they see on the surface."," You’ll then upload those pictures here so that the data can be distributed.","Sometimes you’ll get requests from scientists or the management team to observe a specific species.","If you complete their request, they tend to give you neat rewards!","We like to keep a leader board of everyone working in the area. It keeps spirits high when things are mostly… mundane.","We would also like you to directly observe species here on the island. ","To accomodate you, the island has been designed to fabricate new species daily after you’ve recorded their data.","Keep an eye out for any activity you might see scuttling across the ground!", "Well pal, that’s all I’ve got for now. I’ll keep you posted if there’s anything new to know. Other than that, start collecting that data! *CAW*"]
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
      console.log(this.observations)
    },
    playCrowSound() {
      var audio = new Audio('/src/assets/sounds/caw.mp3');
      audio.volume = 0.4;
      audio.play();
    },
    interactWithCrow() {
      this.showSyncPrompt = true;
      this.playCrowSound();
    },
    playSoundtrack() {
      this.muted = false;
      // We only want to start playing the soundtrack if the track is not already playing
      if (this.soundtrack.currentTime == 0) {
        this.soundtrack.volume = 0.5;
        this.soundtrack.loop = true;
        this.soundtrack.play();
      }
      this.soundtrack.muted = false;
    },
    muteSoundtrack() {
      this.soundtrack.muted = true;
      this.muted = true;
    },
    playClickSound() {
      var audio = new Audio('/src/assets/sounds/Click.mp3');
      audio.play();
    },
    quack() {
      if (this.quackCounter % 2 == 0) {
        this.quackSound1.play();
      } else {
        this.quackSound2.play();
      }
      this.quackCounter++;
    },
    openBulletin() {
      this.showBulletin = true;
      this.showSyncPrompt = false;
      this.playClickSound();
    },
    buttonInteraction() {
      this.playClickSound();
    }
  }
}
</script>
