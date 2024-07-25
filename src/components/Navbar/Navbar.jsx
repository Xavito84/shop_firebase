import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardWidget } from '../CardWidget';

const Navbar = () => {
    const [productosVisible, setProductosVisible] = useState(false);

    const toggleProductos = () => {
        setProductosVisible(!productosVisible);
    };

    return (
        <div>
            <nav className='navbar'>
                <Link to="/" className='logo'><h1>SportShop</h1></Link>

                <ul className='menu'>
                    <li><Link className='menu-link' to='/'>Inicio</Link></li>
                    <li><Link className='menu-link' to='/nosotros'>Nosotros</Link></li>
                    <li>
                        <Link className='menu-link' onClick={toggleProductos} to='/productos'>Productos</Link>
                        <ul className={productosVisible ? 'submenu visible' : 'submenu'}>
                            <li><Link className='menu-link' to='/productos/Deportivas'>Deportivas</Link></li>
                            <li><Link className='menu-link' to='/productos/Baloncesto'>Baloncesto</Link></li>
                            <li><Link className='menu-link' to='/productos/Fútbol'>Fútbol</Link></li>
                            <li><Link className='menu-link' to='/productos/Hockey'>Hockey</Link></li>
                        </ul>
                    </li>
                    <li><Link className='menu-link' to='/contacto'>Contacto</Link></li>
                    <li><CardWidget /></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
