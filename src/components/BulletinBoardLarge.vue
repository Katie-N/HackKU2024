<template>
  <div tabindex="0" @keyup.esc="$emit('closeBulletinBoard')" class="absolute left-0 right-0 top-0 bottom-0 w-full h-full p-12 m-auto">
    <img class="w-full h-full" src="../assets/images/Bulletin Board.png">
    <button @click="displayWorldMap" class="absolute right-44 top-52 w-5/12 h-60 bg-transparent"></button>
    <button @click="displayQuest" class="absolute left-44 top-60 w-52 h-52 bg-transparent"></button>
    <button @click="displayStickyNote" class="absolute left-64 top-36 w-20 h-16 bg-transparent"></button>
    <TextBox v-if="showChat" :text="this.text" @closeChat="showChat=false" character="crow" />
  </div>
</template>

<script>
import TextBox from './Chat.vue';

export default {
  components: {
    TextBox,
  },
  data() {
    return {
      text: 'Here is some placeholder text',
      showChat: false,
    }
  },
  methods: {
    playClickSound() {
      var audio = new Audio('/src/assets/sounds/Click.mp3');
      audio.play();
    },
    playCrowSound() {
      var audio = new Audio('/src/assets/sounds/caw.mp3');
      audio.volume = 0.4;
      audio.play();
    },
    displayWorldMap() {
      this.text = "This is where you can see all of the places you've helped humans explore.";
      console.log("crack")
      this.showChat = true;
      this.playCrowSound();
    },
    displayQuest() {
      this.text = "No quests here. Check back later for more.";
      this.showChat = true;
      this.playCrowSound();
    },
    displayStickyNote() {
      this.text = "That's a sticky note - it doesn't do much...";
      this.showChat = true;
      this.playCrowSound();
    }
  },
}
</script>
