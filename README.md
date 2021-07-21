# Prueba técnica homesales
Test: Home sales portal design, Next/Node


---
<div classname="center">
<img src="https://i.ibb.co/2kn3dQT/homesales.jpg" >
</div>
---


## Entorno de desarrollo cliente puerto 3000


### `cd client`
### `npm install`
Para instalación de dependencias

### `npm run dev`
Entorno de desarrollo

## Entorno de desarrollo servidor puerto 4000


### `cd server`
### `npm install`
Para instalación de dependencias

### `nodemon index.js`
Entorno de desarrollo

## Memoria
---
En construcción.

Página principal diseñada con los estilos proporcionados a través de Zeplin.

Requisitos:
<div>
Recibir json desde un endpoint.
</div>
<div>
Estilos en css
</div>
<div>
Nextjs
</div>
<div>
Uso de bootstrap para el diseño responsive. 
</div>

## Anotaciones de trabajo:

Se ha fijado las columnas con grid de bootrap.

Definiendo las anchuras por medio de números del 1 al 12.
Diferenciando entre modo mvl y pc y escondiendo los componentes en cada uno.

Para la alineación vertical, asi como los margenes o paddings se ha usado selectores de css personalizados agregados como clase secundaria. 

Las imagenes tiene un padre con posición relativa y se controla sus dimensiones en las clases.

Las alineaciones usan flexbox. 

Cada archivo .css es a nivel de componente y pueden repetirse en diferentes archivos las mismas clases sin problemas. 
De todas formas mejor evitarlo. 

El servidor incluye configuración de cors para evitar problemas en la obtención de datos. 
