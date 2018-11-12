<template>
  <!-- TODO: Figure out how to transfer props -->
  <v-flex my-3 xs12 md4 offset-md4 sm4 offset-sm4>
    <v-card
      :dark="dark"
      :light="light"
      :color="color"
      :raised="raised"
      :ripple="ripple"
      :to="to"
      >

      <slot name="image"></slot>

      <v-card-title primary-title>
        <div>
          <div class="headline" v-if="title">{{ title }}</div>
          <span class="grey--text" v-if="subtitle">{{ subtitle }}<br><br></span>
          <br v-else>
          <slot></slot>
        </div>
      </v-card-title>

      <v-card-actions v-if="extend || this.$slots.actions">
        <slot name="actions"></slot>

        <template v-if="extend">
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </template>
      </v-card-actions>

      <v-slide-y-transition v-if="extend">
        <v-card-text v-if="show">{{ extend }}</v-card-text>
      </v-slide-y-transition>

    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      title: String,
      subtitle: String,
      color: String,
      dark: Boolean,
      light: Boolean,
      ripple: Boolean,
      raised: Boolean,
      extend: Boolean,
      to: String
    },
    data: () => ({
      show: false
    })
  }
</script>
