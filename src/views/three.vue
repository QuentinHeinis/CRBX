<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    
    // import threeJs
    import * as THREE from 'three';
    import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'three.meshline';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    
    //import gui
    
    import * as dat from 'dat.gui';
    
    //import gsap
    import gsap from 'gsap'
    
    const gui = new dat.GUI();
    
    const world = {
        color: {
            r: 1,
            g: 1,
            b: 1
        }
    }
    gui.add(world.color, 'r', 0, 1)
    gui.add(world.color, 'g', 0, 1)
    gui.add(world.color, 'b', 0, 1)
    
    
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    
    renderer.setSize(innerWidth, innerHeight)
    renderer.setPixelRatio(devicePixelRatio)
    document.body.appendChild(renderer.domElement)
    
    camera.position.z = 5;
    
    let controls = new OrbitControls(camera, renderer.domElement)
    
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    
    
    }
    animate();
    
    let points = []
    
    for (let i = -10; i < 10.1; i += 0.1) {
        points.push([i, Math.sin(i), Math.cos(i)])
    }
    let line = new MeshLine()
    line.setPoints(points.flat())
    
    let material = new MeshLineMaterial({ color: new THREE.Color(world.color.r, world.color.g, world.color.b), lineWidth: 0.1 })
    let mesh = new THREE.Mesh(line, material)
    scene.add(mesh)
    
    
    
    </script>
    <style>
    .dg.ac {
        z-index: 5;
    }
    
    canvas {
        z-index: 0;
    }
    </style>
    <template>
    
    </template>