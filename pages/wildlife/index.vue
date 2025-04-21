<script setup>
    const { path } = useRoute()
const { data } = await useAsyncData('page-data', () => queryContent(path).findOne())
    const { data: posts } = useAsyncData('posts', () =>
    queryContent('/wildlife/posts').find()
)
</script>
<template>
    <div class="prose prose-slate text-lg sm:text-xl/8 my-10 mx-auto max-w-7xl">
        <section>
            <ContentRenderer :value="data" class="" tag="article">
                <h1 class="pt-8 text-4xl font-semibold tracking-tight text-lime-900 sm:text-5xl">Wildlife at
                    <span href="" class="text-lime-600">Sandrock Bends</span>
                </h1>
                <ContentRendererMarkdown :value="data" class="" />
            </ContentRenderer>
        </section>
        <section class="mx-auto max-w-7xl mb-8">
            <CardPost :posts="posts" />
        </section>
    </div>
</template>



<style></style>