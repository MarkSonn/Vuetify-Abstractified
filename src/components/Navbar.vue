<template>
  <v-toolbar :color="color" :dark="dark" :dense="dense" :flat="flat">

    <!-- Start -->
    <v-toolbar-side-icon v-if="sidebar"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <slot>
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </slot>

  </v-toolbar>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
export default {
    props: {
      title: {
        type: String,
        default: 'Example Title'
      },
      color: String,
      dark: Boolean,
      dense: Boolean,
      flat: Boolean,
      sidebar: Boolean
    }
}
</script>
