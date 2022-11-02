import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Cube } from './cube';

function CubeAnimation() {
	return (
		<div className="App">
			<Canvas
				camera={{
					fov: 45,
					near: 0.1,
					far: 1000,
					position: [0, 0, 5]
				}}
			>
				<Cube />
				<ambientLight args={[0xffffff]} intensity={0.2} />
				<directionalLight position={[1, 1, 1]} intensity={0.8} />
				<OrbitControls />
			</Canvas>
		</div>
	);
}

export default CubeAnimation;