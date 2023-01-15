<script setup>
import Light from '@/components/UI_Kit/deco/Lights/Light.vue';
import FullBtn from '@/components/UI_Kit/Buttons/FullBtn.vue';
import BorderBtn from '@/components/UI_Kit/Buttons/BorderBtn.vue';
import Stars from '@/components/UI_Kit/deco/Stars.vue';
import HomeCards from '@/components/UI_Kit/Cards/HomeCards.vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import ItemCards from '@/components/UI_Kit/Cards/ItemCards.vue';
import CircleTextNo from '@/components/UI_Kit/deco/CircleTextNo.vue';
import PeopleCards from '@/components/UI_Kit/Cards/PeopleCards.vue';

const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <div class="lg:px-40 lg:pt-32 min-h-screen overflow-x-hidden">
        <section class="flex flex-col lg:flex-row w-full">
            <div class="relative px-3 md:px-10 order-2 text-white w-5/6 lg:w-7/12 lg:order-1">
                <h1 class="font-bold font-Sequel-45 z-10 text-2xl md:text-4xl">contact / socials
                </h1>
                <h4 class="font-light my-5 z-10 font-startup-light text-lg md:text-3xl">Here are the links where you can
                    contact us. Follow us on our Instagram account to be the first to have all the information !
                </h4>
                <h3 class="font-bold font-Sequel-45 z-10 text-lg md:text-2xl">@CRBX
                </h3>
                <h3 class="font-bold font-Sequel-45 z-10 text-lg md:text-2xl">MMI Montbéliard, 4 Place Tharradin, 25200
                </h3>
                <Light class="top-0 lg:-left-3 w-20 h-20 lg:w-36 lg:h-36" />
                <Light class="top-12 left-28 w-20 h-20 lg:w-36 lg:h-36" />
                <Light class="-right-16 lg:translate-y-28 w-40 h-40" />
                <Stars class="absolute hidden lg:block -top-12 -right-3 w-10" />
                <Stars class="absolute hidden lg:block -left-10 delay" />
            </div>
            <CircleTextNo class="order-1 -mt-16 lg:translate-x-32 lg:order-2 self-center" />
        </section>
    </div>
</template>