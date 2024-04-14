<template>
    <div @click="$emit('closeChat')">
      <div class="w-screen h-1/3 absolute bottom-0 left-0 bg-white font-pixel text-2xl p-5">
        <p class="w-3/4">{{ text }} <br>- {{character}}</p>
        <button v-if="interactionPrompt" @click="$emit('promptButtonPressed');" class="font-bold border-2 rounded p-2 absolute left-1/2" >{{ interactionPrompt }}</button>
      </div>
      <img :src="this.characterPortrait" class="w-44 absolute right-12 bottom-12 -scale-x-100">
    </div>
</template>

<script>
export default {
data() {
    return {
      characterPortrait: "/src/assets/images/CrowCaw.png"
    }
  },
  props: ['text', 'character', 'interactionPrompt'],
  methods:{
  },
}
</script>
