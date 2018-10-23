<template>
  <v-app dark>

    <!-- ************************************************** -->
    <!-- ************************************************** -->
    <!-- NOTE: Working space -->
    <!-- ************************************************** -->
    <!-- ************************************************** -->



    <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
    <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->


    <!-- ************************************************** -->
    <!-- ************************************************** -->
    <!-- NOTE: Quick demo -->
    <!-- ************************************************** -->
    <!-- ************************************************** -->

    <Navbar dark color="primary" title="Vuetify Wrapper"></Navbar>
    <Card title="Demo" subtitle="Card">Content goes here</Card>
    <Table class="container">Example Table</Table>
    <v-btn color="green" @click="visible = true">Show Snackbar</v-btn>
    <Snackbar :visible="visible" @closed="visible = false">Wow tasty!</Snackbar>
    <Footer copyright="Mark Sonn"/>

    <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
    <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->



    <!-- ************************************************** -->
    <!-- ************************************************** -->
    <!-- NOTE: More complex demo -->
    <!-- ************************************************** -->
    <!-- ************************************************** -->

    <!-- <Navbar dark color="primary" title="Vuetify Wrapper">
      <v-btn color="secondary">Link One</v-btn>
      <v-btn color="accent">Link Two</v-btn>
    </Navbar>

    <Card title="Demo" subtitle="Card" extend="Expanded text goes here!">
      <v-img slot="image" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
      Test
      <template slot="actions">
        <v-btn flat>Arbitrary</v-btn>
        <v-btn flat color="purple">Buttons</v-btn>
      </template>
    </Card>

    <Table class="container" :headers="headers" :items="desserts">Example Table</Table>

    <v-btn @click="visible = true" color="green">Show Snackbar</v-btn>
    <Snackbar :visible="visible" @closed="visible = false">
      Wow tasty!
      <template slot="close">
        <v-icon>close</v-icon>
      </template>
    </Snackbar>

    <Footer
      :links="links"
      copyright="Mark Sonnenschein"
      tabColor="primary lighten-1">
      Lol
    </Footer> -->

    <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
    <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->

    <!-- <v-content>
      <router-view/>
    </v-content> -->

  </v-app>
</template>

<style scoped>
  .container{
    width: 90%;
    margin-top: 40px;
    margin-bottom: 40px;
  }
</style>

<script>
import * as components from '@/components'
export default {
  components,
  name: 'App',
  data: () => ({
    headers: [
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
    ],
    desserts: [
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
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%'
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%'
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%'
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%'
      }
    ],
    links: [
      'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
    ],
    visible: false
  })
}
</script>
