import React from 'react';
import PropTypes from 'prop-types';
import ContactoClass from '../../models/contacto.class';



const ContactoComponent = ({ ContactoClass }) => {
    return (
        <div>
            <h2>
            Nombre: {ContactoClass.Nombre}
            </h2>
            <h3>
            Apellido: {ContactoClass.Apellido}
            </h3>
            <h4>
            Email : {ContactoClass.Email}
            </h4>
            <h5>
            This contacto is: {ContactoClass.Estado ? 'CONECTADO' : 'DESCONECTADO'}
            </h5>
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto : PropTypes.instanceOf(ContactoClass)
};


export default ContactoComponent;
