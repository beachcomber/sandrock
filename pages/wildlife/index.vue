<script setup>
const { data: posts } = useAsyncData('posts', () =>
    queryContent('/wildlife').find()
)

</script>
<template>
    <div>
        <article class="mx-auto my-30 max-w-3xl prose text-xl prose-slate">
            <h1 class="pt-8 text-pretty text-4xl font-semibold tracking-tight text-lime-900 sm:text-5xl">Wildlife</h1>

            <p>
                The land at Sandrock Bends offers food, shelter and safety to a wide variety of birds, bees, bats and
                other species, including ancient woodland. Some of these species are endangered.
            </p>

            <p>
                In 2020, <a href="https://www.hastings.gov.uk/planning/policy/new-local-plan/site-allocation/HL19/"
                    target="_blank">Hastings
                    Borough Council</a> said the proposal should <q>avoid or mitigate any impact on the adjacent
                    woodland and St Helens Wood Local Wildlife Site and Local
                    Nature Reserve.</q>
            </p>

            <p>
                It is difficult to see how this can happen when the proposed site includes ancient woodland, by
                definition irreplaceable.
            </p>

            <h2>Wildlife corridor</h2>

            <p>
                The area also forms a critical link or wildlife corridor between St Helen’s Woods (a designated local
                nature reserve) and the countryside of the High Weald. This project would cut off that link and dissuade
                or even prevent wildlife from leaving or entering the green spaces of Hastings, as you can see in this
                video.

                <lite-youtube videoid="6NiaqVMyYic" playlabel="Sandrock Bends - Hastings"
                    params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1" class="max-w-full" />
                (Link in video DJI_0074.MP4 under 30 Jan 2024 in 20 Drone pictures folder to illustrate corridor)
            </p>

            Deer and other mammals, seeds, and insects pass between the High Weald and St Helen’s Woods via this
            corridor, as seen on our camera traps. (image or video here?

            This corridor is essential for the health and continuity of a wide range of species, particularly in
            these
            times of climate change.

            Effect of flooding on wildlife

            In the Flooding section, you can learn about the risk of flooding this development will pose.

            More water in this area will increase the risk of:

            soil erosion
            mudslides
            habitat loss
            water-borne pollution

            St Helen’s Woods are a haven for a wide range of species, including English bluebells a rare and rapidly
            disappearing plant species. These and wildlife around the former pond area could suffer from polluted
            water
            run-off.

            Species

            The development site houses ancient trees, hedgerows, bat and badger habitats, and other rapidly
            declining
            natural features. They would be destroyed forever if this development goes ahead.

            Some 577 species have been recorded in this area, according to a 2024 Sussex Biodiversity Report.(link
            to
            SxBRCSummaryReport_StHelensParkandSandrockBends (3)PDF under 30 Ecology Data / Surveys in shared folder)

            Species currently thriving there include:

            at least seven types of bat, including some vulnerable and near-threatened species, according to the Bat
            Conservation Trust
            badgers, a protected species
            dormice, described by ZSL as “at risk of extinction”
            (https://www.zsl.org/what-we-do/species/hazel-dormouse)
            birds with conservation concern status such as the:
            song thrush, dunnock, wren, and bullfinch (Amber list of concern)
            Greenfinch and spotted flycatcher (Red list, or endangered)

            incidentally, Japanese Knotweed is present in the area. Disturbing the ground could trigger its spread
            into
            St. Helen’s Woods if not dealt with effectively.

            Below, see some examples of the wide range of species at risk. For a full list of the many species
            present
            in the development area, click here (ADD LINK TO Sandrock Wildlife Inventory 07Mar2025.docx under DOC 30
            ECOLOGICAL SURVEY in shared folder)

            FOLLOW WITH COLLECTION OF IMAGES AND BRIEF INFO (see current example on webpage)

        </article>
        <!-- <section class="mx-auto max-w-7xl mb-8">
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
        </section> -->
    </div>
</template>