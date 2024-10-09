import Activity from "../Activity/Activity";
import Cards from "../Cards/Cards";
import CustomBarChart from "../Charts/CustomBarChart";
import CustomPieChart from "../Charts/CustomPieChart";
import Header from "../Header/Header";
import Table from "../Table/Table";
import './Main.css';
import { motion } from "framer-motion";

const containerVaiants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20,
            staggerChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function Main({ isOpen, toggleDarkMode, darkMode }) {
    return (
        <div className={`main_container ${isOpen && "openMenucontainer"}`} >
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Cards />

            <motion.div className="charts_container" variants={containerVaiants} initial="hidden" animate="visible">
                <CustomBarChart variants={itemVariants} />
                <CustomPieChart variants={itemVariants} />
            </motion.div>

            <motion.div className="charts_container" variants={containerVaiants} initial="hidden" animate="visible">
                <Table variants={itemVariants} />
                <Activity variants={itemVariants} />
            </motion.div>
        </div >
    )
}