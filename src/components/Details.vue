<template>
  <div class="flex-1">
    <img v-for="observation in observations" :src="this.observation.src">
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
