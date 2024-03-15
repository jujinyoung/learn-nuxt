<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="About" />
      <PageDescription
          description="Vue Master Course 웹은 Nuxt3로 만들어졌습니다."
      />

      <div class="column">
        <RouterLink to="/">RouterLink Home </RouterLink>
        <RouterLink to="https://www.youtube.com/@gymcoding">
          RouterLink Youtube
        </RouterLink>
        <br />
        <NuxtLink to="/" prefetched-class="bg-yellow" :prefetch="false">
          NuxtLink Home
        </NuxtLink>
        <NuxtLink to="/course" prefetched-class="bg-yellow" no-prefetch>
          NuxtLink Course
        </NuxtLink>
        <NuxtLink
            to="https://www.youtube.com/@gymcoding"
            prefetched-class="bg-yellow"
        >
          NuxtLink Youtube
        </NuxtLink>

        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useState('counter')</div>
          <div>
            counter: {{ counter }}
            <q-btn
                label="counter"
                color="primary"
                dense
                no-caps
                @click="counter++"
            />
          </div>
          <div>
            sameCounter: {{ sameCounter }}
            <q-btn
                label="sameCounter"
                color="primary"
                dense
                no-caps
                @click="sameCounter++"
            />
          </div>
          <div>
            <q-btn label="clear" @click="clearNuxtState()" />
          </div>
        </div>

        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useCounterStore()</div>
          <div>counter: {{ count }}</div>
          <div>doubleCounter: {{ doubleCount }}</div>
          <div>
            <q-btn label="increment" @click="counterStore.increment()"></q-btn>
          </div>
        </div>

        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">
            local vs session storage
          </div>
          <q-input v-model="localStorageColor" outlined/>
          <q-input v-model="sessionStorageColor" outlined/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const counter = useState<number>('counter', () => 1);
const sameCounter = useState<number>('counter');

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);

const localStorageColor = useLocalStorage('color-key', null);
const sessionStorageColor = useSessionStorage('color-key', null);

const config = useRuntimeConfig();
console.log('about config: ', config.public.clientConfigValue);
</script>