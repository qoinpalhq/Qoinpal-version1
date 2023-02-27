import Header from "./Header/Header";
import { motion } from "framer-motion";
import variants from "../Variables";

export default function SharedLayout(props) {
  return (
    <motion.div
      variants={variants}
      initial="before"
      animate="enter"
      exit="after"
    >
      <Header color={props?.color} />
      {props.children}
    </motion.div>
  );
}
