import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';

class Stars {
    constructor(container) {
        this.container = container
        this.height = 300

        this.mouseX = 0;
        this.mouseY = 0;

        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = this.height / 2;

        this.camera = null;
        this.scene = null;
        this.renderer = null;

        this.init();
    }

    init() {
        this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.outerHeight, 2, 2000);
        this.camera.position.z = 1000;

        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.001);
        this.scene.background = new THREE.Color().setHex(0x242526)

        const sphereGeometry = new THREE.SphereGeometry(5, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

        for (let i = 0; i < 8000; i++) {
            const x = 2000 * Math.random() - 1000;
            const y = 2000 * Math.random() - 1000;
            const z = 2000 * Math.random() - 1000;

            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.set(x, y, z);

            this.scene.add(sphere);
        }

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, this.height);

        this.camera.aspect = window.innerWidth / this.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setAnimationLoop(() => {
            this.animate();
        });
        this.container.appendChild(this.renderer.domElement);

        this.stats = new Stats();
        document.body.appendChild(this.stats.dom);

        this.container.style.touchAction = 'none';
        this.container.addEventListener('pointermove', (e) => this.onPointerMove(e));

        window.addEventListener('resize', () => this.onWindowResize());
    }

    onWindowResize() {
        this.windowHalfX = window.innerWidth / 2;

        this.camera.aspect = window.innerWidth / this.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, this.height);
    }

    onPointerMove(event) {
        if (event.isPrimary === false) return;

        this.mouseX = event.clientX - this.windowHalfX;
        this.mouseY = event.clientY - this.windowHalfY;
    }

    animate() {
        this.render();
        this.stats.update();
    }

    render() {
        this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
        this.camera.position.y += (- this.mouseY - this.camera.position.y) * 0.05;

        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }
}
export { Stars };
