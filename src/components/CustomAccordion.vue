<script setup lang="ts">
import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";
import { ref } from "vue";

defineProps<{
    title: string;
}>();

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="accordion">
    <div class="accordion-header" :class="{'open-accordion': isOpen}" @click="toggle">
      <span>{{ title }}</span>
      <span>
          <component :is="isOpen ? PhCaretUp : PhCaretDown" />
      </span>
    </div>

    <transition name="accordion">
      <div v-if="isOpen" class="accordion-content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.accordion {
  border-radius: 16px;
  margin: 10px 0;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  cursor: pointer;
  background-color: #FFFFFF;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
}

.open-accordion {
    border-radius: 16px 16px 0 0;
}

.accordion-content {
  padding: 12px;
  background: white;
  border-top: 1px solid #ddd;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.2s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
