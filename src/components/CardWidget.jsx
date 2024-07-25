import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CardContext } from './../context/CardContext';

export const CardWidget = () => {
    const { cantidadCarrito } = useContext(CardContext);
    const cantidad = cantidadCarrito();

    return (
        <div>
            <Link className='menu-link' to='/carrito'>
                <FaShoppingCart className={`carrito-icon ${cantidad > 0 ? 'full' : ''}`} />
                {cantidad > 0 && <span className='numerito'>{cantidad}</span>}
            </Link>
        </div>
    );
};
