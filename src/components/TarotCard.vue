<template>
  <RouterLink :to="{ name: 'tarot', params: { id } }">
    <div class="tw-group">
      <q-img :src="image_url" class="tw-max-w-xs" img-class="
          group-hover:tw-blur
          tw-transition
          tw-ease-in-out
          tw-duration-200
        ">
        <div class="
          tw-transition
          tw-ease-in-out
          tw-duration-200
          tw-opacity-0
          group-hover:tw-opacity-100
          absolute-full
          text-subtitle2
          flex
          tw-text-center
          tw-rounded-xl
        ">
          <q-list class="tw-mx-auto tw-w-full">
            <!-- <q-item>
              <q-item-section class="tw-text-4xl">
                {{ number }} - {{ name }}
              </q-item-section>
            </q-item> -->
            <!-- <q-separator dark /> -->
            <q-item>
              <q-item-section>
                <q-item-label class="tw-text-3xl">{{ type }}</q-item-label>
              </q-item-section>
              <q-separator vertical dark />
              <q-item-section>
                <q-item-label class="tw-text-3xl">{{ frequency }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator dark />
            <!-- <q-item>
            <q-item-section class="tw-text-amber-300 tw-text-2xl">
              "{{ description }}"
            </q-item-section>
          </q-item> -->
            <q-item>
              <q-item-section class="tw-text-lg tw-text-left tw-font-light">
                <div v-html="effect"></div>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-img>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">

interface Props {
  id: string | string[];
  number: string;
  name: string;
  description: string;
  type: string;
  frequency: string;
  effect: string;
  image_url: string;
}
defineProps<Props>();

</script>
