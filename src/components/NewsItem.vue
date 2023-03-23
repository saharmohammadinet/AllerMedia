<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { fetchData } from "../modules/FetchData";
import { sortStories } from "../modules/Sort";
import { convertTimeStamp } from "../modules/ConvertTimeStamp";
import { dummyImage } from "../modules/DummyImage";
import { Story } from "../interface/Story";

import Loading from "./Loading.vue";
import Search from "./Search.vue";
import "../assets/styles/_news-item.scss";
// Get props
const props = defineProps<{ storiesIds: Array<number> }>();
const loading = ref(false);
const notFoundSeach = ref(false);

onMounted(async () => {
  fetchStoriesInfo();
});

const storiesInfo = ref<Story[]>([]);

const fetchStoriesInfo = async () => {
  const infoStory: Story[] = [];
  const info = props.storiesIds.map((storyID: number) => {
    return new Promise<Story[]>((resolve: any) => {
      getInfo(storyID).then((story) => {
        infoStory.push(story);
        resolve();
      });
    });
  });

  await Promise.all(info);

  storiesInfo.value = sortStories(infoStory);
  loading.value = true;
};

// Get stories and users info
const getInfo = async (storyID: number): Promise<Story> => {
  const getStory = await fetchData(
    `https://hacker-news.firebaseio.com/v0/item/${storyID}.json`
  );
  const getUserInfo = await fetchData(
    `https://hacker-news.firebaseio.com/v0/user/${getStory.by}.json`
  );

  const info: Story = {
    id: getStory.id,
    score: getStory.score,
    title: getStory.title,
    url: getStory.url,
    time: convertTimeStamp(getStory.time),
    authorID: getUserInfo !== null ? getUserInfo.id : "-",
    karma: getUserInfo !== null ? getUserInfo.karma : "-",
    img: dummyImage(),
  };
  return info;
};

const showFilter = (param: Story[] | string) => {
  if (typeof param == "string") {
    // empty search value
    fetchStoriesInfo();
    notFoundSeach.value = false;
  } else {
    storiesInfo.value = param;
    if (param.length == 0) {
      notFoundSeach.value = true;
    }
  }
};
</script>

<template>
  <Search @filter="showFilter" v-if="loading" :storiesInfo="storiesInfo" />
  <Loading v-if="!loading" class="loading" />
  <div v-else v-for="info in storiesInfo" :key="info.id" class="news-item">
    <div class="img-box">
      <a :href="info.url" class="link-box" target="_blank"
        ><img :src="info.img"
      /></a>
    </div>
    <div class="content">
      <a :href="info.url" class="link-box" target="_blank">
        <h2>{{ info.title }}</h2>
      </a>
      <div class="meta">
        <div class="author">
          Author: <span>{{ info.authorID }}</span> - {{ info.karma }} Karma
        </div>
        <div class="score">{{ info.score }}<small>Score</small></div>
        <div class="date-publish">Published: {{ info.time }}</div>
        <a class="read-more" :href="'/' + info.authorID">Read more</a>
      </div>
    </div>
  </div>
  <div v-if="notFoundSeach">Not found, please search again</div>
</template>

<style scoped></style>
