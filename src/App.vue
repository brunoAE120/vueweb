<template>
  <v-app>
    <v-toolbar 
    color="orange"
    dense
    elevation="4"
    outlined
    shaped>
    <v-overflow-btn
      :items="dropdown_font"
      label="Select font"
      hide-details
      class="pa-0"
    ></v-overflow-btn>

    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-divider vertical></v-divider>

      <v-overflow-btn
        :items="dropdown_edit"
        editable
        label="Select size"
        hide-details
        class="pa-0"
        overflow
      ></v-overflow-btn>

      <v-divider vertical></v-divider>

      <v-spacer></v-spacer>

      <v-btn-toggle
        v-model="toggle_multiple"
        color="primary"
        dense
        group
        multiple
      >
        <v-btn
          :value="1"
          text
        >
          <v-icon>mdi-format-bold</v-icon>
        </v-btn>

        <v-btn
          :value="2"
          text
        >
          <v-icon>mdi-format-italic</v-icon>
        </v-btn>

        <v-btn
          :value="3"
          text
        >
          <v-icon>mdi-format-underline</v-icon>
        </v-btn>

        <v-btn
          :value="4"
          text
        >
          <v-icon>mdi-format-color-fill</v-icon>
        </v-btn>
      </v-btn-toggle>

      <div class="mx-4"></div>

      <v-btn-toggle
        v-model="toggle_exclusive"
        color="primary"
        dense
        group
      >
        <v-btn
          :value="1"
          text
        >
          <v-icon>mdi-format-align-left</v-icon>
        </v-btn>

        <v-btn
          :value="2"
          text
        >
          <v-icon>mdi-format-align-center</v-icon>
        </v-btn>

        <v-btn
          :value="3"
          text
        >
          <v-icon>mdi-format-align-right</v-icon>
        </v-btn>

        <v-btn
          :value="4"
          text
        >
          <v-icon>mdi-format-align-justify</v-icon>
        </v-btn>
      </v-btn-toggle>
    </template>
  </v-toolbar>

    <v-navigation-drawer
    v-model="drawer"
      absolute>
      <v-list-item>

        <v-list-item-content>
          <v-list-item-title>Bruno Almeida</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

       <v-btn-toggle
        v-model="toggle_exclusive"
        color="primary"
        dense
        group
      >
        <v-btn
          :value="1"
          text
        >
          <v-icon>mdi-format-align-left</v-icon>
        </v-btn>

        <v-btn
          :value="2"
          text
        >
          <v-icon>mdi-format-align-center</v-icon>
        </v-btn>

        <v-btn
          :value="3"
          text
        >
          <v-icon>mdi-format-align-right</v-icon>
        </v-btn>

        <v-btn
          :value="4"
          text
        >
          <v-icon>mdi-format-align-justify</v-icon>
        </v-btn>
      </v-btn-toggle>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>

    <v-app-bar
    >
      
      <v-spacer></v-spacer>

      
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-main>
      <Footer/>
      <BottomNavBar/>
      <NavBar/>
      <StatusBar/>
    </v-main>
  </v-app>
</template>

<script>
import BottomNavBar from './components/BottomNavBar.vue';
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import StatusBar from './components/StatusBar.vue';

export default {
  name: 'App',

  components: {
    Footer,
    BottomNavBar,
    NavBar,
    StatusBar


  },

  data: () => ({

    
    
  }),
};
</script>
