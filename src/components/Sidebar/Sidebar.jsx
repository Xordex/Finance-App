import { LuLayoutDashboard } from "react-icons/lu";
import MenuItem from "./MenuItem";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import './sidebar.css'
import { menuItems } from '../../constants/index'

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen && "opensidebar"}`} >
            <div>
                <LuLayoutDashboard className={`lulaicon`} />
            </div>

            <div className="menu_item_container">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} icon={item.icon} name={item.name} isOpen={isOpen} />
                ))}
            </div>

            <button onClick={toggleSidebar} className="btn_sidebar">
                {isOpen ? <RiArrowLeftWideFill /> : <RiArrowRightWideFill />}
            </button>
        </div >
    )
}