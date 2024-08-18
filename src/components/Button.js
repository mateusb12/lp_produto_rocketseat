import React, {useState} from 'react';
import '../css/Button.css'; // Ensure to create this CSS file

const Button = ({ label, type = 'primary' }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const className = `button ${type} ${isHovering ? 'hover' : 'default'}`;

    return (
        <button
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {label}
        </button>
    );
};

export default Button;