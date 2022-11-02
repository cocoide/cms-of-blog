import { FC } from 'react';

export const Cube: FC = () => {
	return (
		<mesh>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshPhongMaterial color="aqua" />
		</mesh>
	);
};