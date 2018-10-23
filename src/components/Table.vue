<template>
  <v-card>

    <template v-if="hasTitle">
      <v-card-title>
        <slot></slot>
        <template v-if="search">
          <v-spacer></v-spacer>
          <v-text-field
            v-model="query"
            append-icon="search"
            label="Search"
            hide-details
          ></v-text-field>
        </template>
      </v-card-title>
    </template>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="query"
    >
      <template slot="items" slot-scope="{ item }">
        <td
          v-for="(header,i) in headers"
          :key="i"
          :class="header.align ? 'text-md-' + header.align:''"
          >
          {{ item[header.value] }}
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ query }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
  export default {
    props: {
      headers: {
        type: Array,
        default: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            value: 'name'
          },
          { text: 'Calories', align: 'center', value: 'calories' },
          { text: 'Fat (g)', align: 'center', value: 'fat' },
          { text: 'Carbs (g)', align: 'center', value: 'carbs' },
          { text: 'Protein (g)', align: 'center', value: 'protein' },
          { text: 'Iron (%)', align: 'center', value: 'iron' }
        ]
      },
      items: {
        type: Array,
        default: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          }
        ]
      },
      search: Boolean
    },
    computed: {
    	hasTitle() {
      	return this.$slots.default;
      }
    },
    data () {
      return {
        query: ''
      }
    }
  }
</script>
