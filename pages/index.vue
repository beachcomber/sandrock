<script setup>
const { data: posts } = useAsyncData('posts', () =>
    queryContent('/blog')
        .sort({ date: 1 })
        .limit(3)
        .find()
)
</script>
<template>
    <div>
        <section>
            <h1 class="text-5xl font-bold mt-20">👋 Hello World! I'm Robert Wakeford</h1>
            <p class="text-base text-grey-900 p2 italic">I'm a full stack developer</p>
        </section>
        <section class="flex flex-col md:flex-row">
            <div class="md:w-3/4">
                <h2 class="text-3xl font-bold mt-20">Section Header</h2>
                <p class="text-lg py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed odio eos aliquam
                    unde
                    similique, optio aut
                    praesentium laborum quas officiis deserunt, earum a, mollitia officia illo dolorum! Consectetur, at
                    sapiente.</p>
                <p class="text-lg py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed cupiditate tempora
                    labore
                    odit voluptatum non,
                    dicta deleniti, expedita neque doloribus cum vel illo consectetur eveniet quos qui, laudantium
                    veritatis
                    quibusdam.</p>
            </div>
            <img src="https://avatars.githubusercontent.com/u/572593?v=4&size=64" alt="Robert Wakeford"
                class="w-1/2 md:max-w-sm self-start p-8 mx-auto rounded-full" />
        </section>
        <section>
            <h2 class="text-3xl font-bold mt-20">Latest Posts</h2>
            <div class="grid md:grid-cols-3 mt-8 gap-10">
                <CardPost :posts="posts" />
            </div>
        </section>
    </div>
</template>