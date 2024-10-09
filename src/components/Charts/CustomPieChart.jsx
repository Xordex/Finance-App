import { Pie, PieChart, ResponsiveContainer } from "recharts";
import Title from "../Title/Title";
import './BarChart.css'
import { chartData01, chartData02 } from "../../constants";
import { motion } from "framer-motion";

export default function CustomPieChart({ variants }) {
    return (
        <motion.div className="bar_container pie_container" variants={variants}>
            <Title>Sales by Category</Title>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={chartData01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" nameKey="name" label />
                    <Pie data={chartData02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" nameKey="name" label />
                </PieChart>
            </ResponsiveContainer>
        </motion.div >
    )
}