<template>
  <RouterLink :to="link">
    <q-item clickable tag="a" :href="link">
      <q-item-section v-if="icon" avatar>
        <q-icon size="lg" :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="tw-text-lg tw-font-semibold">{{ title }}</q-item-label>
        <q-item-label caption>{{ caption }}</q-item-label>
      </q-item-section>
    </q-item>
  </RouterLink>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
