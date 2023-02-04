

export class ContactoClass {
    Nombre = '';
    Apellido = '';
    Email = '';
    Estado = false;

    constructor(Nombre, Apellido, Email, Estado){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Estado = Estado;
    }
   
}

export default ContactoClass;
