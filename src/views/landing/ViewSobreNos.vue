<script setup lang="ts">
import CustomButton from '../../components/CustomButton.vue';
import NavbarLanding from '../../components/NavbarLanding.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="background">
        <NavbarLanding/>
        <main>
            <header>
                <h1>Sobre Nós</h1>
            </header>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet pretium augue. Mauris commodo hendrerit felis nec lacinia. Cras lacinia luctus tellus, in sagittis elit finibus eget. Maecenas lectus nisi, blandit fringilla lectus in, scelerisque laoreet nisi. Etiam ipsum neque, fermentum non augue sit amet, gravida facilisis quam. Vivamus nec quam at quam aliquet gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

            Cras ultrices augue quis turpis lacinia scelerisque non sit amet velit. Suspendisse lobortis cursus nisl vitae laoreet. Nullam pellentesque risus in varius laoreet. Vivamus dictum magna id laoreet commodo. Ut mattis dui non ligula tincidunt, quis placerat nisl tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vulputate augue in nunc consequat aliquam. Fusce in arcu molestie mauris interdum lacinia. Pellentesque placerat suscipit nisl, ut ultrices diam aliquam at. Duis convallis eu lacus ac fringilla. Nunc viverra vitae orci et congue. Sed quis bibendum orci. Donec commodo, quam vitae maximus dignissim, nibh ante luctus neque, ut varius magna elit ac elit. Curabitur cursus consequat blandit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet pretium augue. Mauris commodo hendrerit felis nec lacinia. Cras lacinia luctus tellus, in sagittis elit finibus eget. Maecenas lectus nisi, blandit fringilla lectus in, scelerisque laoreet nisi. Etiam ipsum neque, fermentum non augue sit amet, gravida facilisis quam. Vivamus nec quam at quam aliquet gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

            Cras ultrices augue quis turpis lacinia scelerisque non sit amet velit. Suspendisse lobortis cursus nisl vitae laoreet. Nullam pellentesque risus in varius laoreet. Vivamus dictum magna id laoreet commodo. Ut mattis dui non ligula tincidunt, quis placerat nisl tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vulputate augue in nunc consequat aliquam. Fusce in arcu molestie mauris interdum lacinia. Pellentesque placerat suscipit nisl, ut ultrices diam aliquam at. Duis convallis eu lacus ac fringilla. Nunc viverra vitae orci et congue. Sed quis bibendum orci. Donec commodo, quam vitae maximus dignissim, nibh ante luctus neque, ut varius magna elit ac elit. Curabitur cursus consequat blandit.

            <div class="footer">
                <CustomButton label="Voltar" @click="router.back()"/>
            </div>
        </main>
    </div>
</template>

<style scoped>
.background {
    background-color: var(--background-color);
}

header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
}

main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    padding-top: 100px;
    height: 100vh;
    margin: 0 100px;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 100%;
}

.footer button {
    width: 200px;
}

</style>