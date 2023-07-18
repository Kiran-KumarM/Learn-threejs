import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
const firstmodel = document.getElementById('3dmodel')

firstmodel.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 2 ); //(width,height,depth)
const material = new THREE.MeshBasicMaterial( { color: 0xF39C12 , } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 3;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.04;
    cube.rotation.z += 0.04;
	renderer.render( scene, camera );
}
animate();


// Line Model 
const rendererLine = new THREE.WebGLRenderer();
rendererLine.setSize( window.innerWidth/2, window.innerHeight/2 );
const lineDoc = document.getElementById('lineModel')
lineDoc.appendChild( rendererLine.domElement );

const cameraLine = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
cameraLine.position.set( 0, 0, 100 );
cameraLine.lookAt( 0, 0, 0 );

const sceneLine = new THREE.Scene();

//create a blue LineBasicMaterial
const Linematerial = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const Linegeometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( Linegeometry, Linematerial );

sceneLine.add( line );
rendererLine.render( sceneLine, cameraLine );