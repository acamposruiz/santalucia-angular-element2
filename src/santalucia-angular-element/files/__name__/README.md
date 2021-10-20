# AngularElements
Bienvenidos al arquetipo para la generación de Angular Elements compatibles con cualquier tecnología, arquitectura y navegador a partir de Internet Explorer 11.

## Build

Debido a que el presente arquetipo NO es una aplicación en si, no puede ser servido mediante ng serve, y debe ser exclusivamente compilado con el siguiente comando:
        
        npm run build:elements

## Encapsulado de imagenes

El arquetipo incorpora un script para permitir trabajar con imágenes en formato jpg | png | gif las cuales serán tratadas a todos los efectos en código base64 tanto en modo desarrollo como en el entorno de producción.

Para ello se ha definido un proceso lo más simplificado posible que permita trabajar con este tipo de archivos y que a su vez puedan ser encapsulados en el componente resultante de la compilación.

Lo primero es ubicar la imagen o imágenes dentro de la siguiente ubicación del arquetipo "app/assets/imagenes/img-ejemplo.jpg". y a continuación ejecutar el siguiente comando:
        
        npm run img:base64

De esta manera se habrá generado el código necesario para poder trabajar con las imágenes que se encontraran en el path que se ha indicado anteriormente.

Lo principal son la carpeta modelos que se ha creado al mismo nivel que la carpeta con las imágenes y que contiene la el codigo base64 correspondiente a cada imagen y un servicio desde el cual podremos insertarlas en el componente.

Para poder realizar esta inserción se muestra un ejemplo del código que hay que realizar para usarlas en un componente:

        // componente-ejemplo.ts
        import { ImgManagerService } from 'src/app/img-manager.service';
        .
        .
        .
        constructor( public imgManagerService: ImgManagerService ) {}

        // componente-ejemplo.html
        <img [src]="imgManagerService.imgEjemplo">

***Nota**
Es requisito obligatorio realizar este sistema de encapsulación de las imágenes para que el flujo de compilación y despliegue se ejecute correctamente. Y tampoco es válido el uso de caracteres especiales en los nombres de los ficheros de imagen salvo el guión medio "-" como se muestra en el siguiente ejemplo.

        "imagen-de-prueba.jpg" -> Correcto
        "imagen#de@prueba.jpg" -> Incorrecto

## Running unit tests

Para ejecutar la pila de test unitarios utilizar el siguiente comando:
npm run test:ci

