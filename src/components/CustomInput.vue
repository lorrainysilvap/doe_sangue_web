<script setup lang="ts">
defineProps<{
    id: string;
    label: string;
    placeholder?: string;
    type?: string;
}>();

const modelValue = defineModel<string>()
</script>

<template>
    <div class="input-container poppins-regular">
        <label :for="id">{{ label }}</label>
        <input class="poppins-regular" :type="type ?? 'text'" :id="id" :placeholder="placeholder" v-model="modelValue" />
    </div>
</template>

<style scoped>
.input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-container input {
    width: 100%;
    height: 40px;

    border-radius: 8px;
    border: 1px solid;
    border-color: var(--input-border-color);
    padding: 0 16px;
}

.input-container input:focus {
    outline: none;
}
</style>