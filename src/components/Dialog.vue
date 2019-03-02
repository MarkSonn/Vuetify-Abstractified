<template>

    <!-- To-Do List:
        Loader -->

  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      :fullscreen="fullscreen"
      :scrollable="scrollable"
      :width="width">
      <v-btn
        slot="activator"
        :color="color"
        dark>
        {{ label }}
      </v-btn>

      <v-card
        :color="cardColor">
        <!-- Need to fix up headerColor (should be grey on default) -->
        <v-card-title
          :class="headerColor"
          class="headline lighten-2"
          primary-title>
          <v-btn icon dark v-if="fullscreen" @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          {{ header }}
        </v-card-title>

        <v-card-text>
         <slot></slot>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :color="promptColor"
            flat
            @click="dialog = false">
            {{ prompt }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: {
        width: Number,
        color: {
            default: "primary",
            type: String
        },
        label: String,
        header: String,
        headerColor: {
            default: "grey",
            type: String
        },
        cardColor: String,
        prompt: String,
        promptColor: {
            default: "primary",
            type: String
        },
        fullscreen: {
            default: false,
            type: Boolean
        },
        scrollable: {
            default: true,
            type: Boolean
        }
    },
    data () {
      return {
        dialog: false
      }
    },

    /* watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      }
    } */
  }
</script>
