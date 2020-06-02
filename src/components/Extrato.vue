<template>
    <v-container
          class="fill-height"
          fluid
        >
            <v-row >
                <v-col>
                    <h4>EXTRATO</h4> 
                </v-col>
            </v-row>
          <v-row class="fundo-branco" >
            <v-col 
             cols="12"
             sm="6"
             >
                <v-card
                    color="#0b1863"
                    link
                    hover="true"
                    shaped="true"
                    dark
                    >
                    <v-list-item three-line class="py-10">
                        <v-list-item-content>
                            <div style="font-size:0.85rem;" class="mb-4">CONTA JUNO</div>
                            <v-list-item-title class="headline mb-1">R$ 0,00</v-list-item-title>
                            <v-list-item-subtitle>disponível para transferência</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col> 
            <v-col
            sm="6"
             cols="12">
                <v-card
                    color="#fff3bf"
                    link
                    hover="true"
                    shaped="true"
                    >
                    <v-list-item three-line class="py-10">
                        <v-list-item-content>
                        <div style="font-size:0.85rem;" class="mb-4">CONTA JUNO</div>
                        <v-list-item-title class="headline mb-1">R$ 0,00</v-list-item-title>
                        <v-list-item-subtitle>disponível para transferência</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
            <v-col cols="12" style="text-align:center" sm="6" md="4">
                <v-date-picker color="green" v-model="dates" range></v-date-picker>
                <v-text-field v-model="dateRangeText" label="Date range" readonly></v-text-field>
            </v-col
            >
            <v-col cols="12" style="text-align:center" sm="6" md="8">
                 <span class="linha"></span>
                <v-btn
                    color="indigo"
                    class="mx-2"
                    small
                    :loading="loading"
                    :disabled="loading"
                    @click="loader = 'loading'"
                >
                <v-icon>mdi-arrow-up</v-icon><span style="color:white">Entradas</span>
                </v-btn>
                <v-btn
                    color="red"
                     small
                    :loading="loading1"
                    :disabled="loading1"
                    @click="loader = 'loading1'"
                >
                   <v-icon>mdi-arrow-down</v-icon><span style="color:white">Saídas</span>
                </v-btn>

                <v-btn
                id="btnExpResult"
                    color="indigo"
                    outlined
                     large
                    :loading="loading2"
                    :disabled="loading2"
                    @click="loader = 'loading2'"
                >
                   <v-icon>mdi-chevron-double-down</v-icon>Exportar Resultado
                </v-btn>
                <div class="secao-registros">
                    <v-icon size="60"> mdi-twitter-retweet</v-icon>
                    <div>Não foram encontrados registros</div>
                </div>
            </v-col>
        
        </v-row>
        </v-container>
</template>
<script>
export default {
    name:'Extrato',
     data: () => ({
        dates: [],
        loader: null,
        loading: false,
        loading1: false,
        loading2: false,
  }),
   computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    },
  },
}
</script>
<style  scoped>
    .secao-registros{
        margin-top: 10rem;
    }
    .fundo-branco{
        background-color:white; 
    }
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    .linha{
        border-bottom: 2px solid #eaeff6;
        width: 100%;
        display: inline-block;
    }
    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @media screen and (min-width: 960px){
        #btnExpResult{margin-left: 5rem;}
    }
    @media screen and (min-width: 600px) and (max-width:960px) {
         #btnExpResult{margin-top: 1rem;}
    }
    @media screen and (max-width: 536px){
        #btnExpResult{margin-top: 1rem;}
        .secao-registros{
            margin-top: 5rem;
            margin-bottom: 5rem;
        }
    }
</style>