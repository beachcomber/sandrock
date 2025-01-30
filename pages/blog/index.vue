<script setup>
const { data:posts } = useAsyncData('posts', () => 
    queryContent('/blog').find()
)

console.log(posts);
</script>
<template>
    <div>
        <section>
            <h1 class="text-3xl my-8">Blog Posts</h1>
            <p>I would like to tell you about everything I am currently working on or somethingnew that interests me.
            </p>
            <p>If you would like to write about something or be a guest contributor please reachout to me on X or
                linkedIn.</p>
        </section>
        <section>
            <h2>Latest Posts</h2>
            <div class="grid md:grid-cols-3 mt-8 gap-10">
                <CardPost :posts="posts" />
            </div>
        </section>
    </div>
</template>