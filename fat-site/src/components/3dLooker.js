import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const ROTATION_OFFSET = {
  x: 4.5,
  y: 0,
  z: 0
}
const ROTATION_SENSITIVITY = 0.01

function Model({ mouse }) {
  const mtl = useLoader(MTLLoader, '/owl.obj.mtl')
  const obj = useLoader(OBJLoader, '/owl.obj')
  const mesh = useRef()
  
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    if (mouse.isOver) {
      const mouseX = (mouse.x - mouse.elementWidth/2)
      const mouseY = (mouse.y - mouse.elementHeight/2)

      const lookX = Math.sign(mouseX) / (-1 - ROTATION_SENSITIVITY * Math.abs(mouseX)) + Math.sign(mouseX)
      const lookY = Math.sign(mouseY) / (-1 - ROTATION_SENSITIVITY * Math.abs(mouseY)) + Math.sign(mouseY)

      mesh.current.rotation.z = ROTATION_OFFSET.z + lookX
      mesh.current.rotation.y = ROTATION_OFFSET.y
      mesh.current.rotation.x = ROTATION_OFFSET.x + lookY 
    }
  })
  
  const texture = useLoader(TextureLoader, '/owl-texture.png')
  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  return (
    <mesh
      position={[0, 0, 0]}
      materials={mtl.materials}
      ref={mesh}
      onClick={(event) => setActive(!active)}
      geometry={geometry}
      scale={3}
    >
      <meshStandardMaterial
        map={texture}
        flatShading
      />
    </mesh>
  )
}

export default function Looker({ mouse, ...canvasProps }) {
  return (
    <Canvas
    {...canvasProps}
    >
      <ambientLight
        intensity={0.35}
      />
      <pointLight
        position={[0, 0, 3]}
        intensity={0.5}
      />
      <Model
        mouse={mouse}
      />
    </Canvas>
    )
  }