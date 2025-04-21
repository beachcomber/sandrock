<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid';

const { data: posts } = useAsyncData('posts', () =>
    queryContent('/wildlife')
        .sort({ date: 1 })
        .limit(3)
        .find()
);

const socials = [
    { name: 'Facebook', href: 'https://www.facebook.com/share/1A2cv68dp8/?mibextid=wwXIfr', icon: 'fa-brands:facebook-square' },
];

const config = {
    height: 350,
    itemsToShow: 1,
    gap: 5,
    autoplay: 4000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
    snapAlign: 'center',
    breakpointMode: 'viewport',
    breakpoints: {
        // 500px and up
        1000: {
            itemsToShow: 2,
            snapAlign: 'start',
        },
    },
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
        <div class="prose prose-2xl prose-slate mx-auto max-w-7xl px-6 pb-10 pt-10 lg:flex lg:px-8 lg:pt-20 lg:pb-0">
            <div class="mx-auto lg:max-w-md lg:mx-0 lg:shrink-0 lg:pt-8 lg:pr-8">

                <h1 class=" mt-10 text-pretty text-5xl font-semibold tracking-tight text-lime-900 sm:text-7xl">Sandrock
                    needs your <span class="text-lime-600">help!</span></h1>
                <p class="mt-8 text-pretty text-lg sm:text-xl/8">Sandrock Bends on The Ridge is currently under
                    threat of development for 80 houses, destroying the last remaining wildlife corridor between the
                    High Weald and St Helen's Woods. We need your
                    help to stop this from happening.
                </p>
                <div class="mt-10 flex flex-col">
                    <h5>Learn more about each impact</h5>
                    <ul class="mt-0">
                        <li class="text-pretty text-lg sm:text-xl/8 m-0">
                            <NuxtLink to="/wildlife">Wildlife</NuxtLink>
                        </li>
                        <li class="text-pretty text-lg sm:text-xl/8 m-0">
                            <NuxtLink to="/flooding">
                                Flooding</NuxtLink>
                        </li>
                        <li class="text-pretty text-lg sm:text-xl/8 m-0">Infrastructure Traffic and Transport</li>
                        <li class="text-pretty text-lg sm:text-xl/8 m-0">Affordable Housing?</li>
                    </ul>
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
            <h2 class="text-3xl my-8 text-lime-900">Join the campaign!</h2>
            <p class="mt-8 text-pretty text-lg sm:text-xl/8">
                From sharing on Facebook to joining our team, you can make a difference.
            </p>
            <h3>Get Started here:</h3>
            <ul>
                <li class="text-pretty text-lg sm:text-xl/8 m-0">Use this website to learn more</li>
                <li class="text-pretty text-lg sm:text-xl/8 m-0"><strong>Donate or share on the</strong> <a
                        href="https://www.justgiving.com/page/savesthelenswoodswildcorridor?utm_medium=FR&utm_source=CL"
                        target="_blank">Just
                        Giving</a> page to support the cost of professional
                    expertise to inform their response.</li>
                <li class="text-pretty text-lg sm:text-xl/8 m-0">Email all Hastings Borough Councillors: See their email
                    addresses <a href="https://hastings.moderngov.co.uk/mgCommitteeMailingList.aspx?ID=0"
                        target="_blank">here</a>.</li>
                <li class="text-pretty text-lg sm:text-xl/8 m-0"><strong>Share</strong> on social media.</li>
                <li class="text-pretty text-lg sm:text-xl/8 m-0"><strong>Write to or email our MP</strong> <a
                        href="mailto:helena.dollimore.mp@parliament.uk">helena.dollimore.mp@parliament.uk</a> with
                    concerns about
                    landslips, flooding, and erosion. See <NuxtLink to="/flooding">HERE</NuxtLink> for more details on
                    these issues (Link HERE to Flooding
                    page</li>
                <li class="text-pretty text-lg sm:text-xl/8 m-0"><strong>Contact us</strong> to help with leafleting,
                    media management, or to offer other skills on
                    <a href="mailto:savesandrockbends@gmail.com">savesandrockbends@gmail.com</a>.
                </li>
                <li class="text-pretty text-lg sm:text-xl/8 m-0">
                    <strong>Comment on HBC planning page:</strong> We’ll provide a link as soon as it opens.
                </li>
                <li class="text-pretty text-lg sm:text-xl/8 m-0">
                    Review <a href="https://your-views.co.uk/hastingstheridge/#firstPage/visionandplans"
                        target="_blank">the Gladmans Sales Pitch</a>.
                </li>
            </ul>

            <!-- <p class="text-center">
                <a v-for="social in socials" :key="social.name" :href="social.href">
                    <Icon :name="social.icon" size="8rem"
                        class="text-lime-900 hover:text-facebook active:text-facebook" />
                </a>
            </p> -->
        </section>
        <section class="prose prose-slate mx-auto max-w-7xl mb-8">
            <h2 class="text-3xl my-8 text-lime-900">What we are trying to protect</h2>
            <p class="text-pretty text-lg sm:text-xl/8">Please take a moment to enjoy the beauty of Sandrock with this
                stunning drone video.</p>
            <div class="grid md:grid-cols-1 gap-10 align-top">
                <lite-youtube videoid="6NiaqVMyYic" playlabel="Sandrock Bends - Hastings"
                    params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1" class="max-w-full" />
            </div>
        </section>
        <section class="prose prose-slate mx-auto max-w-7xl mb-8">
            <h2 class="text-3xl my-8 text-lime-900">This is the reality of what <span
                    class="text-lime-600">Sandrock</span> will become:
            </h2>

            <p class="text-pretty text-lg sm:text-xl/8">In September 2018 Hastings town planners gave approval for the
                development of 140 new homes on the Harrow
                Lane Recreation ground. This is reality of what will befall <strong>Sandrock!</strong> if we fail to
                protect this vital ecosystem!can be graphicly illustrated by these Google
                Map Streetview images of the Harrow Lane through the years.</p>
            <p class="text-pretty text-lg sm:text-xl/8">Please <a
                    href="https://www.facebook.com/share/1A2cv68dp8/?mibextid=wwXIfr"
                    class="text-lime-900 hover:text-lime-600">get involved</a> to help prevent
                the same fate befalling
                <bold>Sandrock!</bold>
            </p>
        </section>
        <section class="mx-auto max-w-7xl mb-8">
            <h3 class=" text-pretty text-lg sm:text-xl/8 my-8 text-lime-900"><span class="text-lime-600">Harrow
                    lane</span> 2009 - 2024 Google
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