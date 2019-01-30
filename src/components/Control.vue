<template>
    <!--
        v-if="type === 'checkbox'"
        v-if="type === 'radio'"
        v-if="type === 'switch'" -->

        <!-- To-Do List
            - Have to fix labels (v-for)
            - Checkbox: Boolean
            - Checkbox: Arrays
            - Checkbox: States
            - Colors (done!)
            - Checkbox: Inline with textfield
            - Radios: Direction
            - Switch: Boolean
            - Switch: Arrays
            - Switch: States
            - Label Slot
        -->

    <v-container fluid px-0>
        <v-checkbox
          :color="color"
          :label="label"
          v-model="checkbox"
        ></v-checkbox>
        <v-radio-group v-model="radioGroup" v-for="name in label">
          <v-radio
            :color="color"
            :label="label"
          ></v-radio>
        </v-radio-group>
        <v-switch
          :color="color"
          :label="label"
          v-model="switch1"
        ></v-switch>
    </v-container>
</template>

<script>
  export default {
    props: {
        color: {
            default: "primary",
            type: String
        },
        type: {
            default: "checkbox",
            type: String
        },
        condition: {
            default: false,
            type: Boolean
        },
        label: {
            default: "Control",
            type: String
        }
    },
    data () {
      return {
        state: true,
        checkbox: true,
        radioGroup: 1,
        switch1: true
      }
    }
  }
</script>
