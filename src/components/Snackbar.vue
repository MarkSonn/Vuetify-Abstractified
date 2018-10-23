<template>
  <v-snackbar
    v-model="visible"
    :bottom="y === 'bottom'"
    :left="x === 'left'"
    :multi-line="mode === 'multi-line'"
    :right="x === 'right'"
    :timeout="0"
    :top="y === 'top'"
    :vertical="mode === 'vertical'">

    <slot></slot>
    <v-btn flat color="pink" @click="resetSnackbar">
      <slot name="close">Close</slot>
    </v-btn>

  </v-snackbar>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      y: {
        type: String,
        default: 'bottom'
      },
      x: String,
      mode: String
    },
    methods: {
      resetSnackbar() {
        this.visible = false
        this.$emit('closed')
      }
    }
  }
</script>
