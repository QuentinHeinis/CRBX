<script setup>
import Light from '../components/UI_Kit/deco/Lights/Light.vue';
import FullBtn from '../components/UI_Kit/Buttons/FullBtn.vue';
import BorderBtn from '../components/UI_Kit/Buttons/BorderBtn.vue';
import Stars from '../components/UI_Kit/deco/Stars.vue';
import HomeCards from '../components/UI_Kit/Cards/HomeCards.vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import ItemCards from '../components/UI_Kit/Cards/ItemCards.vue';
import CircleText from '../components/UI_Kit/deco/CircleText.vue';
import PeopleCards from '../components/UI_Kit/Cards/PeopleCards.vue';
import { supabase } from '../supabase';
import { ref, onMounted } from 'vue';
const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
let dataShow = ref([])
onMounted(async () => {
    const getUserData = async (id) => {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', id)
        return data
    }
    const { data, error } = await supabase
        .from('nft')
        .select('*')
        .limit(10)
    for (let i = 0; i < 10; i++) {
        if (data[i]) {
            let username = ref()
            let userPic = ref()
            await getUserData(data[i].id_user)
                .then(response => {
                    username.value = Object.values(response)[0].username
                    userPic.value = Object.values(response)[0].img
                })
            data[i].username = username.value
            data[i].userPic = userPic.value
            dataShow.value.push(data[i])

        }
    }
})
</script>

<template>
    <div class="lg:px-40 lg:pt-32 overflow-x-hidden">
        <section class="flex flex-col lg:flex-row w-full">
            <div class="relative px-3 md:px-10 order-2 text-white w-5/6 lg:w-7/12 lg:order-1">
                <h1 class="font-bold font-Sequel-45 z-10 text-2xl md:text-4xl">Welcome to CreateBox,
                    <span class="font-bold z-10"> a site that
                        allows you to create unique
                        work !
                    </span>
                </h1>
                <h4 class="font-light my-5 z-10 font-startup-light text-lg md:text-3xl">Let yourself be guided in our
                    universe, to
                    create an original work to your style.
                </h4>
                <div class="flex gap-8 z-10 flex-wrap">
                    <FullBtn :to="'/Create'" class="text-xs md:text-2xl font-Sequel-45">create</FullBtn>
                    <BorderBtn :to="'/collection'" class="text-xs md:text-2xl font-startup-light">collections
                    </BorderBtn>
                </div>
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
                    How to use
                    <span class="font-bold flex gap-1 font-Sequel-45">
                        CRBX<span class="text-xl relative -top-2">&copy;</span>
                    </span>
                    <span aria-hidden class="w-2/5 h-[2px] bg-white absolute left-0 bottom-0"></span>
                </h2>
            </div>
            <div class="flex h-fit flex-wrap justify-around gap-x-[5%] gap-y-7 relative">
                <HomeCards :title="'Create your own NFT using the CRBX tool'">CRBX use his own intuitive and creativity
                    generator based on your thought and imagination
                </HomeCards>
                <HomeCards :title="'Let us guide you through our universe'">CRBX use his own intuitive and creativity
                    generator based on your thought and imagination
                </HomeCards>
                <HomeCards :title="'Create your own NFT using the CRBX tool'">CRBX use his own intuitive and creativity
                    generator based on your thought and imagination
                </HomeCards>
                <Stars class="absolute -right-2 md:-right-10 -z-10" />
            </div>
        </section>
        <section class="px-3 md:px-10">
            <div class="text-white my-28 relative flex w-full md:justify-center">
                <h2 class="flex justify-center text-xl md:text-4xl font-light gap-2 py-2 px-1 font-startup-light">
                    Look for a
                    <span class="font-bold flex gap-1 font-Sequel-45">
                        CRBX<span class="text-xl relative -top-2">&copy;</span>
                    </span>
                    <span aria-hidden class="w-2/5 h-[2px] bg-white absolute left-0 bottom-0"></span>
                    creation
                </h2>
            </div>
            <div
                class="mt-28 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-4/5 lg:w-full gap-x-7 gap-y-10 mx-auto">
                <ItemCards v-for="                               nft                                in dataShow"
                    :key="nft.id_nft" :creator="nft.username" :title="nft.prompt" :Img="nft.img" :backImg="nft.draw"
                    :avatar="nft.userPic" :id="nft.id_nft" :audio="nft.url_son" class="mx-auto" />
            </div>
        </section>

        <div class="w-full flex justify-center mt-48 mb-28">
            <button class="font-startup-light text-xl text-white" @click="goTop">Back to top</button>
        </div>
    </div>
</template>

<style scoped>

</style>