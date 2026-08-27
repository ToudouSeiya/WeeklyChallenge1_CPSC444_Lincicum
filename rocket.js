//Name:Morgan Lincicum
//CPSC444
//Weekly Challenge #1

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000022);
document.body.appendChild(renderer.domElement);

// Rocket Body

const bodyGeometry = new THREE.CylinderGeometry(0.5, 0.6, 5, 16);
const bodyMaterial = new THREE.MeshBasicMaterial({
    color: "rgb(181, 200, 226)"
});
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
body.position.z=0.05;
scene.add(body);


// Nose Cone

const noseGeometry = new THREE.ConeGeometry(0.6, 0.75, 8);
const noseMaterial = new THREE.MeshBasicMaterial({
    color: "rgb(133, 140, 149)"
});
const nose = new THREE.Mesh(noseGeometry, noseMaterial);
nose.position.y=2.9;
scene.add(nose);

// Flame

const flameGeometry = new THREE.ConeGeometry(0.3, 2, 8);
const flameMaterial = new THREE.MeshBasicMaterial({
    color: "rgb(244, 97, 24)"
});
const flame = new THREE.Mesh(flameGeometry, flameMaterial);
flame.position.y=-2.9;
scene.add(flame);

const flame2Geometry = new THREE.ConeGeometry(0.6, 3, 8);
const flame2Material = new THREE.MeshBasicMaterial({
    color: "rgb(230, 0, 0)"
});
const flame2 = new THREE.Mesh(flame2Geometry, flame2Material);
flame2.position.y=-2.9;
flame2.position.z=-1;
scene.add(flame2);

const flame3Geometry = new THREE.ConeGeometry(0.1, 3, 8);
const flame3Material = new THREE.MeshBasicMaterial({
    color: "rgb(243, 244, 178)"
});
const flame3 = new THREE.Mesh(flame3Geometry, flame3Material);
flame3.position.y=-2.9;
flame3.position.z=0.2;
scene.add(flame3);


// Window (Bonus)

const windowGeometry = new THREE.CircleGeometry(0.3, 32);
const windowMaterial = new THREE.MeshBasicMaterial({
    color: "rgb(102, 110, 116)"
});

const rocketWindow = new THREE.Mesh(
    windowGeometry,
    windowMaterial
);

rocketWindow.position.set(0, 1.5, 0.6);
scene.add(rocketWindow);

const frameGeometry = new THREE.RingGeometry(0.3, 0.35, 32);
const frameMaterial = new THREE.MeshBasicMaterial({
    color: "rgb(66, 62, 62)"
});

const rocketWindowFrame = new THREE.Mesh(
    frameGeometry,
    frameMaterial
);

rocketWindowFrame.position.set(0, 1.5, 0.6);
scene.add(rocketWindowFrame);




// Left Fin (Bonus)



// Right Fin (Bonus)


// Stars (Bonus)


// Camera Position
camera.position.z = 5;

// Single Render (No Animation)
renderer.render(scene, camera);

// Resize Support
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.render(scene, camera);
});