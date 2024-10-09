import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Title from "../Title/Title";
import './BarChart.css'
import { monthData } from "../../constants";
import { motion } from "framer-motion";

export default function CustomBarChart({ variants }) {
    return (
        <motion.div className="bar_container" variants={variants}>
            <Title>Sales and Revenue</Title>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#14b8a6" />
                    <Bar dataKey="revenue" fill="#0f766e" />
                </BarChart>
            </ResponsiveContainer>
        </motion.div >
    )
}