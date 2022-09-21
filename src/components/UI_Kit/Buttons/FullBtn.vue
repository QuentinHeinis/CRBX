<template>
    <RouterLink to="/"
        class="flex w-40 h-11 justify-center items-center text-xl font-bold rounded-[20px] bg-gradient-to-l ">
        <slot></slot>
    </RouterLink>
</template>

<style scoped>
/* from-[#555CC5] via-[#676DCA] to-[#6C72CB] hover:from-[#3f46ac] hover:via-[#40479d] hover:to-[#4e5297] */
a {
    background: #676DCA;
    box-shadow: inset 10px 0px 15px 0px #555CC5,
        inset -10px 0px 15px 10px #6C72CB;
    transition: all .2s ease-in-out;
}

a:hover {
    background: #494fa2;
    box-shadow: inset 10px 0px 15px 0px #3f46ac,
        inset -10px 0px 15px 10px #4e5297;
}

a:active {
    background: #777dd7;
    box-shadow: inset 10px 0px 15px 0px #656dd7,
        inset -10px 0px 15px 10px #797fd8;
}
</style>