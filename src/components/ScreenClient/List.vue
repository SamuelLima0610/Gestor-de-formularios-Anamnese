<template>
    <v-app>
        <v-container>
            <v-data-table
                :headers="cabecalho"
                :items="clientes"
                :items-per-page="5"
                class="elevation-1"
                @click:row="selectedRow"
            ></v-data-table>
        </v-container>
    </v-app>
</template>

<script>
import axios from 'axios'
export default {
    name:"List",
    data(){
        return {
            clientes: [],
            cabecalho: [
                { text: 'Nome',align: 'center',sortable: true,value: 'nome',},
                { text: 'Instituto',align: 'center',sortable: true,value: 'instituto',},
                { text: 'Idade',align: 'center',sortable: true,value: 'idade',},
                { text: 'Sexo',align: 'center',sortable: true,value: 'sexo',},
            ],
        }
    },
    methods:{
        selectedRow(value){
            this.$router.push({path: `/cliente/${value.id}`})
        }
    },
    created(){
        axios.get(`https://vuejs-19343.firebaseio.com/clientes.json`).then((res) =>{
            let array = [];
            for(let chave in res.data){
                array.push({id: chave, ...res.data[chave]});
            }
            this.clientes = array
        })
    }
}
</script>

<style>

</style>