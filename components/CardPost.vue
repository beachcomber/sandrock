<script setup>

const props = defineProps(['posts']);

</script>

<template>
    <div v-for="post in props.posts" :key="post.slug"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">
        <NuxtLink :to="post._path">
            <img :src="`/images/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover">
        </NuxtLink>
        <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
            <p class="text-gray-700 mb-4">{{ post.description }}</p>
            <small class="text-gray-500">
                {{ post.date }}
            </small>
            <NuxtLink :to="post._path"
                class="inline-block bg-lime-600 hover:bg-lime-500 text-white py-2 px-4 rounded float-right mb-8">Read
                More
            </NuxtLink>
        </div>
    </div>
</template>