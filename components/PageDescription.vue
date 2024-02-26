<template>
  <p class="q-mt-sm text-grey-8">{{ description }}</p>
</template>
<script setup lang="ts">
defineProps<{ description: string }>();
</script>