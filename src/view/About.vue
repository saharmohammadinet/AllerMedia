<template>
  <ContainerBox>
    <div class="about">
      <p>Hello 😊</p>
      <p>
        My name is Sahar, I'm from Iran and I've been living in Denmark for 4
        years.
      </p>
      <p>
        Currently I'm working in <strong>Dawn Health</strong> and also I've
        worked in <strong>Loyaltykey</strong> and <strong>Html24</strong>, In
        Iran I was working as frontend developer aswell.
      </p>
      <p>
        In this Project I used <strong>Vue3</strong>,
        <strong>TypeScript </strong>and <strong>Vite</strong>, also I used
        <strong>Vue Router</strong> for showing the detail of users, if you
        click on the title of Story or the image, then you'll redirect to the
        source of story but if you click on <strong>Read more</strong> button,
        you'll redirect to dynamic router and shows short description.
      </p>
      <p>
        Also, you can use <strong>Search </strong>box to filter Stories, you
        should write more than 3 characters.
      </p>

      <p>
        Beside this project, I would like to impelement this project in Nuxt and
        also add some unit test but as I talked to Anna, I was sick and didn't
        have time to do more
      </p>
      <p>I'm looking forward to get your feedbacks 😊.</p>
      <p>Best Regards <br />Sahar</p>
    </div>
  </ContainerBox>
</template>
<script setup lang="ts">
import ContainerBox from "../components/ContainerBox.vue";

import { useHead } from "@vueuse/head";

useHead({
  title: "About us",
});
</script>
<style scoped lang="scss">
.about {
  padding-top: 50px;
  line-height: 28px;
}
</style>
