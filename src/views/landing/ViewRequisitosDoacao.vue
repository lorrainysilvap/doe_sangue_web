<script setup lang="ts">
import CustomAccordion from '../../components/CustomAccordion.vue';
import CustomButton from '../../components/CustomButton.vue';
import LinkButton from '../../components/LinkButton.vue';
import NavbarLanding from '../../components/NavbarLanding.vue';

</script>

<template>
    <div class="background">
        <NavbarLanding/>
        <main>
            <section class="requisitos">
                <h1>Requisitos para Doar Sangue</h1>
                <p>Confira os critérios básicos e os principais impedimentos para garantir uma doação segura para todos.</p>

                <CustomAccordion title="Requisitos Básicos">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet sagittis sem a cursus. Praesent est mauris, commodo in libero ultrices, ullamcorper accumsan nulla. Ut tincidunt id mi et tempus. Morbi nec malesuada eros.
                </CustomAccordion>
                <CustomAccordion title="O que impede de doar?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet sagittis sem a cursus. Praesent est mauris, commodo in libero ultrices, ullamcorper accumsan nulla. Ut tincidunt id mi et tempus. Morbi nec malesuada eros.
                </CustomAccordion>
            </section>
            <section class="section-logo-redirecionamento">
                <div class="bloco-logo-redirecionamento">
                    <div class="logo">
                        <img src="../../assets/logo-light-horizontal.svg" alt="logo-doe-sangue"/>
                    </div>

                    <h1>Pronto para salvar vidas?</h1>
                    <p>Não tem certeza se atende a todos os critérios? Responsa nosso quiz rápido e descubra!</p>

                    <CustomButton class="poppins-bold" label="Quero Doar Sangue" />
                    <LinkButton class="poppins-medium" label="ou Encontrar Ponto de Coleta" route-name="encontrar-ponto-coleta" />
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
.background {
    background-color: var(--background-color);
}

main {
    display: flex;
    flex-direction: row;

    height: 100vh;
    padding-top: 100px;
    margin: 0 100px 0 100px;

    gap: 50px;
}

.requisitos {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 50px;
    width: 60%;
}

.section-logo-redirecionamento {
    padding-top: 50px;
    width: 40%;
}

.bloco-logo-redirecionamento {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    padding: 70px;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

    gap: 20px;
}

.logo {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    padding: 80px;
    border-radius: 16px;
}
</style>