# TODO List

## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | Ingeniería en Computación |
| **Materia** | Desarrollo de Aplicaciones Web |
| **Docente** | Mtro. Luis Antonio Ramírez Martínez |
| **Actividad** | Tarea 3: Desarrollo de servicios web con Node.js |
| **Alumno** | Manuel Ramirez Contreras |
| **Matrícula** | [385706] |
| **Fecha de entrega** | [04/09/2026] |

## Descripción

Aplicación web básica para administrar una lista de tareas en memoria. Expone la misma lógica de negocio mediante una API REST con Express y un servicio SOAP, e integra registro de eventos, pruebas unitarias, análisis estático y refresco automático durante el desarrollo.

## Objetivo

Desarrollar una aplicacion web basica de gestion de tareas (TODO List) utilizando Node.js, NPM y Express, que permita aplicar los conceptos fundamentales de administracion de paquetes y exponer funcionalidades mediante servicios REST y SOAP.
Durante el desarrollo se incorporaran herramientas para registro de eventos, refresco automatico, analisis de calidad de codigo y pruebas unitarias, con el proposito de familiarizar al estudiante con un flujo basico de desarrollo de aplicaciones con Node.js.

## Tecnologías utilizadas

- Node.js y NPM
- Express para la API REST
- `soap` para el servicio SOAP
- Log4js para el registro de eventos
- Supervisor para el refresco en caliente
- Jest para las pruebas unitarias
- ESLint para el análisis estático

## Requisitos previos

- Node.js y NPM instalados.
- Git para clonar el repositorio.
- Postman, opcionalmente, para probar los endpoints REST y SOAP.

## Instalación

```bash
git clone https://github.com/Mozeu/TODO_List
cd TODO_List
npm install
```

## Ejecución

```bash
npm start
```

La aplicación queda disponible en `http://localhost:3000`.

## Scripts / comandos disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Inicia la aplicación en el puerto 3000. |
| `npm run dev` | Inicia la aplicación con Supervisor para reiniciarla al detectar cambios. |
| `npm test` | Ejecuta las pruebas unitarias con Jest. |
| `npm run lint` | Ejecuta el análisis estático con ESLint. |

## Funcionalidades / uso

### API REST

La API utiliza `http://localhost:3000/api/tasks` y permite:

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/tasks` | Consulta todas las tareas. |
| `GET` | `/api/tasks/:id` | Consulta una tarea por identificador. |
| `POST` | `/api/tasks` | Crea una tarea. Recibe `{ "title": "Estudiar Node.js" }`. |
| `PUT` | `/api/tasks/:id` | Modifica `title` y/o `completed`. |
| `DELETE` | `/api/tasks/:id` | Elimina una tarea. |

Cada tarea contiene `id`, `title` y `completed`. Los datos se almacenan únicamente en memoria y se pierden al reiniciar la aplicación.

### Servicio SOAP

El WSDL se encuentra en `http://localhost:3000/wsdl?wsdl`. El servicio expone las operaciones `GetTasks` y `AddTask`, reutilizando el servicio de tareas. 

Las solicitudes REST y SOAP pueden probarse mediante Postman.

## Pruebas

Las pruebas se ejecutan con:

```bash
npm test
```

## Análisis de calidad de código

El análisis estático se ejecuta con:

```bash
npm run lint
```

## Estructura general del proyecto


```text
todo-app/
|-- src/
| |-- app.js
| |-- services/
| | ‘-- taskService.js
| |-- routes/
| | ‘-- tasks.js
| |-- soap/
| | ‘-- tasks.js
| ‘-- utils/
|   ‘-- logger.js
|-- test/
| ‘-- taskService.test.js
|-- logs/
|-- package.json
|-- package-lock.json
|-- eslint.config.js
|-- .gitignore
‘-- README.md
```

## Autor

Manuel Ramirez Contreras — 385706
