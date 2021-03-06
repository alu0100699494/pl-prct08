# Práctica 08 - Procesadores de Lenguajes#
## 1. Objetivo de la práctica ##

El objetivo de la práctica consiste en realizar un **analizador sintáctico recursivo no predictivo** o *parser* para un el antiguo lenguaje ***PL/0*** con ayuda de la libería **Jison**, permitiendo backtracking. Además, se pide modificar la gramática del lenguaje **PL/0** Para que acepte las sentencias *if-then-else* y maneje argumentos en los procedimientos (*PROCEDURE* y *CALL* ). 

Posteriormente, se deberá realizar un análisis de ámbito o semántico para comprobar la aparición de los identificadores, asegurándonos, por ejemplo, que no se le asigna un valor a una constante (*CONST*), o que se intente hacer un *CALL* con un identificador de una variable, y no de un procedimiento.

Finalmente, se debe modificar la estructura del programa *Ruby/Sinatra* para poder almacenar usuarios que guardan programas, y proveer una ruta para ver los programas guardados por un determinado usuario.

## 2. Acceso a la página web ##
Se puede acceder a la página web de *Heroku* alojada en el siguiente enlace:

- Despliegue en Heroku: [http://alu0100699494-pl-prct08.herokuapp.com](http://alu0100699494-pl-prct08.herokuapp.com)
- Pruebas: [http://alu0100699494-pl-prct08.herokuapp.com/test](http://alu0100699494-pl-prct08.herokuapp.com/test)

## 3. Dependencias ##
Se ha hecho uso de la librerías siguientes:

- [jQuery](http://jquery.com/)
- [MathJax](http://docs.mathjax.org/en/latest/start.html)

Otras librerías pertenecen al lado del *servidor* (ruby). Además, no es necesario descargar ninguna dependencia externa (vienen incluidas en el repositorio, o están referenciadas de manera online).

## 4. Reparto del trabajo ##

Se ha repartido el trabajo de la práctica, de una manera más o menos equitativa, tal que:

### Laura ###
- Análisis de **ámbito**:
  - Creación de tablas de símbolos.
  - Comprobación de uso de identificadores.
  - Asociación de uso de identificadores con su ámbito.
  - Gestión de errores. 

### Daniel ###
- Inicializar el repositorio.
- Estilo Metro UI CSS.
- Gestión de usuarios y programas con *DataMapper*.
- Nuevas pruebas.


## 5. Autores ##
Este proyecto ha sido desarrollado, en conjunto, por:

<!-- Tabla -->
<table cellspacing="0">
  <tr  style="background-color: #E3E3E3;">
    <td> <b>Nombre</b> </td>
    <td> <b>Código alu</b> </td>
	<td> <b>Correo electrónico</b> </td>
  </tr>
  <tr style="background-color: #FFFFFF;">
    <td> Daniel Herzog Cruz </td>
    <td> alu0100699494 </td>
	<td> <a href="mailto:alu0100699494@ull.edu.es">alu0100699494@ull.edu.es</a> </td>
  </tr>
  <tr style="background-color: #FFFFFF;">
    <td> Laura Fariña Rodríguez </td>
    <td> alu0100693096 </td>
	<td> <a href="mailto:alu0100693096@ull.edu.es">alu0100693096@ull.edu.es</a> </td>
  </tr>
</table>
<!-- Fin tabla -->
