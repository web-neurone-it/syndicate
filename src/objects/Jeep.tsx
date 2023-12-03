import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useWindowDimensions from "../hooks/useWindowDimensions";
import {selectPart} from "../store/reducers/ActionCreators";

type GLTFResult = GLTF & {
    nodes: {
        Car_Body: THREE.Mesh
        Car_Front_Emblem_1: THREE.Mesh
        Car_Front_Emblem_2: THREE.Mesh
        Car_Number_Front: THREE.Mesh
        Car_Number_Rear: THREE.Mesh
        Car_Wiper_01: THREE.Mesh
        Car_Wiper_02: THREE.Mesh
        Car_Front_Aluminum: THREE.Mesh
        Car_Bottom: THREE.Mesh
        Car_Headlight_Glass: THREE.Mesh
        Car_Headlight_Chrome: THREE.Mesh
        Car_Headlight_bmwlaser_Left: THREE.Mesh
        Car_Headlight_bmwlaser_Right: THREE.Mesh
        Car_Headlights: THREE.Mesh
        Car_Headlight_Blue: THREE.Mesh
        Car_Headlight_Fog: THREE.Mesh
        Car_Headlight_Plastic: THREE.Mesh
        Car_Tail_Light_Plastic: THREE.Mesh
        Car_Tail_Light_Glass: THREE.Mesh
        Car_Tail_Light_Chrome: THREE.Mesh
        Car_Tail_Lights: THREE.Mesh
        Car_Tail_light_bmw_Left: THREE.Mesh
        Car_Tail_light_bmw_Right: THREE.Mesh
        Car_Black_1: THREE.Mesh
        Car_Black_2: THREE.Mesh
        Car_Rubbers: THREE.Mesh
        Car_Door_Lock_Metal: THREE.Mesh
        Car_Interior_Base: THREE.Mesh
        Car_Seats_Belt_Fabric: THREE.Mesh
        Car_Interior_Mirror: THREE.Mesh
        Car_Seats_Belt_Red: THREE.Mesh
        Car_Seats_Belt_Metal: THREE.Mesh
        Car_Seats_Belt_Plastic: THREE.Mesh
        Car_Pedals_Plastic: THREE.Mesh
        Car_Interior_Fabric: THREE.Mesh
        Car_Pedals_Metal: THREE.Mesh
        Car_Interior_Leather_Orange: THREE.Mesh
        Car_Interior_Wood: THREE.Mesh
        Car_Interior_Light_Glass: THREE.Mesh
        Car_Interior_Light_Chrome: THREE.Mesh
        Car_Interior_Black: THREE.Mesh
        Car_Interior_Plastic: THREE.Mesh
        Car_Interior_Aluminum: THREE.Mesh
        Car_Wiper_Rear: THREE.Mesh
        Car_Textures: THREE.Mesh
        Car_Alu_textures: THREE.Mesh
        Car_xDrive_Emblem_Black: THREE.Mesh
        Car_Wheel_FL_Metal: THREE.Mesh
        Car_Wheel_FL_Caliper: THREE.Mesh
        Car_Wheel_FL_Brake_Disk: THREE.Mesh
        Car_Wheel_FL_Tire: THREE.Mesh
        Car_Wheel_FL_M: THREE.Mesh
        Car_Door_FL_Rubber: THREE.Mesh
        Car_Door_FL_Plastic: THREE.Mesh
        Car_Door_FL_Interior_Base: THREE.Mesh
        Car_Door_FL_Aluminum: THREE.Mesh
        Car_Door_FL_Wood: THREE.Mesh
        Car_Door_FL_Light_Glass: THREE.Mesh
        Car_Door_FL_Light_Chrome: THREE.Mesh
        Car_Door_FL_Mirror: THREE.Mesh
        Car_Door_FL_Interior_Orange: THREE.Mesh
        Car_Door_FL_Leather: THREE.Mesh
        Car_Door_FL_buttons: THREE.Mesh
        Car_Door_FL_Alu_textures: THREE.Mesh
        Car_Door_RL_Body: THREE.Mesh
        Car_Door_RL_Window: THREE.Mesh
        Car_Door_RL_Rubber: THREE.Mesh
        Car_Door_RL_Interior_Base: THREE.Mesh
        Car_Door_RL_Plastic: THREE.Mesh
        Car_Door_RL_Aluminum: THREE.Mesh
        Car_Door_RL_Wood: THREE.Mesh
        Car_Door_RL_Interior_Orange: THREE.Mesh
        Car_Door_RL_Leather: THREE.Mesh
        Car_Door_RL_Alu_textures: THREE.Mesh
        Car_SW_Leather: THREE.Mesh
        Car_SW_Logo: THREE.Mesh
        Car_SW_Aluminum: THREE.Mesh
        Car_SW_Textures: THREE.Mesh
        Car_SW_Alu_textures: THREE.Mesh
        Car_Seat_FL_Leather: THREE.Mesh
        Car_Seat_FL_Metal: THREE.Mesh
        Car_Seat_FL_Plastic: THREE.Mesh
        Car_Seat_FL_Textures: THREE.Mesh
        Car_Seat_FL_Alu_Texture: THREE.Mesh
        Car_Seats_Mid_Leather: THREE.Mesh
        Car_Seats_Mid_Metal: THREE.Mesh
        Car_Seats_Mid_Plastic: THREE.Mesh
        Car_Seats_Mid_Fabric: THREE.Mesh
        Car_Seats_Mid_Textures: THREE.Mesh
        Car_Seats_Mid_Alu_texture: THREE.Mesh
        Car_Seats_Rear_Leather: THREE.Mesh
        Car_Seats_Rear_Metal: THREE.Mesh
        Car_Seats_Rear_Plastic: THREE.Mesh
        Car_Seats_Rear_Fabric: THREE.Mesh
        Car_Wheel_FR_Metal: THREE.Mesh
        Car_Wheel_FR_Caliper: THREE.Mesh
        Car_Wheel_FR_Brake_Disk: THREE.Mesh
        Car_Wheel_FR_M: THREE.Mesh
        Car_Wheel_RL_Metal: THREE.Mesh
        Car_Wheel_RL_Brake_Disk: THREE.Mesh
        Car_Wheel_RL_M: THREE.Mesh
        Car_Wheel_RL_Caliper: THREE.Mesh
        Car_Wheel_RR_Caliper: THREE.Mesh
        Car_Wheel_RR_Metal: THREE.Mesh
        Car_Wheel_RR_Bolts: THREE.Mesh
        Car_Wheel_RR_Brake_Disk: THREE.Mesh
        Car_Wheel_RR_M: THREE.Mesh
        Car_Door_FR_Body: THREE.Mesh
        Car_Door_FR_Rubber: THREE.Mesh
        Car_Door_FR_Plastic: THREE.Mesh
        Car_Door_FR_Interior_Base: THREE.Mesh
        Car_Door_FR_Window: THREE.Mesh
        Car_Door_FR_Aluminum: THREE.Mesh
        Car_Door_FR_Wood: THREE.Mesh
        Car_Door_FR_Light_Glass: THREE.Mesh
        Car_Door_FR_Light_Chrome: THREE.Mesh
        Car_Door_FR_Mirror: THREE.Mesh
        Car_Door_FR_Interior_Orange: THREE.Mesh
        Car_Door_FR_Leather: THREE.Mesh
        Car_Door_FR_Alu_textures: THREE.Mesh
        Car_Door_RR_Rubber: THREE.Mesh
        Car_Door_RR_Interior_Base: THREE.Mesh
        Car_Door_RR_Plastic: THREE.Mesh
        Car_Door_RR_Aluminum: THREE.Mesh
        Car_Door_RR_Wood: THREE.Mesh
        Car_Door_RR_Interior_Orange: THREE.Mesh
        Car_Door_RR_Leather: THREE.Mesh
        Car_Door_RR_Alu_textures: THREE.Mesh
        Car_Seat_FR_Leather: THREE.Mesh
        Car_Seat_FR_Metal: THREE.Mesh
        Car_Seat_FR_Plastic: THREE.Mesh
        Car_Seat_FR_Textures: THREE.Mesh
        Car_Seat_FR_Alu_Texture: THREE.Mesh
        Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_: THREE.Mesh
        Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_: THREE.Mesh
        Mesh954_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh1078_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh769_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
        Mesh404_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
        Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh759_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh716_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh745_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh1306_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
        Mesh131_door_rr1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
        Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
        Mesh383_G_44_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh10_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570: THREE.Mesh
        Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
        Mesh491_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh1136_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh750_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh1119_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_: THREE.Mesh
        Mesh740_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh299_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
        Mesh1058_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh61_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh755_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh403_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
        Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
        Mesh1055_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh337_Component_1_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lex: THREE.Mesh
        Mesh1050_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh723_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh956_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh678_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh735_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh485_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh45_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
        Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
        Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
        Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
        Mesh497_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh760_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh483_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh764_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh1115_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh739_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh1433_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
        Mesh260_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
        Mesh1056_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
        Mesh732_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh43_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh738_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570: THREE.Mesh
        Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
        LKSS_SIZE_16001_Mesh_2009: THREE.Mesh
        LKSS_SIZE_028_Mesh_2010: THREE.Mesh
        Car_Window001: THREE.Mesh
        Car_Window002: THREE.Mesh
        Car_Body001: THREE.Mesh
        Car_Body002: THREE.Mesh
        Car_Body003: THREE.Mesh
        Car_Window003: THREE.Mesh
        Car_Body004: THREE.Mesh
        Car_Body005: THREE.Mesh
        Car_Body006: THREE.Mesh
        Car_Body007: THREE.Mesh
        Car_Body008: THREE.Mesh
        Car_Body009: THREE.Mesh
        Car_Body010: THREE.Mesh
        Car_Body011: THREE.Mesh
        Car_Body012: THREE.Mesh
        Car_Door_RL_Body001: THREE.Mesh
        Car_Door_RL_Body002: THREE.Mesh
        Car_Door_RL_Body003: THREE.Mesh
        Car_Door_FR_Body001: THREE.Mesh
        Car_Door_FR_Body002: THREE.Mesh
        Car_Door_FR_Body003: THREE.Mesh
        Car_Door_FR_Body004: THREE.Mesh
        Car_Door_FR_Body005: THREE.Mesh
        Car_Window004: THREE.Mesh
        Car_Window005: THREE.Mesh
        Car_Window006: THREE.Mesh
        Car_Window007: THREE.Mesh
        Car_Door_RL_Window001: THREE.Mesh
        Car_Door_FR_Window001: THREE.Mesh
        Car_Headlight_Glass001: THREE.Mesh
        Car_Headlight_Glass002: THREE.Mesh
        Car_Headlight_Glass003: THREE.Mesh
        Car_Tail_Light_Glass001: THREE.Mesh
        Car_Tail_Light_Glass002: THREE.Mesh
        Car_Tail_Light_Glass003: THREE.Mesh
        Car_Black001: THREE.Mesh
    }
    materials: {
        body_color: THREE.MeshStandardMaterial
        ['Rg2Mtl.001']: THREE.MeshStandardMaterial
        ['Meshpart12Mtl.001']: THREE.MeshStandardMaterial
        black_plastic_matt: THREE.MeshStandardMaterial
        ['Rg1Mtl.001']: THREE.MeshStandardMaterial
        black_plastic_gloss: THREE.MeshStandardMaterial
        ['gum.001']: THREE.MeshStandardMaterial
        ['(null)']: THREE.MeshStandardMaterial
    }
}

