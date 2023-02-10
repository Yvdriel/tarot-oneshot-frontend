<template>
  <q-page class="row items-center justify-evenly">
    <div v-for="tarot in tarots" :key="tarot.name" class="col-6">
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
