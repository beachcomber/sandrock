<script setup>
const { data: posts } = useAsyncData('posts', () =>
    queryContent('/wildlife').find()
)

</script>
<template>
    <div>
        <section class="mx-auto max-w-7xl mb-8">
            <h1 class="text-3xl my-8 text-lime-900">Wildlife at Sandrock</h1>
            <p class="my-4">Sandrock Bends is home for many beutiful plants and animals. Here are some of the most
                interesting.
            </p>

            <p class="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla repellendus quas aut
                laborum vel
                voluptatibus, ex magnam ea laudantium libero pariatur nisi unde molestiae ullam recusandae aperiam ad
                sapiente!</p>
            <h2 class="my-4 text-2xl text-lime-600">Latest Posts</h2>
            <div class="grid md:grid-cols-3 gap-10 align-top">
                <CardPost :posts="posts" />
            </div>
        </section>
    </div>
</template>