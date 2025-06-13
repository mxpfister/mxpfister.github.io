import * as THREE from 'three';

import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

class SpinningText {
    constructor(container, text, options = {}) {
        this.container = container;
        this.text = text;
        this.options = {
            background: options.background || 0x242526,
            color: options.color || 0xffffff,
            size: options.size || 10,
            depth: options.depth || 2,
            curveSegments: options.curveSegments || 12,
            bevelEnabled: options.bevelEnabled || true,
            bevelThickness: options.bevelThickness || 1,
            bevelSize: options.bevelSize || 0.5,
            bevelSegments: options.bevelSegments || 5,
            rotationSpeed: options.rotationSpeed || 0.01,
        };

        this.containerHeight = this.container.parentElement.offsetHeight;

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.textMesh = null;
        this.userInteracting = false;
        this.lastPointerX = null;
        this.rotationVelocity = 0;

        this.init();
        this.addInteractionListeners();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color().setHex(this.options.background);

        this.camera = new THREE.PerspectiveCamera(
            50,
            this.container.offsetWidth / this.containerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 100;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.container.offsetWidth, this.containerHeight);
        this.container.appendChild(this.renderer.domElement);

        const fontLoader = new FontLoader();
        fontLoader.load(
            'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
            (font) => {
                const innerTextGeometry = new TextGeometry(this.text, {
                    font: font,
                    size: this.options.size,
                    depth: this.options.depth,
                    curveSegments: this.options.curveSegments,
                    bevelEnabled: false
                });
                innerTextGeometry.center()

                const outerTextGeometry = new TextGeometry(this.text, {
                    font: font,
                    size: this.options.size,
                    depth: this.options.depth,
                    curveSegments: this.options.curveSegments,
                    bevelEnabled: this.options.bevelEnabled,
                    bevelThickness: this.options.bevelThickness,
                    bevelSize: 1,
                    bevelOffset: 0,
                    bevelSegments: this.options.bevelSegments,
                });
                outerTextGeometry.center()

                const text = new THREE.Mesh(
                    innerTextGeometry,
                    new THREE.MeshPhysicalMaterial({ color: 0xffffff })
                )

                const borderText = new THREE.Mesh(
                    outerTextGeometry,
                    new THREE.MeshPhysicalMaterial({ color: 0xd16464 })
                );
                borderText.position.z = 0.5;

                this.textMesh = text.add(borderText);

                this.scene.add(text);

                const light = new THREE.DirectionalLight(0xffffff, 1.5);
                light.position.set(1, 1, 1);
                this.scene.add(light);
                const pointLight = new THREE.PointLight(0xffffff, 1);
                pointLight.position.set(50, 50, 50);
                this.scene.add(pointLight);

                this.animate();
            }
        );


        window.addEventListener('resize', () => this.onWindowResize());
    }

    onWindowResize() {
        this.camera.aspect = this.container.offsetWidth / this.containerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.offsetWidth, this.containerHeight);
    }

    addInteractionListeners() {
        const handleMove = (event) => {
            this.userInteracting = true;

            let clientX;
            if (event.touches) {
                clientX = event.touches[0].clientX;
            } else {
                clientX = event.clientX;
            }

            if (this.lastPointerX !== null) {
                const deltaX = clientX - this.lastPointerX;
                this.rotationVelocity = deltaX * 0.01;
            }

            this.lastPointerX = clientX;
        };

        const handleEnd = () => {
            this.lastPointerX = null;
        };

        this.container.addEventListener('mousemove', handleMove);
        this.container.addEventListener('touchmove', handleMove);
        this.container.addEventListener('mouseup', handleEnd);
        this.container.addEventListener('touchend', handleEnd);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.textMesh) {
            if (this.userInteracting) {
                this.textMesh.rotation.y += this.rotationVelocity;
                this.rotationVelocity *= 0.95;
            } else {
                this.textMesh.rotation.y += this.options.rotationSpeed;
            }
        }

        this.renderer.render(this.scene, this.camera);
    }
}
export { SpinningText };