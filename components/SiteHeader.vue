<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute();

const navigation = [
    { name: 'Home', href: '/', current: route.name === 'index' },
    { name: 'Wildlife', href: '/wildlife', current: route.name.includes('wildlife') },
    { name: 'Flooding', href: '/flooding', current: route.name.includes('flooding') },
    { name: 'About', href: '/about', current: route.name.includes('about') },
    {
        name: 'Links', href: '/links', current: route.name.includes('links')
    },
    { name: 'Affordable', href: '/affordable', current: route.name.includes('affordable') },
    { name: 'Infrastructure', href: '/infrastructure', current: route.name.includes('infrastructure') },
    // { name: 'Contact', href: '/contact', current: route.name === ('contact') },
    // { name: 'Contact', href: '/contact', current: route.name.includes('contact') },
]
</script>
<template>
    <Disclosure as="nav" class="bg-lime-900" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-lime-50 hover:bg-lime-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block size-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <!-- <div class="flex shrink-0 items-center">
                        <img class="h-8 w-auto"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company" />
                    </div> -->
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <nuxt-link v-for="item in navigation" :key="item.name" :to="item.href"
                                :class="[item.current ? 'bg-lime-600 text-lime-50' : 'text-lime-50 hover:bg-lime-500 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                    :class="[item.current ? 'bg-lime-600 text-lime-50' : 'text-lime-50 hover:bg-lime-600 hover:text-lime-50', 'block rounded-md px-3 py-2 text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>