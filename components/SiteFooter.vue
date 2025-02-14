<script setup>
const links = [
    { name: 'GitHub', href: 'http://github.com', icon: 'mdi:github' },
    { name: 'Twitter', href: 'http://x.com', icon: 'prime:twitter' },
    { name: 'LinkedIn', href: 'http://linkedin.com', icon: 'mdi:linkedin' },
]
</script>
<template>
    <footer class="bg-lime-900 py-8 ">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-row">
            <p class="flex-1 text-sm text-gray-500">© 2021 Robert Wakeford</p>
            <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
                <a v-for="link in links" :key="link.name" :href="link.href" class="text-gray-500 hover:text-white">
                    <Icon :name="link.icon" size="1.5rem" class="text-grey-300"/>
                </a>
            </div>
        </div>
    </footer>
</template>