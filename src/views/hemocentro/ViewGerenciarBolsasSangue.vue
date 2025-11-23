<script setup lang="ts">
import { useRoute } from 'vue-router';
import { RouteNames } from '../../router/route-names';
import CustomInput from '../../components/CustomInput.vue';
import RadioButtom from '../../components/RadioButtom.vue';
import CustomButton from '../../components/CustomButton.vue';
import CustomDropdown from '../../components/CustomDropdown.vue';
import CustomDatePicker from '../../components/CustomDatePicker.vue';
import { ref } from 'vue';

const route = useRoute();
const TipoSangue = ref("");
const FatorRH = ref("");
const TipoComponente = ref("");
const ResultadoSorologico = ref("");
</script>

<template>
    <div class="view-container">
        <header>
            <h1 v-if="route.name === RouteNames.CRIAR_BOLSA_SANGUE_HEMOCENTRO">Cadastrar Bolsa de Sangue</h1>
            <h1 v-if="route.name === RouteNames.EDITAR_BOLSA_SANGUE_HEMOCENTRO">Detalhes da Bolsa de Sangue</h1>
        </header>
        <main>
            <label class="poppins-medium">Identificação da Unidade</label>
            <hr class="solid-separator">
            <div id="IdentificaoUnidade">
                <CustomInput style="width: 300px;" label="Código da Bolsa de Sangue" id="codigo-bolsa-sangue"
                    model-value="" placeholder="Escreva o código" />

                <CustomDropdown style="width: 300px;" title="Tipo Sanguíneo" label="Escolha o tipo sanguíneo"
                    id="condicao-bolsa" :options="[
                        'A',
                        'B',
                        'AB',
                        'O'
                    ]" v-model="TipoSangue" />
                <div id="fator-rh-geral">
                    <Label class="poppins-regular">Fator RH</Label>
                    <div style="display: flex; flex-direction: row; gap: 16px; margin-top: 12px;">
                        <RadioButtom label="Positivo (+)" Group="FatorRH" v-model="FatorRH" />
                        <RadioButtom label="Negativo (-)" Group="FatorRH" v-model="FatorRH" />
                    </div>
                </div>
            </div>
            <label class="poppins-medium">Dados Logísticos</label>
            <hr class="solid-separator">
            <div id="DadosLogisticos">
                <div id="DadosLogisticosLinha1">
                    <CustomInput style="width: 300px;" label="Volume(mL)" id="volume-bolsa-sangue" model-value=""
                        placeholder="450mL" />
                    
                    <CustomDatePicker title="Data de Coleta" label="Data de Coleta" id="data-coleta" />
                    <CustomInput style="width: 400px;" label="Local de Coleta" id="local-coleta" model-value=""
                        placeholder="Ex: Hospital Central" />
                </div>
                <div id="DadosLogisticosLinha2">
                    <CustomInput style="width: 540px;" label="Destino / Hospital" id="destino-hospital" model-value=""
                        placeholder="Ex: Hospital Santa Catarina" />
                    <CustomInput style="width: 430px;" label="Responsável pela Coleta" id="responsavel-coleta"
                        model-value="" placeholder="Ex: João Silva" />
                </div>
                <div id="DadosLogisticosLinha3">
                    <CustomInput style="width: 540px;" label="Doador" id="doador" model-value=""
                        placeholder="Ex: Maria Silva" />
                    <CustomDatePicker title="Data de Doação" label="Data de Doação" id="data-doacao" />   
                    <CustomDatePicker title="Data de Validade" label="Data de Validade" id="data-validade" />
                   
                </div>
            </div>
            <label class="poppins-medium">Dados Clínicos</label>
            <hr class="solid-separator">
            <div id="dados-clinicos">
                <div id="resultado-sorologico">
                    <Label class="poppins-regular">Resultado Sorológico</Label>
                    <div style="display: flex; flex-direction: row; gap: 16px; margin-top: 12px;">
                        <RadioButtom label="Negativo Geral" Group="ResultadoSorologico" v-model="ResultadoSorologico" />
                        <RadioButtom label="Hepatite B e C" Group="ResultadoSorologico" v-model="ResultadoSorologico" />
                        <RadioButtom label="Sífilis" Group="ResultadoSorologico" v-model="ResultadoSorologico" />
                        <RadioButtom label="HIV" Group="ResultadoSorologico" v-model="ResultadoSorologico" />
                    </div>
                </div>

                <div id="tipo-componente">
                    <Label class="poppins-regular">Tipo de Componente</Label>
                    <div style="display: flex; flex-direction: row; gap: 16px; margin-top: 12px;">
                        <RadioButtom label="Sangue Total" Group="TipoComponente" v-model="TipoComponente" />
                        <RadioButtom label="Conc. Hemácias" Group="TipoComponente" v-model="TipoComponente" />
                        <RadioButtom label="Plasma" Group="TipoComponente" v-model="TipoComponente" />
                        <RadioButtom label="Plaquetas" Group="TipoComponente" v-model="TipoComponente" />
                        <RadioButtom label="Crioprecipitado" Group="TipoComponente" v-model="TipoComponente" />
                    </div>
                </div>
            </div>




            <div class="action-btn" v-if="route.name === RouteNames.CRIAR_BOLSA_SANGUE_HEMOCENTRO">
                <CustomButton label="Salvar" />
            </div>
            <div class="action-btn" v-if="route.name === RouteNames.EDITAR_BOLSA_SANGUE_HEMOCENTRO">
                <CustomButton label="Excluir" secondary red-font-color />
                <CustomButton label="Editar" />
            </div>

        </main>
    </div>
</template>

<style scoped>
.view-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    height: 100%;
}


main {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

div#IdentificaoUnidade {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

div#DadosLogisticosLinha1 {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

div#DadosLogisticosLinha2 {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 8px 0;
}

div#DadosLogisticosLinha3 {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: 16px 0;
}

div#dados-clinicos {
    display: flex;
    flex-direction: row;
    gap: 30px;
}

.template-inputs {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 20px
}

.template-inputs div {
    width: 100%;
}

.action-btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    gap: 20px;
    width: 100%;
}

.action-btn button {
    width: 200px;
}

.solid-separator {
    border: 0;
    height: 1px;
    background-color: #e0e0e0; 
}

</style>
