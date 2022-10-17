<script setup>
import FullBtn from '@/components/UI_Kit/Buttons/FullBtn.vue'
</script>
<template>
    <div class="flex  h-screen overflow-hidden text-white">
        <div class="hidden lg:flex w-full h-full">
            <img src="/images/loginbg1.png" alt="" class="object-cover w-full h-full">
        </div>
        <div class="w-full h-full relative">
            <div class="flex h-full">
                <img src="/images/loginbg.png" alt=""
                    class="object-cover w-full h-full blur-sm backdrop-blur-md opacity-30">
            </div>
            <div class="absolute top-0 w-full flex flex-col z-30">
                <h1 class="text-center font-Sequel-45 text-3xl mt-7">Login</h1>
                <form class="w-2/3 mx-auto flex flex-col gap-14 mt-14">
                    <div class="flex flex-col">
                        <label class="font-startup-light text-lg">Email:</label>
                        <input type="email" placeholder="mail@exemple.com"
                            class="bg-[#2C2B2B] h-16 rounded-3xl px-8 text-lg">
                    </div>
                    <div class="flex flex-col">
                        <label class="font-startup-light text-lg">Password:</label>
                        <input type="password" placeholder="min of 8 characters"
                            class="bg-[#2C2B2B] h-16 rounded-3xl px-8 text-lg">
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-center gap-1">
                            <input type="checkbox" class="h-7 w-7 appearance-none border rounded-md">
                            <label class="font-startup-light text-lg">Remember me</label>
                        </div>
                        <div>
                            forgot password ?
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <FullBtn class="w-fit self-center px-20 py-5 rounded-full">Login</FullBtn>
                        <p class="self-center">Don't you have an accout ? <span class="font-startup-medium">Sign
                                up</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>