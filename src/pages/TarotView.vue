<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="tests">
        <img :src="current.image_url" class="testsimg" />
      </div>
      <div class="tw-text-center sm:xl:tw-pl-14 sm:xl:tw-w-[66.6667%]">
        <div class="tw-text-6xl sm:xl:tw-text-8xl tw-pt-8 tw-text-slate-700">
          {{ current.number }} - {{ current.name }}
        </div>
        <div class="tw-text-[#b89662] blockquote tw-italic tw-mb-[-60px]">
          <p class="tw-text-4xl tw-mt-[-55px] tw-mb-[0px]">
            {{ current.description }}
          </p>
        </div>
        <div class="tw-text-4xl tw-font-semibold sm:xl:tw-text-6xl tw-text-slate-700">
          {{ current.type }} - {{ current.frequency }}
        </div>
        <q-separator spaced class="tw-bg-[#b89662]" />
        <div v-html="current.effect" class="tw-text-2xl sm:xl:tw-text-4xl tw-text-slate-700 tw-text-left">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Tarot } from 'src/components/models';
import { useTarotStore } from 'src/stores/tarot-store';
import { useRoute } from 'vue-router';

const tarotStore = useTarotStore();
const route = useRoute();

tarotStore.setCurrent(route.params.id);

const current = computed<Tarot>(() => tarotStore.current);
</script>
<style lang="sass">
.tests
  height:88vh
.testsimg
  max-height:100%
  max-width:100%
  object-fit: contain
.blockquote::before, .blockquote::after
  font-size: 120px
  opacity: .2
  position: relative
.blockquote::before
  content: '\201c'
.blockquote::after
  content: '\201d'
</style>
