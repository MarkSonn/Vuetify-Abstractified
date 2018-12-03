<template>
  <v-footer
    height="auto"
    :color="color + ' lighten-1'">
    <v-layout
      justify-center
      row
      wrap>
      <v-btn
        v-for="(tab, i) in tabs"
        :key="i"
        color="white"
        flat
        round
        :href="tab.link">
        {{ tab.label }}
      </v-btn>
      <v-flex
        :class="color"
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12>
        &copy;2018 — <strong>{{ copyright }}</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'secondary'
      },
      copyright: {
        type: String,
        default: "Your Organisation"
      },
      tabs: {
          type: Array,
          default: () => [
            {label: 'Default 1', link: '#one'},
            {label: 'Default 2', link: '#two'},
            {label: 'Default 3', link: '#three'}
          ]
      }
    }
  }
</script>
