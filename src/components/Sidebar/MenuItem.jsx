import './menuitem.css'

export default function MenuItem({ icon: Icon, name, isOpen }) {
    return (
        <div className="menu_icon">
            <Icon />
            {isOpen && <span>{name}</span>}
        </div>
    )
}