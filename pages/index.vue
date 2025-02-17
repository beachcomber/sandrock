<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid';
//import getPdf, { getAllFiles } from '~/composables/getAllFiles';
//import useAssets from '~/composables/useAssets';




const sandRockBends = process.env.STATIC_REFERRAL_DOCS;
//const data = getAllFiles();



//const audioFile = useAssets(`/assets/audio/${audioFileName}`)

const { data: posts } = useAsyncData('posts', () =>
    queryContent('/wildlife')
        .sort({ date: 1 })
        .limit(3)
        .find()
)


</script>
<template>
    <div class="relative isolate overflow-hidden bg-white">
        <!-- <svg class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true">
            <defs>
                <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1"
                    patternUnits="userSpaceOnUse">
                    <path d="M.5 200V.5H200" fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
        </svg> -->
        <div class="prose prose-2xl prose-slate mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">

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
            <h2 class="text-3xl my-8 text-lime-900">The is the reality of what <span
                    class="text-lime-600">Sandrock</span> will become:
            </h2>

            <p>In September 2018 Hastings town planners gave approval for the development of 140 new homes on the Harrow
                Lane Recreation ground. This is reality of what will befall <strong>Sandrock!</strong> if we fail to
                protect this vital ecosystem!can be graphicly illustrated by these Google
                Map Streetview images of the Harrow Lane through the years.</p>
            <p>Please get involved to help prevent the same fate befalling <bold>Sandrock!</bold>
            </p>
            <lightbox />
        </section>
    </div>
</template>
