import { BsArrowUpRightCircle } from "react-icons/bs";

export default function Arrow({ size, color, style }) {
  const myStyles = { fontSize: size, color: color, ...style };
  return <BsArrowUpRightCircle style={myStyles} />;
}
