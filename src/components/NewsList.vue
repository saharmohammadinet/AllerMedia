<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchData } from "../modules/FetchData";
import { selectRandomStories } from "../modules/SelectRandomStories";
//Component
import ContainerBox from "./ContainerBox.vue";
import NewsItem from "./NewsItem.vue";
//style
import "../assets/styles/_news-list.scss";

onMounted(() => {
  fetchStoriesID();
});

const selectRandomStoriesID = ref<number[]>([]);
const loading = ref(false);

async function fetchStoriesID() {
  // Get all the Stories IDs from API
  const getAllStoriesID = await fetchData(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );

  // Select 10 random stories ID
  selectRandomStoriesID.value = selectRandomStories(getAllStoriesID, 10);
  loading.value = true;
  return selectRandomStoriesID;
}
</script>

<template>
  <ContainerBox>
    <div>
      <div class="news-list">
        <NewsItem v-if="loading" :storiesIds="selectRandomStoriesID" />
      </div>
    </div>
  </ContainerBox>
</template>

<style scoped></style>
