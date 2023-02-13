<template>
  <q-page class="tw-grid sm:xl:tw-grid-cols-5 tw-grid-cols-2 tw-gap-4 items-center tw-justify-center">
    <div v-for="tarot in tarots" :key="tarot.name" >
      <tarot-card
        v-bind="tarot"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Tarot } from 'components/models';
import TarotCard from 'components/TarotCard.vue';
import { useTarotStore } from 'src/stores/tarot-store';

const tarotStore = useTarotStore();

const tarots = computed<Tarot[]>(() => tarotStore.all);
</script>
