import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-key',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss']
})
export class ApiKeyComponent {
  onSubmit() {
    console.log('Formulario enviado');
  }
}
