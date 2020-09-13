<template>
  <v-app>
      <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    Anamnese clinica({{information.name}}):
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="information.date"
                        label="Data"
                        required
                    ></v-text-field>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-text-field
                        v-model="information.intolerancias"
                        label="Intolerâncias"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="information.alergias"
                        label="Alergias"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="information.aversao"
                        label="Aversão"
                        required
                    ></v-text-field>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-text-field
                        v-model="information.preferencia"
                        label="Preferências"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="information.ingestaoAgua"
                        label="Ingestão de Água"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.rinite"
                        label="Rinite, bronquite, Otite."
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.enxaqueca"
                        label="Enxaqueca/ dores de cabeça"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.insonia"
                        label="Insônia"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.obstipação"
                        label="Obstipação"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.diarreia"
                        label="Diarreia"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.eructação"
                        label="Eructação"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.hipertensão"
                        label="Hipertensão"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.pirose"
                        label="Pirose"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.diabetes"
                        label="Diabetes"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.flatulência"
                        label="Flatulência"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.infecção"
                        label="Infecção urinaria"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.nasueas"
                        label="Nasueas e vomitos "
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.digestão"
                        label="Digestão lenta"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.pele"
                        label="Pele ressecada"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.hemorroida"
                        label="Hemorroida"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.corrimento"
                        label="Corrimento vaginal"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.aftas"
                        label="Aftas"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.osteoporose"
                        label="Osteoporose/ osteopenia"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.sangramento"
                        label="Sangramento da gengiva"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.musculares"
                        label="Dores musculares"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.lingua"
                        label="Alterações na língua"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.cicatrização"
                        label="Dificuldade de cicatrização"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.pescoco"
                        label="Gânglios no pescoço"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.boca"
                        label="Rachaduras nos lábios/ canto da boca"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.caimbras"
                        label="Câimbras/ inchaço"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.apetite"
                        label="Alterações no apetite"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.muscular"
                        label="Flacidez Muscular"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>    
            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.manchas"
                        label="Manchas roxas na pele"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.transpiração"
                        label="Transpiração excessiva (mão e pés)"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.hipoglicemia"
                        label="Hipoglicemia"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.tpm"
                        label="TPM"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.tontura"
                        label="Tontura falta de equilíbrio"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.fluxo"
                        label="Alteração de fluxo menstrual"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.franqueza"
                        label="Fraqueza / desmaio"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.compulsividade"
                        label="Compulsividade"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.espinha"
                        label="Espinha/ seborreia"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.ansiedade"
                        label="Ansiedade e apreensão"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.micose"
                        label="Micose/ psoríase/ caspa"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.irritabilidade"
                        label="Irritabilidade"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.anemia"
                        label="Anemia"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.nervosismo"
                        label="Nervosismo"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.queda"
                        label="Queda de cabelo"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.unhas"
                        label="Unhas frágeis, quebradiças, descamação"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.hiperatividade"
                        label="Hiperatividade física e mental"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.concentração"
                        label="Menor capacidade de concentração"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.fadiga"
                        label="Fadiga"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.memoria"
                        label="Diminuição de memória"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.sonolência"
                        label="Sonolência"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.audição"
                        label="Alteração na audição/ ouvido"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.estrias"
                        label="Alterações nas unhas, estrias ou manchas."
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.alteracao"
                        label="Alteração nos olhos / visão"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.celulite"
                        label="Celulite"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.depressão"
                        label="Depressão/ desânimo"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.mauhalito"
                        label="Mau halito, boca amarga, boca seca"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.panico"
                        label="Síndrome do pânico"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.bruxismo"
                        label="Bruxismo"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.microvasos"
                        label="Microvasos"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4">
                    <v-checkbox
                        v-model="information.alteracaoRitmo"
                        label="Alteração no ritmo cardio-respiratório"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.televisão"
                        label="Faz refeições em frente a televisão"
                        required
                    ></v-checkbox>
                </v-col>

                <v-col  cols="12" md="4">
                    <v-checkbox
                        v-model="information.sexual"
                        label="Apetite sexual"
                        required
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-row>
                <v-col  cols="12" md="6">
                    <v-container fluid>
                        <v-textarea
                        v-model="information.patologias"
                        name="input-7-1"
                        filled
                        label="Patologias"
                        auto-grow
                        ></v-textarea>
                    </v-container>
                </v-col>   

                <v-col  cols="12" md="6">
                    <v-container fluid>
                        <v-textarea
                        v-model="information.medicamentos"
                        name="input-7-1"
                        filled
                        label="Medicamentos em uso"
                        auto-grow
                        ></v-textarea>
                    </v-container>
                </v-col>  
            </v-row>

            <v-row>
                <v-col cols="12" md="12">
                    <VueEditor v-model="information.pescricao"/>
                </v-col>
            </v-row>

            <v-row>
                <v-col  cols="12" md="12">
                    <v-btn @click="submit" color="success">Salvar</v-btn>
                    <v-btn class="ml-4" @click="clear" color="error">Limpar</v-btn>
                    <v-btn class="ml-4" @click="back" color="primary">Voltar</v-btn>
                </v-col>    
            </v-row>
        </v-container>
      </v-form>
    </v-app>
</template>

<script>
import axios from 'axios'
import {VueEditor} from 'vue2-editor'

export default {
    name: "Create",
    components:{VueEditor},
    data(){
        return{
            information:{}
        }
    },
    methods:{
        submit(){
			axios.post(`https://vuejs-19343.firebaseio.com/recipe.json`,this.information).then(() =>{
                this.clear();
            })
        },
        clear(){
            this.information = {}
            this.information.name = this.$route.params.nome;
        },
        back(){
            this.$router.push({path: '/lista'})
        }
    },
    created(){
        this.information.name = this.$route.params.nome;
    }
}
</script>

<style>

</style>
