<template>
  <button :class="computedClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    computedClasses() {
      return ['btn', `btn-${this.variant}`, `btn-${this.size}`];
    },
  },
};
</script>

<style scoped>
.btn {
  width: 206px;
  height: 65px;
  border-radius: 44px;
  opacity: 1;
  color: #ffffff;
}

.btn-primary {
  background: #6250ff 0% 0% no-repeat padding-box;
}

.btn-secondary {
  background: #242424 0% 0% no-repeat padding-box;
  box-shadow:
    inset 0px 3px 6px #00000003,
    0px 3px 6px #0000001a;
}
</style>
