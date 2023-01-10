<script setup>
import { ref } from 'vue'
import CircleText from '../components/UI_Kit/deco/CircleText.vue';
import FullBtn from '../components/UI_Kit/Buttons/FullBtn.vue';
import BorderBtn from '../components/UI_Kit/Buttons/BorderBtn.vue';
import ItemCards from '../components/UI_Kit/Cards/ItemCards.vue';
import { user } from '@/supabase'
const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
let description = ref('')
let image = ref()
const generate = async () => {
    const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'image/base64'
        },
        body: JSON.stringify({
            prompt: description.value,
            image: image.value
        })
    })
    if (response.ok) {
        console.log(response.json());
    } else {
        const error = await response.text()
        alert(error)
    }
}

</script>
<script>
import VueDrawingCanvas from "vue-drawing-canvas";

export default {
    name: "ServeDev",
    components: {
        VueDrawingCanvas,
    },
    data() {
        return {
            initialImage: [
                {
                    type: "dash",
                    from: {
                        x: 262,
                        y: 154,
                    },
                    coordinates: [],
                    color: "#000000",
                    width: 5,
                    fill: false,
                },
            ],
            x: 0,
            y: 0,
            image: "",
            eraser: false,
            disabled: false,
            fillShape: false,
            line: 5,
            color: "#000000",
            strokeType: "dash",
            lineCap: "square",
            lineJoin: "miter",
            backgroundColor: "#FFFFFF00",
            backgroundImage: null,
            watermark: null,
            additionalImages: [],
        };
    },
    mounted() {
        if ("vue-drawing-canvas" in window.localStorage) {
            this.initialImage = JSON.parse(
                window.localStorage.getItem("vue-drawing-canvas")
            );
        }
    },
    methods: {

        async setImage(event) {
            let URL = window.URL;
            this.backgroundImage = URL.createObjectURL(event.target.files[0]);
            await this.$refs.VueCanvasDrawing.redraw();
        },
        async setWatermarkImage(event) {
            let URL = window.URL;
            this.watermark = {
                type: "Image",
                source: URL.createObjectURL(event.target.files[0]),
                x: 0,
                y: 0,
                imageStyle: {
                    width: 600,
                    height: 400,
                },
            };
            await this.$refs.VueCanvasDrawing.redraw();
        },
        getCoordinate(event) {
            let coordinates = this.$refs.VueCanvasDrawing.getCoordinates(event);
            this.x = coordinates.x;
            this.y = coordinates.y;
        },
        getStrokes() {
            window.localStorage.setItem(
                "vue-drawing-canvas",
                JSON.stringify(this.$refs.VueCanvasDrawing.getAllStrokes())
            );
            alert(
                "Strokes saved, reload your browser to see the canvas with previously saved image"
            );
        },
    },
};
</script>

<template>
    <div class="lg:px-40 lg:pt-32 overflow-x-hidden text-white">
        <section class="flex flex-col items-center gap-4 relative">
            <h1 class="font-startup-light text-4xl bg-[#676DCA] w-fit py-5 px-10">Create your <span
                    class="font-Sequel-45">NFT</span>
            </h1>
            <form class="flex flex-col w-2/3" v-if="user">
                <span class="self-end font-startup-light text-xl">CRBX&copy;</span>
                <div class="flex justify-center">
                    <div>
                        <vue-drawing-canvas ref="VueCanvasDrawing" v-model:image="image" :width="600" :height="400"
                            :stroke-type="strokeType" :line-cap="lineCap" :line-join="lineJoin" :fill-shape="fillShape"
                            :eraser="eraser" :lineWidth="line" :color="color" :background-color="backgroundColor"
                            :background-image="backgroundImage" :watermark="watermark" :initial-image="initialImage"
                            saveAs="png" :styles="{
                                border: 'solid 1px #000',
                            }" :lock="disabled" @mousemove="getCoordinate($event)"
                            :additional-images="additionalImages" class="bg-white" />
                        <div class="flex gap-3 m-4">
                            <button type="button" class="flex flex-col justify-center items-center"
                                @click.prevent="$refs.VueCanvasDrawing.undo()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                    <path
                                        d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                                </svg>
                                Undo
                            </button>
                            <button type="button" class="flex flex-col justify-center items-center"
                                @click.prevent="$refs.VueCanvasDrawing.redo()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                    <path
                                        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                </svg>
                                Redo
                            </button>
                            <button type="button" class="flex flex-col justify-center items-center"
                                @click.prevent="$refs.VueCanvasDrawing.reset()">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-file-earmark" viewBox="0 0 16 16">
                                    <path
                                        d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                </svg>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-between mt-3 items-center">
                    <input type="text" v-model="description" required
                        class="w-1/3 bg-[#24242462] text-xs px-4 py-2 border" placeholder="enter a word...">
                    <button
                        class="flex px-11 py-2 min-h-[2rem] justify-center items-center text-xl font-bold rounded-[20px] bg-[#676DCA] "
                        @click.prevent="generate">finish</button>
                </div>
            </form>
            <div v-else class="">
                <h3 class="font-sequel-45 text-2xl uppercase">you must be logged in to create</h3>
            </div>
            <CircleText class="absolute -top-10 -left-10 -z-10" />

        </section>
        <section class="mt-10">
            <h2 class="font-Sequel-45 text-3xl bg-[#676DCA] w-fit py-2 px-4">
                How does it works?
            </h2>
            <p class="font-startup-light text-2xl">
                CRBX use a program that we develop, using the line that you draw it will automatically make a 3D
                generated model of it, and then, the word your gonna associate with your drawing will influence the
                generating of the image in a certain way wich will make your NFT unique
            </p>
            <div class="flex gap-8 z-10 flex-wrap">
                <FullBtn class="text-xs md:text-2xl font-Sequel-45">create</FullBtn>
                <BorderBtn class="text-xs md:text-2xl font-startup-light">collections</BorderBtn>
            </div>
        </section>
        <section class="px-3 md:px-10">
            <div class="text-white my-28 relative flex w-full md:justify-center">
                <h2 class="flex justify-center text-xl md:text-4xl font-light gap-2 py-2 px-1 font-startup-light">
                    Latest NFT
                    <span class="font-bold flex gap-1 font-Sequel-45">
                        generated
                    </span>
                    <span aria-hidden class="w-2/5 h-[2px] bg-white absolute left-0 bottom-0"></span>
                </h2>
            </div>
            <div
                class="mt-28 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-4/5 lg:w-full gap-x-7 gap-y-10 mx-auto">
                <ItemCards :FromCollection="false" :Collection="'machin'" class="mx-auto" />
                <ItemCards :Img="'/images/temporary/Image-1.png'" class="mx-auto" />
                <ItemCards :Img="'/images/temporary/Image-2.png'" class="mx-auto" />
            </div>
        </section>
        <div class="w-full flex justify-center mt-48 mb-28">
            <button class="font-startup-light text-xl text-white" @click="goTop">Back to top</button>
        </div>
    </div>
</template>