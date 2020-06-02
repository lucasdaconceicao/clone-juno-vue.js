<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
                <v-toolbar
                    color="primary"
                    dark
                    flat
                
                >
                    <v-toolbar-title class="mx-auto">LOGIN</v-toolbar-title>
                </v-toolbar>
              <v-card-text>
                <v-form  ref="form">
                  <v-text-field
                    label="Login"
                    v-model="loginModel"
                    v-bind:rules="nameRules"
                    name="login"                   
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="passwordModel"
                    v-bind:rules="passwordRules"
                    name="password"
                    type="password"
                  ></v-text-field>
                </v-form>
                <span v-if="errorLogin" style="color:red">login ou senha inválidos</span>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login" color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name:'Login',
    props: {
      source: String,
    },
    data:()=>({
      nameRules: [
          v => !!v || 'Name is required'
      ],
      passwordRules: [
          v => !!v || 'Name is required'
      ],
      passwordModel:'',
      loginModel:'',
      errorLogin:false
    }),
    methods:{
      login(){
        if(this.passwordModel=='123'){
           this.errorLogin=false;
           this.$store.dispatch('salvarNomeLogin',this.loginModel)
          this.$router.replace("/home"); 
        }
        else{
          this.errorLogin=true;
        }
      }
    },
  }
</script>