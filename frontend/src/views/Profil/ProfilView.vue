<script setup>
import { user, signout, supabase } from '@/supabase'
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import ItemCards from '../../components/UI_Kit/Cards/ItemCards.vue';
import router from '../../router'
let username = ref()
let creationDate = ref()
let profilPicture = ref()
let userPic = ref()

const getData = () => {
    creationDate.value = user.value.created_at.split("T")
    profilPicture.value = user.value.user_metadata?.picture
}
getData()
const getUserData = async (id) => {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
    return data
}
getUserData(user.value.id)
    .then(response => {
        username.value = Object.values(response)[0].username
        userPic.value = Object.values(response)[0].img
    })
const signOut = () => {
    signout()
    setTimeout(() => {
        router.replace('/')

    }, 1000);
}
const { data, error } = await supabase
    .from('nft')
    .select('*')
    .eq('id_user', user.value.id)
let dataShow = ref([])
for (let i = 0; i < 3; i++) {
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
</script>
<template>
    <div class="lg:px-40 lg:pt-32 overflow-x-hidden text-white min-h-screen">
        <section class="flex flex-col pl-4 gap-4 relative">
            <div class="font-startup-light">
                <div class="relative w-2/3 md:w-1/2 ">
                    <h1 class="font-Sequel-45 text-3xl w-fit py-2 px-4">
                        Your Profil
                    </h1>
                    <RouterLink to="/Edit" class="absolute right-0 top-5">Edit</RouterLink>
                </div>
                <p>nickname : <span class="font-Sequel-45">{{ username }}</span></p>
                <p>creation date : <span class="font-Sequel-45">{{
                    creationDate[ 0 ].split('-').reverse().join('/')
                }}</span>
                </p>
                <div class="md:absolute md:-top-20 md:right-0">
                    <div class="relative flex w-fit">
                        <div class="colorReverse max-w-md rounded-full scale-75">
                            <img src="/images/crbx_everywhere.png" alt="">
                        </div>
                        <div
                            class="w-28 h-28 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full overflow-hidden">
                            <img :src="userPic" :alt="'Profil picture of ' + username"
                                class="object-cover h-full w-full">
                        </div>
                    </div>
                </div>
                <button @click="signOut" class="mt-6">Log out</button>

                <h2 class="mt-12">Your NFT(s)</h2>
                <div
                    class="m-28 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-3/5 lg:w-full gap-x-7 gap-y-10 mx-auto">
                    <ItemCards v-for="                            nft                             in dataShow"
                        :key="nft.id_nft" :creator="nft.username" :title="nft.prompt" :Img="nft.img" :backImg="nft.draw"
                        :avatar="nft.userPic" :id="nft.id_nft" :audio="nft.url_son" class="mx-auto" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.colorReverse {
    filter: invert(100%);
}
</style>