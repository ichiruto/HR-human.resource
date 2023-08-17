import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

interface RegistroFormData {
  nome: string;
  email: string;
  cpf: string;
  celular: string;
  conhecimentos: boolean[];
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent {
  registroForm: FormGroup;
  conhecimentos = [
    'Git',
    'React',
    'PHP',
    'NodeJS',
    'DevOps',
    'Banco de Dados',
    'Typescript',
  ];

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cpf: ['', Validators.required],
      celular: [''],
      conhecimentos: this.formBuilder.array(
        [],
        [this.minMaxSelectedCheck(1, 3)]
      ),
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const formData: RegistroFormData = this.registroForm.value;
      console.log(formData);
    }
  }

  minMaxSelectedCheck(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedCount = control.value.filter(
        (value: boolean) => value === true
      ).length;
      if (selectedCount < min || selectedCount > max) {
        return { minMaxSelected: true };
      }
      return null;
    };
  }
}
