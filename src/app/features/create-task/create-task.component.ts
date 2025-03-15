import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() taskCreated = new EventEmitter<{ name: string; description: string }>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario con validaciones requeridas
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
// Envía los datos si el formulario cumple con la validación
  submitTask() {
    if (this.taskForm.valid) {
      this.taskCreated.emit(this.taskForm.value);
      this.closeModal.emit();
    }
  }
// Control del campo 'name'
  get name(){
    return this.taskForm.controls['name']
  }
  //Control del campo 'description'
  get description(){
    return this.taskForm.controls['description']
  }

}
