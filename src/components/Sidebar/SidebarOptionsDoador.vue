<script setup lang="ts">
import { PhClockUser, PhHandHeart, PhHouse, PhSyringe, PhUser } from '@phosphor-icons/vue';
import { useRoute } from 'vue-router';
import SidebarOption from './SidebarOption.vue';
import { RouteNames } from '../../router/route-names';

const route = useRoute();

</script>

<template>
    <SidebarOption :icon="PhHouse" label="Página Inicial" :selected="route.name === RouteNames.HOME_DOADOR" :route="RouteNames.HOME_DOADOR"/>
    <SidebarOption :icon="PhSyringe" label="Buscar Hemocentros" :selected="route.name === RouteNames.BUSCAR_HEMOCENTROS_DOADOR" :route="RouteNames.BUSCAR_HEMOCENTROS_DOADOR"/>
    <SidebarOption :icon="PhHandHeart" label="Minhas Doações" :selected="route.name === RouteNames.MINHAS_DOACOES" :route="RouteNames.MINHAS_DOACOES"/>
    <SidebarOption :icon="PhClockUser" label="Agendamentos" :selected="route.name === RouteNames.AGENDAMENTOS_DOADOR" :route="RouteNames.AGENDAMENTOS_DOADOR"/>
    <SidebarOption :icon="PhUser" label="Meus Dados" :selected="route.name === RouteNames.MEUS_DADOS_DOADOR" :route="RouteNames.MEUS_DADOS_DOADOR"/>
</template>

<style scoped>
</style>