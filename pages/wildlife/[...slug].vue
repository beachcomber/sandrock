<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`blog-article`, () => {
    return queryContent()
        .where({ _path: path })
        .findOne()
})
</script>
<template>
    <div class="">
        <ContentRenderer :value="data" class="prose my-8 mx-auto max-w-7xl" tag="article">
            <h1 class="text-3xl my-8 text-lime-900">{{ data.title }}</h1>
            <ContentRendererMarkdown :value="data" class="my-8" />
        </ContentRenderer>
        <div class="my-8">
            <a v-for="tag in data.tags " :key="tag" :href="`/blog/tags/${tag}`"
                class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-4">
                <Icon name="pajamas:label" size="1.5rem" class="text-gray-100 mr-2" /> {{ tag }}
            </a>
        </div>
    </div>
</template>