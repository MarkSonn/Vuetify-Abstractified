<template>
  <v-footer
    height="auto"
    :color="tabColor"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>{{ copyright }}</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<style scoped>
</style>

<script>
  export default {
    props: {
      tabColor: {
        type: String,
        default: 'primary lighten-1'
      },
      copyright: {
        type: String,
        default: "Your Organisation"
      },
      links: {
          type: String,
          default: [
            'Default 1',
            'Default 2',
            'Default 3'
          ]
      }
    }
  }
</script>
