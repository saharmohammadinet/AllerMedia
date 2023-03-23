<script setup lang="ts">
import NewsList from "../components/NewsList.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Home Page",
});
</script>

<template>
  <NewsList />
</template>
