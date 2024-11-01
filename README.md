# Cafetería App - Frontend

Esta aplicación de cafetería, desarrollada con ReactJS, 
ofrece una interfaz intuitiva tanto para web como para
escritorio y dispositivos móviles. Sigue estos pasos para 
configurar y contribuir al proyecto.

## Instalación y Configuración Inicial

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>

##  Instala las dependencias del proyecto:
npm install

## Ramas del Repositorio:

main: versión estable de la aplicación.
dev: rama de desarrollo, donde se deben enviar todos los cambios.
vercion-escritorio: versión de escritorio, integrada con Electron.
vercion-movil: versión móvil, integrada con Ionic.

Nota: Antes de cambiar a las ramas vercion-escritorio o vercion-movil, 
elimina la carpeta node_modules y vuelve a instalar las dependencias 
ejecutando npm install para evitar conflictos.

## Ejecución del Proyecto Web
Para ejecutar la versión web, utiliza:
npm start
Esto abrirá la aplicación en el navegador.

## Ejecución del Proyecto vercion Escritorio
En una terminal, ejecuta:
npm run star 
esto abrira la aplicacio en tu navegador
despues abre otra terminal y ejecuta el siguiente coamndo;
npm run electron-dev
esto abrira el proyecto en aplicacion de escritorio

## Ejecución del Proyecto vercion movil 
Asegúrate de tener Android Studio y un emulador activo.
Ejecuta el siguiente comando;
ionic serve
Conexión con el Backend

## Esta aplicación está conectada a un backend desarrollado en NestJS. 
Para configurarlo, clona el repositorio del backend y sigue las instrucciones en su README:

Backend Cafetería

https://github.com/Ezequiel-2023/server-cafeteria-.git





