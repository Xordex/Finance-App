import { motion } from "framer-motion";

export default function CardItem({ item, variants }) {
    return (
        <motion.div variants={variants} className="carditem_container">
            <div className="carditem_box">
                {item.icon}
                <h3>{item.title}</h3>
            </div>
            <h1>{item.value}</h1>
        </motion.div>
    );
}