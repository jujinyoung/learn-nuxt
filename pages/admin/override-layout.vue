<template>
  <div>
    <NuxtLayout name="admin">
      <template #header>
        <q-header elevated class="bg-red text-white">
          <q-toolbar>
            <q-toolbar-title>Vue & Nuxt Mastery Admin</q-toolbar-title>
            <q-separator dark vertical />
            <NuxtLink v-slot="{ navigate }" custom to="/admin/override-layout">
              <q-btn
                  stretch
                  flat
                  label="Override Layout"
                  no-caps
                  @click="navigate()"
              />
            </NuxtLink>
            <q-separator dark vertical />
            <NuxtLink v-slot="{ navigate }" custom to="/admin/dynamic-layout">
              <q-btn
                  stretch
                  flat
                  label="Dynamic Layout"
                  no-caps
                  @click="navigate()"
              />
            </NuxtLink>
            <q-separator dark vertical />
            <NuxtLink v-slot="{ navigate }" custom to="/">
              <q-btn stretch flat label="Home" no-caps @click="navigate()" />
            </NuxtLink>
          </q-toolbar>
        </q-header>
      </template>
      <div class="q-my-xl text-center">
        <PageTitle title="레이아웃 재정의"/>
        <PageDescription description="Admin Layout 실습을 위한 페이지 입니다."/>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<style scoped></style>