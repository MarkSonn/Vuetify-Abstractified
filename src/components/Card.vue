<template>
  <v-flex my-3 xs12 sm4 offset-sm4>
    <v-card
    :raised="raised"
    :ripple="ripple"
    :to="to"
    >

      <slot name="image"></slot>

      <v-card-title primary-title>
        <!-- QUESTION: Is this dev needed + use v-if to conditionally render if titles exist -->
        <div>
          <div class="headline">{{ title }}</div>
          <span class="grey--text">{{ subtitle }}<br><br></span>
          <slot></slot>
        </div>
      </v-card-title>

      <v-card-actions>
        <slot name="actions"></slot>

        <template v-if="extend">
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </template>
      </v-card-actions>

      <v-slide-y-transition v-if="extend">
        <v-card-text v-if="show">
          {{ extend }}
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-flex>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
  export default {
    props: {
      title: String,
      subtitle: String,
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
