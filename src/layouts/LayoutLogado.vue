<script setup lang="ts">

</script>

<template>
    <div class="layout-container">
        <div class="sidebar">
            <!-- COMPONENTE DO SIDEBAR AQUI -->
        </div>
        <div class="view-container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.layout-container {
    width: 100%;
    height: 100vh;
    background-color: var(--background-color);

    display: flex;
    flex-direction: row;

    gap: 25px;

    padding: 40px;
}

.sidebar {
    width: 400px;
    border-radius: 40px;
    background-color: #FFFFFF;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.view-container {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 40px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

@media (max-width: 1300px) {
    .layout-container {
        gap: 0;
    }

    .sidebar {
        width: 400px;
        border-radius: 40px 0 0 40px;
    }

    .view-container {
        border-radius: 0 40px 40px 0;
    }
}
</style>

