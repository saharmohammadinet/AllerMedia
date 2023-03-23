<template>
  <div class="search">
    <h1>Hacker News</h1>
    <div class="search-from">
      <input type="text" v-model.trim="search" placeholder="Search" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, defineEmits } from "vue";
import { Story } from "../interface/Story";

import "../assets/styles/_search.scss";

// Get props
const props = defineProps<{ storiesInfo: Story[] }>();
const emits = defineEmits(["filter"]);

const search = ref("");

watch(search, async function (newValue, oldValue) {
  if (newValue.length >= 3) {
    const filteredStories = props.storiesInfo.filter((el) =>
      el.title.toLowerCase().includes(newValue.toLowerCase())
    );

    emits("filter", filteredStories);
  }

  if (newValue == "") {
    emits("filter", "");
  }
});
</script>
