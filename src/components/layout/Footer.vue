<template>
    <footer class="w-full border-t flex justify-between px-10 py-10">
        <div class="w-1/3 flex">
            <div class="h-16">
                <img src="/images/logos/CRBX_Logo.png" alt="" class="h-16">
            </div>
        </div>
        <div class="flex items-center justify-center gap-2 w-1/3">
            <div class="h-16">
                <img src="/images/logos/logoMMI.png" alt="">
            </div>
            <div class="h-16">
                <img src="/images/logos/logoIut.png" alt="">
            </div>
            <div class="h-16 flex items-center">
                <img src="/images/logos/logoOfff.png" alt="">
            </div>
        </div>
        <div class="w-1/3 flex flex-col items-end text-white font-startup-light text-base">
            <p class="relative w-fit flex">MMI Montbéliard
                <span aria-hidden class="w-3/5 h-[2px] bg-white bottom-0 right-0 absolute"></span>
            </p>
            <p class="relative w-fit flex">4 place Tharradin, 25200
                <span aria-hidden class="w-3/5 h-[2px] bg-white bottom-0 right-0 absolute"></span>
            </p>
            <RouterLink to="/" class="underline">Privacy & Terms</RouterLink>
        </div>
    </footer>
</template>