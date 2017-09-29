import React, { Component } from 'react';
import * as THREE from 'three';

export default class Scene extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      15,
      10000
    )

    const renderer = new THREE.WebGLRenderer();

  	// the camera starts at 0,0,0 so pull it back
  	camera.position.z = 500;

  	// start the renderer - set the clear colour
  	// to a full black
    renderer.setClearColor('#FFFFFF')
    renderer.setSize(width, height)


    //This will add a starfield to the background of a scene
    var starsGeometry = new THREE.Geometry();

    for ( var i = 0; i < 420; i ++ ) {

    	var vertex = new THREE.Vector3();
      var vertex = new THREE.Vector3();
					vertex.x = 2000 * Math.random() - 1000;
					vertex.y = 2000 * Math.random() - 1000;
					vertex.z = 2000 * Math.random() - 1000;

    	starsGeometry.vertices.push( vertex );
    }

    var material = new THREE.PointsMaterial( { size: 3, sizeAttenuation: false, alphaTest: 0.5, transparent: true } );
		material.color.setHSL( 1.0, 0.3, 0.7 );
    var starsMaterial = new THREE.PointsMaterial( { color: 0x777777 } );

    var starField = new THREE.Points( starsGeometry, material );

    scene.add( starField );

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.starField = starField;
    this.material = starsMaterial

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  // animation loop
  animate() {

    // animate
    this.starField.rotation.y += 0.01;
    this.starField.rotation.x += 0.003;
    this.starField.rotation.z += 0.008;
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: 0,
          zIndex: 1
        }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
