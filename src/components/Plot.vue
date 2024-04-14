<template>
  <div class="flex basis-1/3 flex-wrap justify-center">
    <div v-for="observation in observations">
      <img v-if="observation.id" src="../assets/images/Duck.png" class="w-12 h-12" :class="(observation.id % 2 == 0)?'-scale-x-100':''">
      <div v-else class="w-12 h-12"></div>
    </div>
  </div>
</template>
<script>
export default {
data() {
    return {

    }
  },
  props: ['observations'],
}
</script>
