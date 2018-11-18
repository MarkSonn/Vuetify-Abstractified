<template>
  <v-app>

    <Navbar></Navbar>





    <!-- NOTE: Quick demo -->

    <!-- <Navbar title="Hi Dabs">
      <v-btn color="purple">Hello</v-btn>
    </Navbar>

    <Card title="Hello" subtitle="Daniel">This is example text</Card>

    <ExpansionPanel popout></ExpansionPanel>

    <Timeline></Timeline> -->



    <!-- <Navbar color="secondary" title="Hi there">
      <v-btn color="purple">Hello</v-btn>
    </Navbar>

    <Card title="Hello" subtitle="Lol">Hello</Card>

    <v-flex ma-3>
      <ExpansionPanel popout ></ExpansionPanel>
    </v-flex> -->

    <!-- NOTE: View Router -->
    <!-- <v-content>
      <router-view/>
    </v-content> -->

  </v-app>
</template>

<script>
import * as components from './components'
export default {
  components,
  name: 'App'
}
</script>
