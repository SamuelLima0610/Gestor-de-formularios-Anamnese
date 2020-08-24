<template>
  <v-app>
      <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    Informação Gerais:
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="client.nome"
                        label="Nome"
                        required
                    ></v-text-field>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-text-field
                        v-model="client.tel"
                        label="Telefone"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="client.profissao"
                        label="Profissão"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="client.idade"
                        label="Idade"
                        required
                    ></v-text-field>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-text-field
                        v-model="client.civil"
                        label="Estado Civil"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="client.motivo"
                        label="Motivo"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="client.email"
                        label="Email"
                        required
                    ></v-text-field>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-text-field
                        v-model="client.sexo"
                        label="Sexo"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="client.instituto"
                        label="Instituto"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col  cols="12" md="4">
                    <v-btn class="mr-4" @click="submit">Salvar</v-btn>
                    <v-btn @click="clear">Limpar</v-btn>
                </v-col>    
            </v-row>
        </v-container>
      </v-form>
    </v-app>
</template>

<script>
import axios from 'axios'

export default {
    name: "Create",
    data(){
        return{
            client:{}
        }
    },
    methods:{
        submit(){
			axios.post(`https://vuejs-19343.firebaseio.com/clientes.json`,this.client).then(() =>{
                this.clear();
            })
        },
        clear(){
            this.client = {}
        }
    }
}
</script>

<style>

</style>
