<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { fetchData } from "../modules/FetchData";
import { convertTimeStamp } from "../modules/ConvertTimeStamp";

import { useRoute, useRouter } from "vue-router";

//Component
import ContainerBox from "./ContainerBox.vue";
import Loading from "./Loading.vue";
import "../assets/styles/_detail.scss";

const route = useRoute();
const router = useRouter();

const loading = ref(false);

interface Detail {
  about: string;
  time: string;
  authorID: string;
  karma: number;
}
const userInfo = ref<Detail | void>();

onMounted(async function () {
  const author: string | string[] = route.params.author;
  userInfo.value = await getUserInfoFn(author);
  loading.value = true;
});

const getUserInfoFn = async (
  param: string | string[]
): Promise<Detail | void> => {
  if (typeof param === "string") {
    const getUserInfo = await fetchData(
      `https://hacker-news.firebaseio.com/v0/user/${param}.json`
    );
    if (getUserInfo != null) {
      const info: Detail = {
        about: getUserInfo.about,
        time: convertTimeStamp(getUserInfo.created),
        authorID: getUserInfo !== null ? getUserInfo.id : "-",
        karma: getUserInfo !== null ? getUserInfo.karma : "-",
      };
      return info;
    } else {
      router.push("/");
    }
  } else {
    return;
  }
};
</script>

<template>
  <ContainerBox>
    <Loading v-if="!loading" />
    <div v-else class="detail">
      <div>
        <span>About:</span>
        <p v-html="userInfo?.about"></p>
      </div>
      <div>
        <p><span>Published: </span>{{ userInfo?.time }}</p>
      </div>
      <div>
        <p><span>Author: </span>{{ userInfo?.authorID }}</p>
      </div>
      <div>
        <p><span> Karma:</span> {{ userInfo?.karma }}</p>
      </div>
    </div>
  </ContainerBox>
</template>
