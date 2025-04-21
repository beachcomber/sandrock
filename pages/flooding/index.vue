<script setup>
    const { path } = useRoute()
    const { data } = await useAsyncData('page-data', () => queryContent(path).findOne())
</script>
<template>
    <div class="prose prose-slate text-lg sm:text-xl/8 my-10 mx-auto max-w-7xl">
        <ContentRenderer :value="data" class="" tag="article">
            <h1 class="pt-8 text-4xl font-semibold tracking-tight text-lime-900 sm:text-5xl">Flooding
                <span href="" class="text-lime-600">Risk</span>
            </h1>
            <ContentRendererMarkdown :value="data" class="" />
        </ContentRenderer>
    </div>
</template>



<style></style>