'use client'

import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'

const Text = dynamic(() => import('@/components/canvas/3DText').then((mod) => mod.Text), { ssr: false })

export default function Page() {
  return (

    <div className='mx-auto flex w-screen h-screen'>
      <Canvas
      camera={ {
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 0, 0, 8 ]
      } }
      >
        <Text/>
      </Canvas>
    </div>
      
  )
}
