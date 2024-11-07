import { useMatcapTexture, Center, Text3D, OrbitControls, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const material1 = new THREE.MeshMatcapMaterial()
const material2 = new THREE.MeshBasicMaterial()


export function Text()
{
    const envMap = useRef();

    const [ matcapTexture ] = useMatcapTexture('637598_B7C4D3_22293A_9BACBF', 256)

    useEffect(() => {
        // MATERIAL 1
        matcapTexture.colorSpace = THREE.SRGBColorSpace
        matcapTexture.needsUpdate = true

        material1.matcap = matcapTexture
        material1.needsUpdate = true

        // MATERIAL 2
        material2.roughness = 0.1
        material2.color = new THREE.Color(0x7994b0)
        material2.needsUpdate = true
    }, [])

    return <>

        {/* <Perf position="top-left" /> */}

        <OrbitControls makeDefault />
        <Environment intensity={1} preset='night' ref={envMap} />

        {/* <ambientLight/> */}

            <Center top center>
                <Text3D
                    material={ material1 }
                    font="./fonts/helvetiker_regular.typeface.json"
                    size={ 0.75 }
                    height={ 0.2 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.02 }
                    bevelSize={ 0.02 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }
                    metalness={1}
                    transmission={0.6}
                    thickness={1}  
                >
                    Apres la pluie 1
                </Text3D>

                
            </Center>

            <Center bottom center>
                <Text3D
                    material={ material2 }
                    font="./fonts/helvetiker_regular.typeface.json"
                    size={ 0.75 }
                    height={ 0.2 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.02 }
                    bevelSize={ 0.02 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }
                    metalness={1}
                    transmission={0.6}
                    thickness={1}
                >
                    Apres la pluie 2
                </Text3D>

                
            </Center>

    </>
}