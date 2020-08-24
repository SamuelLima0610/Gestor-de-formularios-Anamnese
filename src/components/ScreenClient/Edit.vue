<template>
  <v-app>
      <v-form>
        <v-container>
            <v-data-table
                :headers="cabecalho"
                :items="recipes"
                :items-per-page="5"
                class="elevation-1"
                @click:row="selectedRow"
            ></v-data-table>
        </v-container>
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
                <v-col  cols="12" md="12">
                    <v-btn @click="submit" color="warning">Editar</v-btn>
                    <v-btn class="ml-4" @click="del" color="error">Deletar</v-btn>
                    <v-btn class="ml-4" @click="recipe" color="success">Nova avaliação</v-btn>
                    <v-btn class="ml-4" @click="recipe" color="primary">Voltar</v-btn>
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
            client:{},
            recipes: [],
            cabecalho: [
                { text: 'Data',align: 'center',sortable: true,value: 'data',},
            ],
        }
    },
    methods:{
        submit(){
			axios.patch(`https://vuejs-19343.firebaseio.com/clientes/${this.id}.json`,this.client).then(() =>{
            })
        },
        del(){
            axios.delete(`https://vuejs-19343.firebaseio.com/clientes/${this.id}.json`).then(() =>{
                this.back()
            })
        },
        back(){
            this.$router.push({path: '/lista'})
        },
        recipe(){
            this.$router.push({path: `/avaliacao/${this.client.nome}`})
        },
        selectedRow(value){
            this.$router.push({path: `/cliente/${value.id}`})
        }
    },
    created(){
        this.id = this.$route.params.id
        axios.get(`https://vuejs-19343.firebaseio.com/clientes/${this.id}.json`).then(res => {
            this.client = res.data
            axios.get(`https://vuejs-19343.firebaseio.com/recipe.json`).then((res) =>{
                let array = [];
                for(let chave in res.data){
                    let information = {id: chave, ...res.data[chave]}
                    if(information.nome == this.client.nome) array.push({id: chave, ...res.data[chave]});
                }
                this.recipes = array
            })
        })
    }
}
</script>

<style>

</style>
