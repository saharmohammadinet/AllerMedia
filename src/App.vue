<template>
  <header class="header">
    <ContainerBox>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </ContainerBox>
  </header>
  <main>
    <router-view />
  </main>
</template>
<script setup>
import "./assets/styles/_header.scss";
import ContainerBox from "./components/ContainerBox.vue";
</script>
