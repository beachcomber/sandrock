<template>
    <div>
        <div v-for="(src, index) in imgs" :key="index" class="pic" @click="() => showImg(index)">
            <img :src="src" />
        </div>
        <VueEasyLightbox :visible="visibleRef" :imgs="imgs" :index="indexRef" @hide="onHide" />
    </div>
</template>

<script setup>
const visibleRef = ref(false);
const indexRef = ref(0);

const imgs = [
    {src: "https://maps.app.goo.gl/PwQwSNZdZfL763689", title: "Harrow Lane August 2024 - from Google Maps"},
    {src: "https://maps.app.goo.gl/LwJtT8uJoPQA1nT36", title: "Harrow Lane October 2023 - from Google Maps"},
    {src: "https://maps.app.goo.gl/feiTZsxwwouX4tW56", title: "Harrow Lane September 2021 - from Google Maps"},
    {src: "https://maps.app.goo.gl/5e93qWnXutCqfoiJA", title: "Harrow Lane June 2017 - from Google Maps"},
    {src: "https://maps.app.goo.gl/MzUt2LWvCCeJq6g78", title: "Harrow Lane August 2016 - from Google Maps"},
    {src: "https://maps.app.goo.gl/ASZLz2hdaqXHdLC3A", title: "Harrow Lane May 2012 - from Google Maps"},
    {src: "https://maps.app.goo.gl/Y5gxKrbiyCdEhfVV7", title: "Harrow Lane September 2011 - from Google Maps"},
    {src: "https://maps.app.goo.gl/FCNZsG5p87PATJTJ7", title: "Harrow Lane April 2011 - from Google Maps"},
    {src: "https://maps.app.goo.gl/dbhivUBe1MjijBxH8", title: "Harrow Lane April 2009 - from Google Maps"},
];

const showImg = (index) => {
    indexRef.value = index;
    visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);
</script>