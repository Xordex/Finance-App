import CardItem from "./CardItem";
import { cardItems } from "../../constants";
import './Cards.css';
import { motion } from "framer-motion";

const containerVaiants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export default function Cards() {
    return (
        <motion.div className="cards_container" variants={containerVaiants} initial="hidden" animate="show">
            {cardItems.map((item, index) => {
                return (<CardItem item={item} key={index} variants={itemVariants} />);
            })}
        </motion.div>
    )
}