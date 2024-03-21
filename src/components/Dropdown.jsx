import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import '../css/Dropdown.css'
import { toCapital } from '../helpers/toCapital';

const categories = ['mugs', 'accesorios', 'bolsos', 'camisas', 'buzos', 'colección']; 

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseLeave={() => setIsOpen(false)}>
      <button className="dropdown-trigger" onClick={toggleDropdown}>
        <span>Categoria</span> <FaCaretDown />
      </button>
      {isOpen && (
        <ul className="dropdown-content">
          {categories.map((category) => (
            
            <li key={category}>
              <Link className='link' to={`/productos/${category}`} onClick={() => handleCategoryChange(category)}>
                {toCapital(category)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
