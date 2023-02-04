import React from 'react';
import {ContactoClass} from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';


const ContactoListComponent = () => {
    
    const defaultContact = new ContactoClass('Erika', 'Duarte', 'erika@gmail.com', false );

    return (
        <div>
           <div>
              <h1>
              Your CONTACTS
              </h1>
              
           </div> 
           <ContactoComponent ContactoClass={defaultContact}></ContactoComponent>
        </div>
    );
};

export default ContactoListComponent;