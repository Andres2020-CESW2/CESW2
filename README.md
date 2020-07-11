### Informe 3 - Web 2 (Version final):

**Integrantes:**

*Andres David Amaya Muñoz / Mateo Castañeda Figueroa / Kevin Carvajal / Duver Bentancur*


* ## DESCRIPCIÓN DEL PROBLEMA:

El sitio web revista caballistas ( https://www.revistacaballistas.com/ ) no posee una
base de datos automatizada de los clientes que se registran en el formulario de la
página para suscribirse y elegir un plan de pago para la revista. Cuando un cliente se
registra en dicho formulario se envía un correo al propietario con los datos, y se
encarga de registrar manualmente el usuario en un archivo de excel.
El método de pago que tiene la pagina es por transferencia, el propietario tiene en la
página el número de cuenta de banco para que el cliente realice la transacción a dicha
cuenta, lo que ocasiona una mala administración de los clientes que realmente pagan.
Ya que un cliente puede hacer la transacción sin necesidad de diligenciar el formulario,
es decir no hay validación de quien realmente paga.
Actualmente cuando llega el correo de que un cliente se registró, este debe
comunicarse con el cliente, tarea que es muy desgastante ya que a cada cliente le
debe hacer seguimiento para validar que si realice el pago (preguntando cosas como
el comprobante de la transacción), donde en muchas ocasiones el cliente no responde.
Cuando el propietario valida y sabe los datos del cliente que pagó (dirección, teléfono,
cédula, nombre, etc ),este le envía la revista física para que sea entregada en la puerta
de su casa. El inconveniente es que el cliente no puede visualizar claramente la revista
inmediatamente después del pago, donde este debe esperar hasta que la revista le
llegue a la casa.
Esto ya que en la pagina https://www.revistacaballistas.com/ hay una sección
de “ediciones” donde se aprecia todas los editoriales que ha sacado hasta la fecha en
formato PDF como vista previa, lo que le quita exclusividad a la revista.

* ## JUSTIFICACIÓN:


Su utilidad está basada para que los clientes se les facilite la compra y la lectura de la revista en cada edición. 
También apoya al propietario en el control (automatizado) de los clientes que realizan la compra.


* ## ALCANCE / Descripcion de la propuesta :

Realizar una plataforma web, que funcione como complemento de la pagina web https://www.revistacaballistas.com que contará con dos perfiles: Administrador y Cliente, para 
ayudar a gestionar el pago online por parte de los clientes donde se lleve un registro de cada persona que realice el pago. Además donde el cliente podrá visualizar 
virtualmente la revista y sus ediciones de una manera más cómoda después del pago. 
La página contará con:

- Registro de clientes (nombre, cédula, teléfono, email, dirección - ciudad).
- Confirmación de correo electrónico y creación de contraseña
- Inicio de sesión transversal para todos los perfiles
- Luego de iniciar sesión se debe mostrar el home para el perfil cliente
- Visualizar las ediciones de las revista modo libro (solo a los que ya estén registrados y hayan pagado el plan básico o premium).
- Simulación de pago online (Stripe) cuando el cliente esté registrado.
- Registro del cliente que realizó el pago (automático).
- Generar recibos de los pagos realizados por cada cliente.
- Registro de la compra por cada cliente con las siguientes opciones para el plan de suscripción: Básico (Ediciones 1-18 en versión digital), 
Estándar (Ediciones 1-18 en versión impresa), Premium (Ediciones 1-18 en versión digital e impresa)
- Registro de peticiones, quejas y reclamos por medio de los usuarios
- Registro de un solo administrador (nombre completo, contraseña).
- Listado de clientes registrados en el sistema
- Se llevará el proceso por parte del administrador de las peticiones quejas y reclamos registradas.

El perfil administrador es el encargado de modificar y cambiar de estado el registro de cada cliente, es decir, podrá cambiar el estado de un cliente activo ó inactivo; 
El administrador cada vez que adicione editoriales nuevas podrá renovar el valor de las suscripciones, si el cliente desea obtener y visualizar las nuevas editoriales 
debe pagar el nuevo valor que asignó el administrador. Esto ya que cuando un cliente paga la suscripción, está pagando desde la primera hasta la última editorial de la fecha. El administrador puede visualizar el registro de los pagos realizados por cada cliente y generar recibos de cada uno. Adicional podrá ver que cliente ha pagado y cual no, de los que ya están registrados.

El perfil cliente podrá visualizar los planes disponibles para poder realizar el pago online (Básico, Estándar y premium). Puede realizar el pago online, 
también tendrá la posibilidad de registrar alguna petición queja o reclamo que se presente en el proceso de compra y podrá ver el recibo vía correo que se 
genera automáticamente. Si el cliente no ha realizado el pago, NO se habilitará la opción para ver la revista de forma digital.


* ## OBJETIVO GENERAL:

Desarrollar una página web como complemento para el sitio https://www.revistacaballistas.com/.
Donde permite a los aficionados del caballo en colombia comprar y visualizar de
manera virtual la “Revista Caballista” donde podrán estar informados de las últimas
novedades del reino equino (caballo). También facilita al propietario el control y gestión de los clientes que optan por comprar
la suscripción.

* ## OBJETIVOS ESPECÍFICOS:

● Definir cuáles son los requisitos que estipula el cliente para solucionar el problema que se presenta en la página.

● Elegir las tecnologías para desarrollar la página que se acomoden a lo estipulado por la materias y que se acomoden a la 
necesidad del cliente.

● Diseñar un prototipo que facilite al cliente el entendimiento del aplicativo.

● Desarrollar una interfaz amigable con los principios de usabilidad para que sea adecuada con los servicios a ofrecer.

● Desarrollar un código con buen mantenimiento, usando buenas prácticas y con estandarización establecida.

● Comprobar que el software esté almacenando la información requerida adecuadamente para un control de la base de datos de 
los pagos y lainformación del cliente.

● Incluir un manual de usuario accesible al cliente y de fácil entendimiento.


# Modelo entidad relacion:

[Modelo entidad relacion](https://raw.githubusercontent.com/Andres2020-CESW2/CESW2/informe_dos/Modelo_ER.PNG).

# Modelo Wireframe (prototipo):

[Modelo Wireframe en Figma](https://www.figma.com/file/o6kKWvFzo36c6IBNFLV6uS/REVISTA-CABALLISTAS---PROTOTIPO?node-id=0%3A1).

# Diagrama de Clases(UML):

[Diagrama de Clases(UML)](https://raw.githubusercontent.com/Andres2020-CESW2/CESW2/informe_dos/Diagrama_UML.png)

# EndPoint Frontend: 

[FrontEnd](https://revistacaballistas.vercel.app/)

# DG BD: 

[Diagrama base de datos](https://raw.githubusercontent.com/Andres2020-CESW2/CESW2/informe_tres/Diagrama BD.jpg)


