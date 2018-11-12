<template>
  <v-toolbar
    :dark="dark"
    :light="light"
    :color="color"
    :dense="dense"
    :flat="flat">

    <v-toolbar-side-icon v-if="sidebar"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <slot>
      <!-- Default buttons and actions -->
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

<script>
export default {
    props: {
      title: {
        type: String,
        default: 'Example Title'
      },
      dark: {
        type: Boolean,
        default: true
      },
      light: Boolean,
      color: {
        type: String,
        default: "primary"
      },
      dense: Boolean,
      flat: Boolean,
      sidebar: Boolean
    }
}
</script>