export default function Model({dispatch} : {dispatch: any}) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/Jeep.glb') as GLTFResult
    const { width } = useWindowDimensions(); //viewport width
    const clickHandler = (e: any) => {
        let new_material = e.object.material.clone();
        let old_material = e.object.material.clone();
        new_material.color.setRGB(0.294117647,0,0.509803922);
        e.object.material = new_material;
        e.object.material.needsUpdate = true
        dispatch(selectPart(e.object.name))
        setTimeout(() => {
            e.object.material = old_material
        }, 200)
    }
    return (
        //@ts-ignore
        <group ref={group} dispose={null}
            //@ts-ignore
               onDoubleClick={width > 630 ? e => {e.stopPropagation(); clickHandler(e)}: null} //desktop
            //@ts-ignore
               onClick={ width < 630 ? e => {e.stopPropagation(); clickHandler(e)}: null } //mobile
        >
            <mesh name={'12'} geometry={nodes.Car_Body.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <group position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02}>
                <mesh name={'Шильдик'} geometry={nodes.Car_Front_Emblem_1.geometry} material={materials['Rg2Mtl.001']} />
                <mesh name={'Шильдики модели'} geometry={nodes.Car_Front_Emblem_2.geometry} material={materials['Meshpart12Mtl.001']} />
            </group>
            <mesh name={'15'} geometry={nodes.Car_Number_Front.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            {/*<mesh name={'16'} geometry={nodes.Car_Number_Rear.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />*/}
            {/*<mesh name={''} geometry={nodes.Car_Wiper_01.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />*/}
            {/*<mesh name={'18'} geometry={nodes.Car_Wiper_02.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />*/}
            <mesh name={'Молднинг хром'} geometry={nodes.Car_Front_Aluminum.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Днище'} geometry={nodes.Car_Bottom.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передняя правая фара'} geometry={nodes.Car_Headlight_Glass.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'11'} geometry={nodes.Car_Headlight_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1a'} geometry={nodes.Car_Headlight_bmwlaser_Left.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1s'} geometry={nodes.Car_Headlight_bmwlaser_Right.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1d'} geometry={nodes.Car_Headlights.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1f'} geometry={nodes.Car_Headlight_Blue.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1g'} geometry={nodes.Car_Headlight_Fog.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1h'} geometry={nodes.Car_Headlight_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1j'} geometry={nodes.Car_Tail_Light_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задняя правая доп. оптика'} geometry={nodes.Car_Tail_Light_Glass.geometry} material={materials['Rg1Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1l'} geometry={nodes.Car_Tail_Light_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1;'} geometry={nodes.Car_Tail_Lights.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1z'} geometry={nodes.Car_Tail_light_bmw_Left.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1x'} geometry={nodes.Car_Tail_light_bmw_Right.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <group position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02}>
                <mesh name={'Матовый пластик'} geometry={nodes.Car_Black_1.geometry} material={materials.black_plastic_gloss} />
                <mesh name={'Нижняя решетка радиатора'} geometry={nodes.Car_Black_2.geometry} material={materials.black_plastic_matt} />
            </group>
            <mesh name={'1b'} geometry={nodes.Car_Rubbers.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1n'} geometry={nodes.Car_Door_Lock_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1m'} geometry={nodes.Car_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1,'} geometry={nodes.Car_Seats_Belt_Fabric.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1.'} geometry={nodes.Car_Interior_Mirror.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1/'} geometry={nodes.Car_Seats_Belt_Red.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1q'} geometry={nodes.Car_Seats_Belt_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1w'} geometry={nodes.Car_Seats_Belt_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1e'} geometry={nodes.Car_Pedals_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1r'} geometry={nodes.Car_Interior_Fabric.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1t'} geometry={nodes.Car_Pedals_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1y'} geometry={nodes.Car_Interior_Leather_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1u'} geometry={nodes.Car_Interior_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1i'} geometry={nodes.Car_Interior_Light_Glass.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1o'} geometry={nodes.Car_Interior_Light_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1p'} geometry={nodes.Car_Interior_Black.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1['} geometry={nodes.Car_Interior_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1]'} geometry={nodes.Car_Interior_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            {/*<mesh name={'Дворник'} geometry={nodes.Car_Wiper_Rear.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />*/}
            <mesh name={'1ц'} geometry={nodes.Car_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1у'} geometry={nodes.Car_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1к'} geometry={nodes.Car_xDrive_Emblem_Black.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1е'} geometry={nodes.Car_Wheel_FL_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1н'} geometry={nodes.Car_Wheel_FL_Caliper.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1г'} geometry={nodes.Car_Wheel_FL_Brake_Disk.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Шины'} geometry={nodes.Car_Wheel_FL_Tire.geometry} material={materials['gum.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1щ'} geometry={nodes.Car_Wheel_FL_M.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1з'} geometry={nodes.Car_Door_FL_Rubber.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1х'} geometry={nodes.Car_Door_FL_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ъ'} geometry={nodes.Car_Door_FL_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ф'} geometry={nodes.Car_Door_FL_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ы'} geometry={nodes.Car_Door_FL_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            {/*<mesh name={'1в'} geometry={nodes.Car_Door_FL_Light_Glass.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />*/}
            <mesh name={'1а'} geometry={nodes.Car_Door_FL_Light_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1п'} geometry={nodes.Car_Door_FL_Mirror.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1р'} geometry={nodes.Car_Door_FL_Interior_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1о'} geometry={nodes.Car_Door_FL_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1л'} geometry={nodes.Car_Door_FL_buttons.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1д'} geometry={nodes.Car_Door_FL_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задняя правая дверь'} geometry={nodes.Car_Door_RL_Body.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Центральное левое стекло'} geometry={nodes.Car_Door_RL_Window.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1я'} geometry={nodes.Car_Door_RL_Rubber.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ч'} geometry={nodes.Car_Door_RL_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1с'} geometry={nodes.Car_Door_RL_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1м'} geometry={nodes.Car_Door_RL_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1и'} geometry={nodes.Car_Door_RL_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1т'} geometry={nodes.Car_Door_RL_Interior_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ь'} geometry={nodes.Car_Door_RL_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1б'} geometry={nodes.Car_Door_RL_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ю'} geometry={nodes.Car_SW_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1.'} geometry={nodes.Car_SW_Logo.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'111'} geometry={nodes.Car_SW_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'112'} geometry={nodes.Car_SW_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'113'} geometry={nodes.Car_SW_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'133'} geometry={nodes.Car_Seat_FL_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'122'} geometry={nodes.Car_Seat_FL_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'144'} geometry={nodes.Car_Seat_FL_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'155'} geometry={nodes.Car_Seat_FL_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'166'} geometry={nodes.Car_Seat_FL_Alu_Texture.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'177'} geometry={nodes.Car_Seats_Mid_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'188'} geometry={nodes.Car_Seats_Mid_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'199'} geometry={nodes.Car_Seats_Mid_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'100'} geometry={nodes.Car_Seats_Mid_Fabric.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1--'} geometry={nodes.Car_Seats_Mid_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1йй'} geometry={nodes.Car_Seats_Mid_Alu_texture.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1цц'} geometry={nodes.Car_Seats_Rear_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1уу'} geometry={nodes.Car_Seats_Rear_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1кк'} geometry={nodes.Car_Seats_Rear_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ее'} geometry={nodes.Car_Seats_Rear_Fabric.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1нн'} geometry={nodes.Car_Wheel_FR_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1гг'} geometry={nodes.Car_Wheel_FR_Caliper.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1шш'} geometry={nodes.Car_Wheel_FR_Brake_Disk.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1щщ'} geometry={nodes.Car_Wheel_FR_M.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1зз'} geometry={nodes.Car_Wheel_RL_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1хх'} geometry={nodes.Car_Wheel_RL_Brake_Disk.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ъъ'} geometry={nodes.Car_Wheel_RL_M.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1фф'} geometry={nodes.Car_Wheel_RL_Caliper.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ыы'} geometry={nodes.Car_Wheel_RR_Caliper.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1вв'} geometry={nodes.Car_Wheel_RR_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Диски'} geometry={nodes.Car_Wheel_RR_Bolts.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1пп'} geometry={nodes.Car_Wheel_RR_Brake_Disk.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1рр'} geometry={nodes.Car_Wheel_RR_M.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передняя правая дверь'} geometry={nodes.Car_Door_FR_Body.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1лл'} geometry={nodes.Car_Door_FR_Rubber.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1дд'} geometry={nodes.Car_Door_FR_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1жж'} geometry={nodes.Car_Door_FR_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Переднее правое стекло'} geometry={nodes.Car_Door_FR_Window.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1яя'} geometry={nodes.Car_Door_FR_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1чч'} geometry={nodes.Car_Door_FR_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            {/*<mesh name={'1ссс'} geometry={nodes.Car_Door_FR_Light_Glass.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />*/}
            <mesh name={'1мм'} geometry={nodes.Car_Door_FR_Light_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ии'} geometry={nodes.Car_Door_FR_Mirror.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1тт'} geometry={nodes.Car_Door_FR_Interior_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ьь'} geometry={nodes.Car_Door_FR_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1бб'} geometry={nodes.Car_Door_FR_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1юю'} geometry={nodes.Car_Door_RR_Rubber.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1..'} geometry={nodes.Car_Door_RR_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1йц'} geometry={nodes.Car_Door_RR_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1фы'} geometry={nodes.Car_Door_RR_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1яч'} geometry={nodes.Car_Door_RR_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1цу'} geometry={nodes.Car_Door_RR_Interior_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ыв'} geometry={nodes.Car_Door_RR_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1чс'} geometry={nodes.Car_Door_RR_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ук'} geometry={nodes.Car_Seat_FR_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ва'} geometry={nodes.Car_Seat_FR_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1см'} geometry={nodes.Car_Seat_FR_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1ен'} geometry={nodes.Car_Seat_FR_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1пр'} geometry={nodes.Car_Seat_FR_Alu_Texture.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1гш'} geometry={nodes.Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'1ло'} geometry={nodes.Mesh1078_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'1ва'} geometry={nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials['(null)']} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'ф1'} geometry={nodes.Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'к1'} geometry={nodes.Mesh1306_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'е1'} geometry={nodes.Mesh131_door_rr1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'н1'} geometry={nodes.Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials.black_plastic_matt} position={[0, 0, 3.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.24} />
            <mesh name={'щ1'} geometry={nodes.Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'з1'} geometry={nodes.Mesh491_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'а1'} geometry={nodes.Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'р1'} geometry={nodes.Mesh740_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'ж1'} geometry={nodes.Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials['(null)']} position={[0, 0, 3.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.24} />
            <mesh name={'э1'} geometry={nodes.Mesh1055_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'ч1'} geometry={nodes.Mesh337_Component_1_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lex.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'и1'} geometry={nodes.Mesh956_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'т1'} geometry={nodes.Mesh678_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'ь1'} geometry={nodes.Mesh485_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'ю1'} geometry={nodes.Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'.1'} geometry={nodes.Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_gloss} position={[0, 0, 13.53]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'ап1'} geometry={nodes.Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'по1'} geometry={nodes.Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials['(null)']} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'q1'} geometry={nodes.Mesh483_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'r1'} geometry={nodes.Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials['(null)']} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'i1'} geometry={nodes.Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry} material={materials.black_plastic_matt} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'p1'} geometry={nodes.LKSS_SIZE_16001_Mesh_2009.geometry} material={materials['(null)']} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'f1'} geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={materials['(null)']} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Заднее стекло'} geometry={nodes.Car_Window001.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'h1'} geometry={nodes.Car_Window002.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Капот'} geometry={nodes.Car_Body001.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передний бампер'} geometry={nodes.Car_Body002.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задний бампер'} geometry={nodes.Car_Body003.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Лобовое стекло'} geometry={nodes.Car_Window003.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Переднее правое крыло'} geometry={nodes.Car_Body004.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Переднее левое крыло'} geometry={nodes.Car_Body005.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Козырек'} geometry={nodes.Car_Body006.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Левая стойка'} geometry={nodes.Car_Body007.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Правая стойка'} geometry={nodes.Car_Body008.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Заднее правое крыло'} geometry={nodes.Car_Body009.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Заднее левое крыло'} geometry={nodes.Car_Body010.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Багажник'} geometry={nodes.Car_Body011.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'11ads'} geometry={nodes.Car_Body012.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задняя левая ручка'} geometry={nodes.Car_Door_RL_Body001.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задняя левая дверь'} geometry={nodes.Car_Door_RL_Body002.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задняя правая ручка'} geometry={nodes.Car_Door_RL_Body003.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передняя левая ручка'} geometry={nodes.Car_Door_FR_Body001.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Корпус левого зеркала'} geometry={nodes.Car_Door_FR_Body002.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передняя правая ручка'} geometry={nodes.Car_Door_FR_Body003.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Копрус правого зеркала'} geometry={nodes.Car_Door_FR_Body004.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передняя левая дверь'} geometry={nodes.Car_Door_FR_Body005.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Заднее правое стекло'} geometry={nodes.Car_Window004.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1asd1a'} geometry={nodes.Car_Window005.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Люк'} geometry={nodes.Car_Window006.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Заднее левое стекло'} geometry={nodes.Car_Window007.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Центральное правое стекло'} geometry={nodes.Car_Door_RL_Window001.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Переднее левое стекло'} geometry={nodes.Car_Door_FR_Window001.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передняя левая фара'} geometry={nodes.Car_Headlight_Glass001.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передняя правая доп. оптика'} geometry={nodes.Car_Headlight_Glass002.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передняя левая доп. оптика'} geometry={nodes.Car_Headlight_Glass003.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задняя левая фара'} geometry={nodes.Car_Tail_Light_Glass001.geometry} material={materials['Rg1Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задняя левая доп. оптика'} geometry={nodes.Car_Tail_Light_Glass002.geometry} material={materials['Rg1Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задняя правая фара'} geometry={nodes.Car_Tail_Light_Glass003.geometry} material={materials['Rg1Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Выхлопные трубы'} geometry={nodes.Car_Black001.geometry} material={materials.black_plastic_gloss} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
        </group>
    )
}

useGLTF.preload('/Jeep.glb')
