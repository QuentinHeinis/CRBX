<script setup>
import Light from '@/components/UI_Kit/deco/Lights/Light.vue';
import FullBtn from '@/components/UI_Kit/Buttons/FullBtn.vue';
import BorderBtn from '@/components/UI_Kit/Buttons/BorderBtn.vue';
import Stars from '@/components/UI_Kit/deco/Stars.vue';
import HomeCards from '@/components/UI_Kit/Cards/HomeCards.vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import ItemCards from '@/components/UI_Kit/Cards/ItemCards.vue';
import CircleText from '@/components/UI_Kit/deco/CircleText.vue';
import PeopleCards from '@/components/UI_Kit/Cards/PeopleCards.vue';

const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
<script>
import { useRoute } from 'vue-router'
export default {
    data() {
        return {
            id: null,
            routeId: useRoute().params.id
        }
    },
    mounted() {
        // console.log(useRoute().params.id)
        this.id = useRoute().params.id
        console.log(this.routeId)
    },
    watch: {
        $route(to, from) {
            this.id = to.params.id
        }
    }
}

</script>

<template>
    <div class="lg:px-40 lg:pt-32 overflow-x-hidden">
        <section class="flex flex-col lg:flex-row w-full" v-if="id == 'offf'">
            <div class="relative px-3 md:px-10 order-2 text-white w-5/6 lg:w-7/12 lg:order-1">
                <h1 class="font-bold font-Sequel-45 z-10 text-2xl md:text-4xl">Welcome to the OFFF Collection, you will
                    find all the works made on CRBX.
                </h1>

                <h4 class="font-light my-5 z-10 font-startup-light text-lg md:text-3xl">
                    The OFFF is a Design Festival that welcomes every year innovative and international talents to share
                    their experiences and have moments of sharing and creativity.
                </h4>
                <Light class="top-0 lg:-left-3 w-20 h-20 lg:w-36 lg:h-36" />
                <Light class="top-12 left-28 w-20 h-20 lg:w-36 lg:h-36" />
                <Light class="-right-16 lg:translate-y-28 w-40 h-40" />
                <Stars class="absolute hidden lg:block -top-12 -right-3 w-10" />
                <Stars class="absolute hidden lg:block -left-10 delay" />
            </div>
            <div class="w-32 mx-auto order-1 self-center lg:order-2">
                <img src="/images/logos/logoOfff2.png" alt="">
            </div>
        </section>
        <section class="flex flex-col lg:flex-row w-full" v-if="id == 'all'">
            <div class="relative px-3 md:px-10 order-2 text-white w-5/6 lg:w-7/12 lg:order-1">
                <h1 class="font-bold font-Sequel-45 z-10 text-2xl md:text-4xl">Welcome to the Collection area,
                    here you will find all the works that were made on CRBX.
                </h1>

                <h4 class="font-light my-5 z-10 font-startup-light text-lg md:text-3xl">
                    Whether you are a beginner or a competent artist, you have participated in the OFFF-2022 or another
                    festival, all your works are exhibited in this collection!
                </h4>
                <Light class="top-0 lg:-left-3 w-20 h-20 lg:w-36 lg:h-36" />
                <Light class="top-12 left-28 w-20 h-20 lg:w-36 lg:h-36" />
                <Light class="-right-16 lg:translate-y-28 w-40 h-40" />
                <Stars class="absolute hidden lg:block -top-12 -right-3 w-10" />
                <Stars class="absolute hidden lg:block -left-10 delay" />
            </div>
            <CircleText class="order-1 -mt-16 lg:translate-x-32 lg:order-2 self-center" />
        </section>
        <section class="px-3 md:px-10">
            <div class="text-white my-28 relative flex w-full md:justify-center">
                <h2 class="flex justify-center text-xl md:text-4xl font-light gap-2 py-2 px-1 font-startup-light">
                    Look for a
                    <span class="font-bold flex gap-1 font-Sequel-45" v-if="id == 'all'">
                        CRBX<span class="text-xl relative -top-2">&copy;</span>
                    </span>
                    <span class="font-bold flex gap-1 font-Sequel-45" v-if="id == 'offf'">
                        OFFF<span class="text-xl relative -top-2">&copy;</span>
                    </span>
                    <span aria-hidden class="w-2/5 h-[2px] bg-white absolute left-0 bottom-0"></span>
                    collection
                </h2>
            </div>
            <div>
                <ul class="flex  text-white justify-center gap-5 font-startup-light">
                    <li class="flex gap-1 liste_container">categories
                        <ChevronDownIcon class="w-3 chevron" />
                    </li>
                    <li class="flex gap-1 liste_container">season
                        <ChevronDownIcon class="w-3 chevron" />
                    </li>
                    <li class="flex gap-1 liste_container font-Sequel-45">newest
                        <ChevronDownIcon class="w-3 chevron" />
                    </li>
                </ul>
            </div>

            <div
                class="mt-28 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-4/5 lg:w-full gap-x-7 gap-y-10 mx-auto">
                <ItemCards :FromCollection="false" :Collection="'machin'" class="mx-auto" />
                <ItemCards :Img="'/images/temporary/Image-1.png'" class="mx-auto" />
                <ItemCards :Img="'/images/temporary/Image-2.png'" class="mx-auto" />
                <ItemCards :Img="'/images/temporary/Image-3.png'" class="mx-auto" />
                <ItemCards :Img="'/images/temporary/Image-4.png'" class="mx-auto" />
                <ItemCards :Img="'/images/temporary/Image-5.png'" class="mx-auto" />
            </div>
        </section>
        <div class="w-screen absolute left-0 my-10" v-if="id == 'offf'">
            <img src="/images/fresque.png" alt="">
        </div>
        <div class="w-full flex justify-center mt-48 mb-28">
            <button class="font-startup-light text-xl text-white" @click="goTop">Back to top</button>
        </div>
    </div>
</template>

<style scoped>

</style>