<template>
    <v-container 
        class="fill-height"
        fluid>
        <v-row class="fundo-branco"> 
            <v-col 
             cols="12"
             md="3"
             style="padding:1px;"
             >
                <v-card
                    color="#0620da"
                    link
                    height="100%"
                    hover="true"
                    dark
                    >
                    <v-list-item three-line >
                        <v-list-item-content>
                        <div style="font-size:0.95rem;" class="mb-4">Complete seu Cadastro</div>
                        <v-list-item-title style="font-size:0.90rem;" class="mb-1">25% Completo</v-list-item-title>
                        <v-list-item-subtitle>progressbar</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col> 
            <v-col 
             cols="12"
             md="3"
             style="padding:1px;"
             >
                <v-card
                    color="#0620da"
                    link
                     height="100%"
                    hover="true"
                    dark
                    >
                    <v-list-item three-line >
                        <v-list-item-content>
                        <div style="font-size:0.95rem;" class="mb-4">(+10%)</div>
                        <v-list-item-title style="font-size:0.90rem;" class="mb-1">Confirme seu email<v-icon>mdi-menu-right</v-icon></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col> 
            <v-col 
             cols="12"
             md="3"
             style="padding:1px;"
             >
                <v-card
                    color="#0620da"
                    link
                     height="100%"
                    hover="true"
                    dark
                    >
                    <v-list-item three-line >
                        <v-list-item-content>
                        <div style="font-size:0.95rem;" class="mb-4">(+35%)</div>
                        <v-list-item-title style="font-size:0.90rem;" class="mb-1">Dados adicionais<v-icon>mdi-lock</v-icon></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col> 
            <v-col 
             cols="12"
             md="3"
             style="padding:1px;"
             >
                <v-card
                    color="#0620da"
                    link
                     height="100%"
                    hover="true"
                    dark
                    >
                    <v-list-item three-line >
                        <v-list-item-content>
                        <div style="font-size:0.95rem;" class="mb-4">(+30%)</div>
                        <v-list-item-title style="font-size:0.9rem;" class="mb-1">Envie seus documentos<v-icon>mdi-lock</v-icon></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col> 
        </v-row>
        <v-row class="fundo-branco">
           <v-col 
             cols="12"
             sm="6"
             >
                <v-card
                    color="white"
                    hover="true"
                    >
                    <v-list-item three-line class="py-6">
                        <v-list-item-content>
                            <div id="titulo-principal-meuDinheiro" class="mb-4">Meu Dinheiro</div>
                            <v-card-actions style="justify-content:center;">
                                <v-btn outlined color="success">Transferir Dinheiro</v-btn>
                            </v-card-actions>
                            <span class="linha"></span>
                            <div class="my-8" style="justify-content: center;display: flex;" ><v-icon size="90">mdi-credit-card</v-icon></div>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-title id="titulo-card-meuDinheiro">Em breve, seu dinheiro vai estar aqui. :)</v-card-title>
                     <v-card-subtitle style="text-align: center;">
                         <p>
                            Ao receber o pagamento das suas cobranças,
                            você poderá consultar o saldo da sua conta Juno.
                         </p>
                    </v-card-subtitle>
                </v-card>
            </v-col> 
            <v-col 
                 cols="12"
                sm="6"
             >
                <v-card
                    color="white"
                    hover=""
                    >
                    <v-list-item three-line class="py-6">
                        <v-list-item-content>
                            <div style="font-size:22px;" class="mb-4">Cobranças</div>
                            <v-card-actions style="justify-content:center;">
                                <v-btn outlined color="primary">Últimas pagas</v-btn>
                                <v-btn outlined color="primary">Em atraso</v-btn>
                            </v-card-actions>
                            <span class="linha"></span>
                            <div class="my-8" style="justify-content: center;display: flex;" ><v-icon size="90">mdi-cash</v-icon></div>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-title style="font-size:17px;justify-content:center;">Em breve, você verá as suas cobranças aqui</v-card-title>
                    <span class="linha"></span>
                    <router-link
                    class="py-2" 
                        style="justify-content:center;
                        display: flex;
                        text-decoration: none;
                        color: orange;"
                        to="#">Visualizar todas as cobranças</router-link>
                </v-card>
            </v-col> 
        </v-row>
         <v-row class="fundo-branco">
            <v-col 
                 cols="12"
                sm="6"
             >
                <v-card
                    color="white"
                    hover=""
                    >
                    <v-list-item three-line class="py-6">
                        <v-list-item-content>
                            <div style="font-size:22px;" class="mb-5">Relatórios</div>
                            <span class="linha"></span>
                             <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                                >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                    v-model="date"
                                    class="mt-10"
                                    color
                                    label="Selecione uma Data"
                                   
                                    readonly
                                    v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                            <div class="mt-5 pequeno-relatorio-grid">
                                <div>
                                    <div style="text-align:center" >FATURAMENTO ESPERADO</div>
                                    <div style="text-align:center;font-weight:bold" class="mt-2">R$ 0,00</div>
                                </div>
                                <div>
                                    <div style="text-align:center" >FATURAMENTO REAL</div>
                                    <div style="text-align:center;font-weight:bold" class="mt-2">R$ 0,00</div>
                                </div>
                                <div>
                                     <div style="text-align:center">CONVERSÃO</div>
                                    <div class="mt-2" style="text-align:center;font-weight:bold">0%</div>
                                </div>
                                  <div>
                                     <div style="text-align:center">VALOR MÉDIO</div>
                                    <div class="mt-2" style="text-align:center;font-weight:bold">R$ 0,00</div>
                                </div>
                                  <div>
                                     <div style="text-align:center">COBRANÇAS PAGAS</div>
                                    <div style="text-align:center;font-weight:bold" class="mt-2">0</div>
                                </div>
                                  <div>
                                     <div style="text-align:center">COBRANÇAS</div>
                                    <div class="mt-2" style="text-align:center;font-weight:bold">0</div>
                                </div>
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                    <span class="linha"></span>
                    <router-link
                    class="py-2" 
                        style="justify-content:center;
                        display: flex;
                        text-decoration: none;
                        color: orange;"
                        to="#">Visualizar relatório completo</router-link>
                </v-card>
            </v-col> 
        </v-row>

    </v-container>   
</template>


<script>
    export default {
        name:'Painel',
        data:()=>({
            date: new Date().toISOString().substr(0, 10),
            menu: false,
        })
    }
</script>

<style scoped>
    .pequeno-relatorio-grid{
        grid-template-columns: repeat(3, 1fr);
        gap:30px;
        display: grid;
    }
    #titulo-card-meuDinheiro{
        justify-content: center;
        font-family: qanelas_soft_regular;
        font-size: 18px;
        font-weight: bold;
        line-height: 1.33;
        color: rgb(40, 50, 220);
    }
    .linha{
        border-bottom: 2px solid #eaeff6;
        width: 100%;
        display: inline-block;
    }
    .fundo-branco{
        background-color:white; 
    }
    #titulo-meuDinheiro{
        border:1px solid black;
    }
    #titulo-principal-meuDinheiro{
        font-family: qanelas_soft_semibold;
        font-size: 22px;
        font-weight: normal;
        line-height: 35px;
        color: rgb(40, 50, 220);
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: left;
    }
</style>