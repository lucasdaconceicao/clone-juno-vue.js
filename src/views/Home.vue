<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-row  justify="center">
          <v-avatar class="my-8" color="red">
            <span class="white--text headline">{{usuarioLogado}}</span>
          </v-avatar>
        </v-row>
        <v-list dense>
          <v-list-item  link @click="mostrarPainel" >
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title >Painel</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="mostrarExtrato">
            <v-list-item-action>
              <v-icon>mdi-chart-pie</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Extrato</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item link>
            <v-list-item-action>
              <v-icon> mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Clientes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item link>
            <v-list-item-action>
              <v-icon> mdi-barcode</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Cobrancas</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title id="title-toolbar" class="mx-auto">Juno</v-toolbar-title>
      </v-app-bar>
  
      <v-content>
        <v-container
          class="fill-height"
          fluid
          id="container-principal"
        >
          <Extrato v-if="extrato"></Extrato>
           <Painel v-if="painel"/>

        </v-container>
      </v-content>
      <v-footer
        color="indigo"
        app
      >
        <span class="white--text">&copy; 2020</span>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
import Extrato from '@/components/Extrato.vue';
import Painel from '@/components/Painel.vue'
export default {
  name:'Home',
   props: {
    source: String,
  },
  components:{
    Extrato,
    Painel
  },
  data: () => ({
    drawer: null,
    painel:false,
    clientes:false,
    cobrancas:false,
    extrato:false
  }),
  
  methods:{
    limprarMenu(){
      this.painel=false;
      this.clientes=false;
      this.cobrancas=false;
      this.extrato=false;
    },
    mostrarExtrato(){
      this.limprarMenu()
      this.extrato=true;
    },
    mostrarPainel(){
      this.limprarMenu()
      this.painel=true;
    }
  },
   computed:{
      usuarioLogado(){
        return this.$store.state.nameLogin.substr(0,3);
      }
    }
}
</script>

<style scoped>
  #title-toolbar{
    font-size:1.85rem;
  }
  #container-principal{
    background-color:#EAEFF6;
  }
</style>