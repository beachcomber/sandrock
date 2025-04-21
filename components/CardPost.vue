<script setup>

const props = defineProps(['posts']);

</script>

<template>
    <div class="grid md:grid-cols-3 gap-10 align-top">
        <div v-for="post in props.posts" :key="post.slug"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75 flex flex-col justify-between">
            <NuxtLink :to="post._path">
                <img :src="`/images/${post.cover}`" alt="Blog Post Cover Image"
                    class="w-full max-h-48 !my-0 object-cover">
            </NuxtLink>
            <div class="px-6 flex-grow">
                <h2 class="text-xl font-bold mt-2 mb-2">{{ post.title }}</h2>
                <p class="text-gray-700 mb-4">{{ post.description }}</p>
                <small class="text-gray-500 invisible">
                    {{ post.date }}
                </small>

            </div>
            <div class="px-6 pb-6">
                <NuxtLink :to="post._path"
                    class="bg-lime-600 hover:bg-lime-500 text-white py-2 px-4 self-end inline-block rounded float-right no-underline">
                    Read
                    More
                </NuxtLink>
            </div>
        </div>
    </div>
</template>