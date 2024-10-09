import { recentActivities } from "../../constants";
import Title from "../Title/Title";
import './Activity.css'
import { motion } from "framer-motion"

export default function Activity({ variants }) {
    return (
        <motion.div className="bar_container activity_container" variants={variants}>
            <Title>Recent Activities</Title>

            <ul>
                {recentActivities.map(activity => (
                    <li key={activity.id}>
                        <img src={activity.img} alt={activity.name} />
                        <div>
                            <h3>{activity.name}</h3>
                            <p>{activity.activity}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}