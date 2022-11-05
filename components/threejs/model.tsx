import * as React from "react";
import * as Drei from "@react-three/drei";

const Model: React.FC = () => {
    
    const { scene } = Drei.useGLTF("public/glb/ImageToStl.com_uploads_files_4008356_giftbox_blend.glb");

  return (
      <group dispose={null}>
        <primitive scale={[1, 1, 1]} object={scene} />
      </group>
    )
};

export default Model;