<template>
  <div class="text-xs-center">
    <v-progress-circular
      v-if="theme === 'circular'"
      :size="size"
      :width="width"
      :color="color"
      indeterminate>
    </v-progress-circular>

    <v-progress-circular
      v-if="theme === 'rotate'"
      :rotate="rotate"
      :size="size"
      :width="width"
      :value="value"
      :color="color">
      {{ value }}
    </v-progress-circular>

    <v-progress-linear
      v-if="theme === 'linear'"
      v-model="value"
      :active="show"
      :indeterminate="query"
      :query="true"
      :color="color"
      :height="height"
      :value="value"
      :background-color="backgroundColor">
    </v-progress-linear>
  </div>
</template>

<script>
  export default {
    props: {
        theme: {
            default: "circular",
            type: String
        },
        size: {
            default: 50,
            type: Number
        },
        width: Number,
        color: {
            default: "primary",
            type: String
        },
        rotate: {
            default: 90,
            type: Number
        },
        height: {
            default: 7,
            type: Number
        },
        backgroundColor: String
    },
    data () {
        return {
            interval: {},
            value: 0,
            query: false,
            show: true
        }
    },
    beforeDestroy () {
        clearInterval(this.interval);
    },
    mounted () {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0)
            }
            this.value += 10
        }, 1000)
    } /*,
    methods: {
      queryAndIndeterminate () {
        this.query = true
        this.show = true
        this.value = 0

        setTimeout(() => {
          this.query = false

          this.interval = setInterval(() => {
            if (this.value === 100) {
              clearInterval(this.interval)
              this.show = false
              return setTimeout(this.queryAndIndeterminate, 2000)
            }
            this.value += 25
          }, 1000)
        }, 2500)
      }
    } */
  }
</script>
