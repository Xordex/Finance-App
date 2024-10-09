import Title from "../Title/Title";
import './Table.css';
import { tableData } from "../../constants";
import { motion } from "framer-motion"

export default function Table({ variants }) {
    return (
        <motion.div className="bar_container table_container" variants={variants}>
            <Title>Receipt</Title>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Receipt Name</th>
                        <th>Dae</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {tableData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.receiptName}</td>
                            <td>{item.date}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    )
}