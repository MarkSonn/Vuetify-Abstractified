<template>
    <v-select
        v-bind="$attrs"
        :color="color"
        :items="items"
        :box="theme === 'box' ? true : false"
        :outline="theme === 'outline' ? true : false"
        :solo="theme === 'solo' ? true : false"
        :label="label"
        :multiple="multiple"
        :chips="chips"
        :attach="attach"
        :hint="hint"
        :condense="condense">
    <!-- <template
      slot="selection"
      slot-scope="{ item, index }"
    >
    <v-chip v-if="condenseCheck">
        <span
            v-if="index === 0">
            {{ item }}
        </span>
        </v-chip>
        <span
            v-if="index === 1"
            class="grey--text caption">
            (+{{ value.length - 1 }} others)
        </span>
    </template> -->
    </v-select>
    <!-- Need to fix up label, chips/multiple -->
</template>

<script>
  export default {
    props: {
        theme: String,
        color: String,
        label: String,
        attach: Boolean,
        hint: String,
        condense: Boolean,
        multiple: Boolean,
        chips: Boolean
    },
    data: () => ({
        select: { state: 'Florida', abbr: 'FL' },
        items: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],
        value: ['foo', 'bar', 'fizz'],
        // items: [
        //     { state: 'Florida', abbr: 'FL' },
        //     { state: 'Georgia', abbr: 'GA' },
        //     { state: 'Nebraska', abbr: 'NE' },
        //     { state: 'California', abbr: 'CA' },
        //     { state: 'New York', abbr: 'NY' }
        //   ]
        // items: ['uh','oh','ah','choo'],
    }),
    computed: {
        getSlot() {
            return this.$slots.default;
        },
        condenseCheck() {
            console.log("Multiple = " + this.multiple + ", Chips = " + this.chips);
            console.log("Condense = " + this.condense);
            if (this.condense === true) {
                console.log("yeet");
                this.chips = true;
                this.multiple = true;
            } else {
                console.log("neet");
                this.chips = false;
                this.multiple = false;
            }

            return this.condense;
        }
    }
  }
</script>
