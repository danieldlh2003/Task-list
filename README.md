# TaskManagement

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## iniciar proyecto
1 verificar version de Node 
2 cuando el proyecto este descargado ejecutar un "npm install"
3 luego con "ng serve " iniciar el servidor de desarrollo

## Justificación del enfoque y herramientas

Modularidad y reutilización: La arquitectura basada en componentes facilita la escalabilidad y el mantenimiento.

Responsabilidades: Angular maneja la UI y las interacciones, mientras que con .NET gestiono la lógica de negocio y la persistencia.

Eficiencia: Usar HttpClient en Angular me permite una comunicación eficiente con el backend, y Entity Framework en .NET simplifica la gestión de la base de datos.

## Herramientas utilizadas
Frontend: Angular

Componentes y modularidad (@Component, @Output).
Reactive Forms (FormBuilder, FormGroup).
Comunicación con el backend mediante HttpClient.
Estilos en CSS (styleUrl en los componentes).

Backend: .NET con Entity Framework

Persistencia de datos mediante AppDbContext.
Uso de una base de datos en memoria (UseInMemoryDatabase("TaskDb")).
Implementación de controladores en TaskController para exponer los endpoints.
Azure para despliegue de servicios 

## Enfoque

Arquitectura basada en componentes:

 utilicé componentes reutilizables (CreateTaskComponent, TasksListComponent, TaskComponent), lo que promueve la separación de responsabilidades y facilita el mantenimiento a largo plazo.

 Implementé @Output() en CreateTaskComponent para emitir eventos al componente padre, lo que mejora la comunicación entre componentes.

 Servicios para la gestión de datos:

 Se usó un servicio (TaskService) en el frontend para interactuar con el backend mediante HTTP requests, asegurando una separación entre lógica de presentación y lógica de datos.

 En el backend, seguí con un patrón similar utilizando .NET con Entity Framework, manejando los datos mediante DbContext.

 Manejo de estado en el frontend:
 Las listas de tareas (tasks) se almacena en la memoria del componente y se actualiza dinámicamente a través de loadTasks(), deleteTask(), y updateTask(), evitando recargas innecesarias de la aplicación.

 Filtrado y manipulación de tareas en el frontend:

  Como se solicitó en el caso de usuario se implementó un filtro por estado de las tareas para facilitar la visualización segun el estado de la tarea. 

  En el metodo filteredTask tome un enfoque de programacion declarativa lo que ayuda a gestionar los filtros de forma eficiente. 