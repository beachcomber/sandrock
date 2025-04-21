<script setup>
const { path } = useRoute()
const { data } = await useAsyncData('page-data', () => queryContent(path).findOne())
</script>
<template>
    <main class="prose prose-slate my-10 mx-auto max-w-7xl">
        <ContentRenderer :value="data" class="my-10 mx-auto max-w-7xl" tag="article">
            <h1 class="text-lime-900">{{ data.title }}</h1>
            <ContentRendererMarkdown :value="data" class="text-pretty text-lg sm:text-xl/8" />
        </ContentRenderer>
    </main>
</template>


<style></style>