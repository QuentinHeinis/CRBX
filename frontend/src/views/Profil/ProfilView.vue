<script setup>
import { user } from '@/supabase'
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import router from '../../router';
const route = useRoute()
console.log('route : ', route.params.id);
let username = ref()
let creationDate = ref()
let profilPicture = ref()
const getData = () => {
    username.value = user.value.user_metadata.username
    creationDate.value = user.value.created_at.split("T")
    profilPicture.value = user.value.user_metadata?.picture
}
watch(() => {
    user.value.id == !route.params.id ? router.push("/") : getData()

})
onMounted(() => {
})
</script>
<template>
    <div class="">
        <h1>Your profile</h1>
        <p>nickname : <span>{{ username }}</span></p>
        <p>creation date : <span>{{ creationDate[ 0 ].split('-').reverse().join('/') }}</span></p>
        <div>
            <img :src="profilPicture" :alt="'Profil picture of ' + username">
        </div>
        <h2>Your NFT(s)</h2>
    </div>
</template>