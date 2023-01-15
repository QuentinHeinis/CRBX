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

const file = ref()
const newImage = ref()
let previewI = ref()
const preview = () => {
    newImage.value = file.value.files[0]
    var reader = new FileReader();
    reader.onloadend = function () {
        previewI.value = reader.result;
    }
    if (newImage) {
        reader.readAsDataURL(newImage.value);
    }
}
const save = async () => {

    if (userPic) {
    }
    const { error } = await supabase
        .from('users')
        .update({ username: username.value, img: previewI.value })
        .eq('id', user.value.id)
    router.push('/Profil')
    setTimeout(() => {
        location.reload()
    }, 1000);
}
</script>
<template>
    <div class="lg:px-40 lg:pt-32 overflow-x-hidden text-white min-h-screen">
        <section class="flex flex-col pl-4 gap-4 relative">
            <div class="font-startup-light">
                <div class="relative w-1/2">
                    <h1 class="font-Sequel-45 text-3xl w-fit py-2 px-4">
                        Edit Your Profil
                    </h1>
                    <button @click="save" class="absolute right-0 top-5">Save</button>
                </div>
                <p>nickname : <input class="font-Sequel-45 text-black " v-model="username"></p>
                <p>image :</p>
                <input type="file" accept="image/png, image.jpg" ref="file" @change="preview">

                <div class="w-28 h-28 rounded-full overflow-hidden" v-if="!previewI">
                    <img :src="userPic" :alt="'Profil picture of ' + username" class="object-cover h-full w-full">
                </div>
                <div class="w-28 h-28 rounded-full overflow-hidden" v-else>
                    <img :src="previewI" :alt="'Profil picture of ' + username" class="object-cover h-full w-full">
                </div>

            </div>
        </section>
    </div>
</template>