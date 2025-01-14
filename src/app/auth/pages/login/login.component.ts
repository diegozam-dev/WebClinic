import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  form: FormGroup;
  userError = signal('');

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      user: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^\d*$/),
        ],
      ],
    });

    this.form.valueChanges.subscribe(() => this.updateErrorMessage());
  }

  private updateErrorMessage() {
    const user = this.form.get('user');

    if (!user?.valid) {
      if (user?.hasError('required')) {
        this.userError.set('You must enter a value');
      } else if (user?.hasError('maxlength')) {
        this.userError.set('Max lenght 10');
      } else if (user?.hasError('pattern')) {
        this.userError.set('Only numbers');
      } else {
        this.userError.set('');
      }
    }
  }
}
// add password field
