import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../../shared/task/task.component';
import { Task } from '../../core/models/task.model';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { TaskService } from '../../core/services/task.service';
import { LoaderService } from '../../core/services/loader.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskComponent, CreateTaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent implements OnInit {
  // Lista de tareas obtenidas del servicio
  tasks: Task[] = [];
  // Estado del filtro de tareas (todas, completadas, pendientes)
  filterStatus: string = 'all';
  showTaskModal = false;

  constructor(
    private taskService: TaskService,
    private loaderService: LoaderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.loadTasks();
  }
  // Carga la lista de tareas desde el servicio
  loadTasks() {
    this.loaderService.show();
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: () => {
        this.notificationService.show(
          'Ocurrió un error. Intenta nuevamente más tarde.',
          'red'
        );
      },
      complete: () => {
        this.loaderService.hide();
      },
    });
  }

  setFilter(status: string) {
    this.filterStatus = status;
  }
  // Elimina una tarea y actualiza la lista
  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter((tarea) => tarea.id !== task.id);
      },
      error: () => {
        this.notificationService.show(
          'Ocurrió un error. Intenta nuevamente más tarde.',
          'red'
        );
      },
    });
  }
  // Actualiza una tarea existente y recarga la lista
  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe({
      next: () => {
        this.loadTasks();
      },
      error: () => {
        this.notificationService.show(
          'Ocurrió un error. Intenta nuevamente más tarde.',
          'red'
        );
      },
    });
  }
  // Maneja la creación de una nueva tarea y la agrega a la lista
  handleTaskCreated(task: { name: string; description: string }) {
    const newTask: Task = {
      id: 0,
      title: task.name,
      description: task.description,
      isCompleted: false,
    };
    this.taskService.createTask(newTask).subscribe({
      next: (task) => {
        this.tasks.push(task);
        this.notificationService.show(
          '¡Tarea creada exitoxamente!', '#6CBE45'          
        );
      },
      error: () => {
        this.notificationService.show(
          'Ocurrió un error. Intenta nuevamente más tarde.',
          'red'
        );
      },
    });
  }
  // Filtra las tareas según el estado seleccionado
  get filteredTasks() {
    if (this.filterStatus === 'completed') {
      return this.tasks.filter((task) => task.isCompleted);
    } else if (this.filterStatus === 'pending') {
      return this.tasks.filter((task) => !task.isCompleted);
    }
    return this.tasks;
  }

  openTaskModal() {
    this.showTaskModal = true;
  }

}
