<template>
  <v-expansion-panel
    v-model="panel"
    :dark="dark"
    :light="light"
    :disabled="disabled"
    :expand="expand"
    :focusable="focusable"
    :inset="inset"
    :popout="popout"
    :readonly="readonly">

    <v-expansion-panel-content
      v-for="(item,i) in items"
      :key="i">
      <div slot="header">{{ item.header }}</div>
      <v-card>
        <v-card-text>{{ item.content }}</v-card-text>
      </v-card>
    </v-expansion-panel-content>

  </v-expansion-panel>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
          default: () => [
            { header: 'One', content: 'Content One' },
            { header: 'Two', content: 'Content Two' },
            { header: 'Three', content: 'Content Three' },
            { header: 'Four', content: 'Content Four' },
            { header: 'Five', content: 'Content Five' }
          ]
      },
      dark: Boolean,
      light: Boolean,
      disabled: Boolean,
      expand: Boolean,
      focusable: Boolean,
      inset: Boolean,
      popout: Boolean,
      readonly: Boolean,
      icon: Boolean,
    }
  }
</script>
