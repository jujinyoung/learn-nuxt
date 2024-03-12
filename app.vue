<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('Vue & Nuxt Mastery Class');
const description = ref(
    '짐코딩과 함께 Vue3 기초부터 실전, 활용! 그리고 Nuxt Framework 까지 함께 배워봐요!',
);
// useHead({
//   title,
//   meta: [{ name: 'description', content: description }],
// });

useSeoMeta({
  title,
  titleTemplate: (titleChunk) =>
      titleChunk
          ? `${titleChunk} - 짐코딩 Vue & Nuxt 강의`
          : `짐코딩 Vue & Nuxt 강의`,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-image.png',
});
</script>