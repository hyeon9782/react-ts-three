import React from "react";
type Props = {
  handleClick: () => void;
};
const Move = ({ handleClick }: Props) => {
  return (
    <mesh>
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Move;
