<template>
  <div class="base-dialog">
    <transition name="fade">
      <div class="dialog-mask" v-show="show" @click="$emit('maskclick')"></div>
    </transition>
    <transition name="scale">
      <div class="dialog-body" v-show="show">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>
.base-dialog {
  .dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }
  .dialog-body {
    position: fixed;
    z-index: 1001;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left top;
    box-shadow: 0 2px 10px 0.5px rgba(0, 0, 0, 0.1);
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-to,
  .fade-leave {
    opacity: 1;
  }
  .scale-enter,
  .scale-leave-to {
    transform: scale(0.3) translate(-50%, -50%);
    opacity: 0;
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.3s ease;
  }
  .scale-enter-to,
  .scale-leave {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
}
</style>
