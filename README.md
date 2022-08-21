# E-comerce React Js

## Propósito

Este proyecto buscar simular las funciones y el accionar de un carrito, a través de la librería React Js. Además se utiliza Firebase para simular una base de datos con sus funcionalidades.

##R equerimientos

Se necesitan instalar un total de 4 dependencias. Primero y la más básica obtendremos mNPM con el comando `npm install` para obtener los componentes básicos para la creación de nuestra aplicación.

Luego instalaremos React Router Dom con el comando `npm install react-router-dom` para obtener las funcionalidades del browser. 
Con el fin de obtener las funcionalidades de las bases de datos instalaremos Firebase a través del comando `npm install firebase`
Ademas necesitaremos un swiper para el la HomePage, con este fin utilizremos el comando `npm i swiper`con esto obtenderemos ls herramients para crer nuestro swiper.
por ultimo instalaremos SweetAlert a través de `npm install sweetalert`par obtenere una lert atrctiva para el usurio.

## Carpetas y distribución

La creación de cualquier edición debe realizarse dentro de la carpeta de SRC. Si se busca agregar código para crear algún componente debe hacerse dentro de la carpeta componentes y dentro de la pagina deseada. En caso de creaar una pagina totalmente nueva debeb hcerse en caprt con el nombre de la pagina seguido de "PAGE". Si se busca crear funciones que se vayan a utilizar a lo largo de la aplicación se recomiendo hacerlo dentro del archivo CartContext.jsx. Por ultimo cabe recalcar que todo el estilo de este proyecto se encuentre en el archivo app.css si se quiera editar el estilo debe hacerse en ese archivo.

## Salvedades
 el proyecto todavía no cuenta con diseño responsive.

## Funcionabilidad

El proyecto obtiene los datos de los productos a través de Firebase y los muestra a través de un map. A la hora de hacer click en el producto el id es pasado a través del useparams al ItemDetail.jsx. El cual filtra los productos obtenidos originalmente y encuentra l información sobre el mismo. Después de agregar los productos al carrito, estos serán mostrados en Cartpage.jsx. Por ultimo e debe llenar el formulario para que este sea enviado como orden de compra a Firebase.

![GIF Ecomerce Bruno De CRUZ](https://user-images.githubusercontent.com/96153147/183527931-dccf170c-1943-4ee9-bf0d-e5e951603c77.gif)
