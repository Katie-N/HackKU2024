<template>
  <div class="flex basis-1/3 flex-wrap justify-center">
    <div v-for="(observation, i) in observations">
      <img v-if="observation.id" :src="(imageString[i%4])" class="w-12 h-12" :class="(observation.id % 2 == 0)?'-scale-x-100':''">
      <div v-else class="w-12 h-12"></div>
    </div>
  </div>
</template>
<script>
export default {
data() {
    return {
      imageString: ['/src/assets/images/Duck.png', 'src/assets/images/Butterfly.png', 'src/assets/images/Dandelion.png', 'src/assets/images/Mushroom.png']
    }
  },
  props: ['observations'],
}
</script>
