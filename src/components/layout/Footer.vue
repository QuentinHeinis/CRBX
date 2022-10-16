<template>
    <footer class="w-full md:border-t flex flex-col md:flex-row items-center justify-between px-10 py-10 gap-2">
        <div class="md:w-1/3 flex">
            <div class="h-16">
                <img src="/images/logos/CRBX_Logo.png" alt="" class="h-16">
            </div>
        </div>
        <div class="flex items-center justify-center gap-2 md:w-1/3 order-3 md:order-2">
            <div>
                <img src="/images/logos/logoMMI.png" alt="" class="h-4 md:h-16">
            </div>
            <div>
                <img src="/images/logos/logoIut.png" alt="" class="h-4 md:h-16">
            </div>
            <div class="flex items-center md:h-16">
                <img src="/images/logos/logoOfff.png" alt="" class="h-4 ">
            </div>
        </div>
        <div
            class="md:w-1/3 flex  md:flex-col md:items-end text-white font-startup-light text-xs md:text-base gap-1 order-2 md:order-3">
            <p class="relative w-fit flex">MMI Montbéliard
                <span aria-hidden class="w-3/5 h-[2px] hidden md:block bg-white bottom-0 right-0 absolute"></span>
            </p>
            <p class="relative w-fit flex">4 place Tharradin, 25200
                <span aria-hidden class="w-3/5 h-[2px] hidden md:block bg-white bottom-0 right-0 absolute"></span>
            </p>
            <RouterLink to="/" class="underline hidden md:flex">Privacy & Terms</RouterLink>
        </div>
    </footer>
</template>