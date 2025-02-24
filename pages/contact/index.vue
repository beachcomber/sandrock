<script setup>
import { EnvelopeIcon, HomeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
const { path } = useRoute()
const { data } = await useAsyncData('page-data', () => queryContent(path).findOne())
</script>
<template>
    <div class="my-10 mx-auto max-w-7xl">
        <div class="relative isolate bg-white">
            <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div
                            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-900/10 lg:w-1/2">
                        </div>
                        <h2 class="text-pretty text-4xl font-semibold tracking-tight text-lime-900 sm:text-5xl">Get
                            in <span class="text-lime-600">touch</span></h2>
                        <p class="mt-6 text-lg/8 text-gray-600">We are very keen for people to join in our campaign to
                            save beautiful Sandrock. What ever you can do to help, be it time or expertise will be
                            greatly appreciated</p>
                        <dl class="mt-10 space-y-4 text-base/7 text-gray-600">
                            <div class="flex gap-x-4 h-card">
                                <dt class="flex-none">
                                    <span class="sr-only">Address</span>
                                    <HomeIcon class="h-7 w-6 text-lime-900" aria-hidden="true" />
                                </dt>
                                <dd>St Helen's Lower Church Hall,<br />
                                    <span class="p-street-address">311 The Ridge</span>,<br />
                                    <span class="p-locality">Hastings</span>,<br />
                                    <span class="p-postal-code">TN34 2RA</span>
                                </dd>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Telephone</span>
                                    <PhoneIcon class="h-7 w-6 text-lime-900" aria-hidden="true" />
                                </dt>
                                <dd><a class="hover:text-lime-900" href="tel:+1 (555) 234-5678">+1 (555)
                                        234-5678</a></dd>
                            </div>
                            <div class="flex gap-x-4">
                                <dt class="flex-none">
                                    <span class="sr-only">Email</span>
                                    <EnvelopeIcon class="h-7 w-6 text-lime-900" aria-hidden="true" />
                                </dt>
                                <dd><a class="hover:text-lime-900 u-email"
                                        href="mailto:hello@example.com">hello@example.com</a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form 
                    name="contact-sandrock" 
                    method="POST" 
                    data-netlify="true" data-netlify-honeypot="bot-field"
                    data-netlify-recaptcha="true" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <input type="hidden" name="form-name" value="contact-sandrock">
                    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <p class="hidden">
                                    <label>
                                        Don’t fill this out if you’re human: <input name="bot-field" />
                                    </label>
                                </p>
                                <label for="first-name" class="block text-sm/6 font-semibold text-lime-900">First
                                    name</label>
                                <div class="mt-2.5">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-lime-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                                </div>
                            </div>
                            <div>
                                <label for="last-name" class="block text-sm/6 font-semibold text-lime-900">Last
                                    name</label>
                                <div class="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-lime-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="email" class="block text-sm/6 font-semibold text-lime-900">Email</label>
                                <div class="mt-2.5">
                                    <input type="email" name="email" id="email" autocomplete="email"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-lime-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="phone-number" class="block text-sm/6 font-semibold text-lime-900">Phone
                                    number</label>
                                <div class="mt-2.5">
                                    <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-lime-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block text-sm/6 font-semibold text-lime-900">Message</label>
                                <div class="mt-2.5">
                                    <textarea name="message" id="message" rows="4"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-lime-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                                </div>
                            </div>
                            <div data-netlify-recaptcha="true"></div>
                        </div>
                        <div class="mt-8 flex justify-end">
                            <button type="submit"
                                class="rounded-md bg-lime-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">Send
                                message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style></style>