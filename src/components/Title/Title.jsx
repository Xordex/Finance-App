import { PiDotsThreeCircleVertical } from "react-icons/pi";
import './Title.css';

export default function Title({ children }) {
    return (
        <div className="title_container">
            <h2>{children}</h2>
            <PiDotsThreeCircleVertical />
        </div>
    )
}