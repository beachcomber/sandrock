<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid';

const { data: posts } = useAsyncData('posts', () =>
    queryContent('/wildlife')
        .sort({ date: 1 })
        .limit(3)
        .find()
)

const config = {
    height: 350,
    itemsToShow: 2,
    gap: 5,
    autoplay: 4000,
    wrapAround: true,
    pauseAutoplayOnHover: true,

};

const images = [
    { src: "/images/Harrow-lane/Harrow-Lane-April-2009.webp", year: "2009", link: "https://maps.app.goo.gl/4DaVtEZ5CBSmLUAm7" },
    { src: "/images/Harrow-lane/Harrow-Lane-September-2011.webp", year: "2011", link: "https://maps.app.goo.gl/jbRNdtK4XEbbzPKA9" },
    { src: "/images/Harrow-lane/Harrow-Lane-May-2012.webp", year: "2012", link: "https://maps.app.goo.gl/ZLatNLQMTJZ7AjHr6" },
    { src: "/images/Harrow-lane/Harrow-Lane-August-2016.webp", year: "2016", link: "https://maps.app.goo.gl/rB21zEtCUgzVVdzQ9" },
    { src: "/images/Harrow-lane/Harrow-Lane-June-2017.webp", year: "2017", link: "https://maps.app.goo.gl/JWVxGjjH3cdkHkvt6" },
    { src: "/images/Harrow-lane/Harrow-Lane-September-2021.webp", year: "2021", link: "https://maps.app.goo.gl/ypcpNuVithPBs7PT6" },
    { src: "/images/Harrow-lane/Harrow-Lane-October-2023.webp", year: "2023", link: "https://maps.app.goo.gl/rNjrvoCJJThL9Qgx9" },
    { src: "/images/Harrow-lane/Harrow-Lane-August-2024.webp", year: "2024", link: "https://maps.app.goo.gl/GJLyKFJsWsU1ijnS6" },
]

</script>
<template>
    <div class="relative isolate overflow-hidden bg-white">
        <div class="prose prose-2xl prose-slate mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8 lg:pr-8">

                <h1 class=" mt-10 text-pretty text-5xl font-semibold tracking-tight text-lime-900 sm:text-7xl">Sandrock
                    needs your <span class="text-lime-600">help!</span></h1>
                <p class="mt-8 text-pretty text-lg sm:text-xl/8">The local council in it's
                    wisdom has seen fit to bulldoze the last green corridors in Hastings.
                </p>
                <p class="mt-8 text-pretty text-lg sm:text-xl/8">Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Consequatur, dolores. Numquam aperiam molestias quod fugit iusto
                    rerum, pariatur totam esse, autem dolore commodi voluptas. Quibusdam suscipit ab facere
                    obcaecati?
                    Incidunt.a</p>
                <div class="mt-10 flex items-center gap-x-6">
                    <NuxtLink to="/about" class="text-sm/6 font-semibold text-lime-900">Learn more <span
                            aria-hidden="true">→</span></NuxtLink>
                </div>
            </div>
            <div
                class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                <div class="max-w-3xl flex-none sm:max-w-5xl sm:overflow:hidden md:overflow-visible lg:max-w-none">
                    <div class="">
                        <img src="/images/flora/LadysSmock-sm.jpg" alt="Lady's Smock at Sandrock Hastings" width="2432"
                            height="1442" class="w-[76rem] rounded-md shadow-md ring-1 ring-lime-900/10" />
                    </div>
                </div>
            </div>
        </div>
        <section class="prose prose-slate mx-auto max-w-7xl mb-8">
            <h2 class="text-3xl my-8 text-lime-900">What we are trying to protect</h2>
            <p>Please take a moment to enjoy the beauty of Sandrock with this stunning drone video.</p>
            <div class="grid md:grid-cols-1 gap-10 align-top">
                <lite-youtube videoid="6NiaqVMyYic" playlabel="Sandrock Bends - Hastings"
                    params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1" class="max-w-full" />
            </div>
        </section>
        <section class="prose prose-slate mx-auto max-w-7xl mb-8">
            <h2 class="text-3xl my-8 text-lime-900">This is the reality of what <span
                    class="text-lime-600">Sandrock</span> will become:
            </h2>

            <p>In September 2018 Hastings town planners gave approval for the development of 140 new homes on the Harrow
                Lane Recreation ground. This is reality of what will befall <strong>Sandrock!</strong> if we fail to
                protect this vital ecosystem!can be graphicly illustrated by these Google
                Map Streetview images of the Harrow Lane through the years.</p>
            <p>Please get involved to help prevent the same fate befalling <bold>Sandrock!</bold>
            </p>
        </section>
        <section>
            <h3 class="text-3xl my-8 text-lime-900"><span class="text-lime-600">Harrow lane</span> 2009 - 2025 Google
                Streetview images
            </h3>
            <Carousel v-bind="config">
                <Slide v-for="(image, index) in images" :key="index">
                    <a :href="image.link" target="_blank" rel="noopener" title="view on Google Maps, Streetview">
                        <img :src="image.src" :alt="image.year + ' Google Street View image'" />
                        <time datetime="YYYY">{{ image.year }}</time>
                    </a>
                </Slide>
            </Carousel>
        </section>
    </div>
</template>
<style scoped>
.carousel button.carousel__prev,
.carousel button.carousel__next {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
}

.carousel time {
    font-size: 10rem;
    color: #fff;
    opacity: 0.5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    z-index: 100;
    font-weight: 700;
}
</style>