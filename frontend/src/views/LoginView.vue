<script setup>
import FullBtn from '@/components/UI_Kit/Buttons/FullBtn.vue'
import { ref } from 'vue';
import { supabase } from '../supabase';
const newUser = ref(false)
const switchMod = () => {
    newUser.value = !newUser.value
}


let username = ref('')
let passwrd = ref('')
let mail = ref('')
let password2 = ref('')
const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({

        email: mail.value,

        password: passwrd.value,

    })
}
const signup = async () => {
    try {
        if (passwrd.value == password2.value) {
            const { data, error } = await supabase.auth.signUp({
                email: mail.value,
                password: passwrd.value
            })


            console.log(data.user);
            const { data1 } = await supabase
                .from('users')
                .insert({
                    id: data.user.id,
                    username: username.value
                })
            if (error) throw error
        }
    } catch (error) {
        console.log(error.error_description, error.message);
    }
}

</script>
<template>
    <div class="flex  min-h-screen h-fit overflow-hidden text-white bg-sombre">
        <div class="hidden lg:flex w-full min-h-min bg-red-400">
            <img src="/images/loginbg1.png" alt="" class="object-cover w-full h-full">
        </div>
        <div class=" w-full  min-h-min relative">
            <div class="absolute flex top-0 bottom-0 blur-sm backdrop-blur-md opacity-30 bg-orange-300">
                <img src="/images/loginbg.png" alt="" class="object-cover w-full h-full ">
            </div>
            <div class="w-full flex flex-col">
                <h1 class="text-center font-Sequel-45 text-3xl mt-7">{{ !newUser ? "Login" : "Register" }}</h1>
                <form class="w-2/3 mx-auto flex flex-col gap-14 mt-14">
                    <div class="flex flex-col" v-if="newUser">
                        <label class="font-startup-light text-lg">Username:</label>
                        <input type="text" placeholder="jeez davorta" class="bg-[#2C2B2B] h-16 rounded-3xl px-8 text-lg"
                            v-model="username">
                    </div>
                    <div class="flex flex-col">
                        <label class="font-startup-light text-lg">Email:</label>
                        <input type="email" placeholder="mail@exemple.com"
                            class="bg-[#2C2B2B] h-16 rounded-3xl px-8 text-lg" v-model="mail">
                    </div>
                    <div class="flex flex-col">
                        <label class="font-startup-light text-lg">Password:</label>
                        <input type="password" placeholder="min of 8 characters"
                            class="bg-[#2C2B2B] h-16 rounded-3xl px-8 text-lg" v-model="passwrd">
                    </div>
                    <div class="flex flex-col" v-if="newUser">
                        <label class="font-startup-light text-lg">Repete password:</label>
                        <input type="password" placeholder="min of 8 characters"
                            class="bg-[#2C2B2B] h-16 rounded-3xl px-8 text-lg" v-model="password2">
                    </div>
                    <div class="flex justify-end" v-if="!newUser">
                        <div>
                            forgot password ?
                        </div>
                    </div>
                    <div class="flex flex-col gap-1 pb-6">
                        <FullBtn v-if="!newUser" class="w-fit self-center px-20 py-5 rounded-full"
                            @click.prevent="login">Login</FullBtn>
                        <FullBtn v-else class="w-fit self-center px-20 py-5 rounded-full" @click.prevent="signup">Create
                            account</FullBtn>
                    </div>
                </form>
                <p v-if="!newUser" class="self-center">You don't have an accout ? <button class="font-startup-medium"
                        @click="switchMod">Sign up</button>
                </p>
                <p v-else class="self-center">You already have an accout ? <button class="font-startup-medium"
                        @click="switchMod">Login !</button>
                </p>
            </div>
        </div>
    </div>
</template>