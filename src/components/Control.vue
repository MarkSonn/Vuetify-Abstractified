<template>
    <!-- Lol it doesn't work rn
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
          v-if="type === 'checkbox'"
          :color="color"
          :label="label"
          v-model="checkbox"
        ></v-checkbox>
        <!-- Have to fix radio -->
        <!-- <v-radio-group v-model="radioGroup">
          <v-radio
            v-if="type === 'radio'"
            :color="color"
            :label="labelCheck"
          ></v-radio>
        </v-radio-group> -->
        <v-switch
          v-if="type === 'switch'"
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
        label: String
    },
    data () {
        return {
            state: true,
            checkbox: true,
            radioGroup: 1,
            switch1: true
        }
    },
    computed: {
        labelCheck() {
            let array = [];
            if(typeof(this.label) === String) {
                array.push(this.label);
                return array;
            } else if (typeof(this.label) === Array) {
                return this.label;
            }
        }
    }
  }
</script>
