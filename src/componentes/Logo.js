import React from 'react';
import '../hojas-de-estilo/Logo.css';
import freecodecamplogo from '../imagenes/freecodecamp-logo.png';

function Logo(){
    return (
    <div className='freecodecamp-logo-contenedor'>
        <p>Hola</p>
        <img
        src={freecodecamplogo}
        className='freecodecamp-logo'
        alt='Logo de freecodecamp'/>
    </div>
    )
}

export default Logo;