<template>
  <div :style="styles" class="button">
    {{ title }}
  </div>
</template>
<script>
export default {
  props: ['background', 'title', 'color', 'width', 'height', 'fontSize', 'transparent'],
  computed: {
    styles () {
      return {
        background: this.background,
        color: this.color,
        width: this.width,
        height: this.height,
        'font-size': this.fontSize,
        transparent: this.transparent
      }
    }
  },
  mounted () {

  }
}
</script>
<style lang="css" scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
