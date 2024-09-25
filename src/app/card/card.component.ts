import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() logo: string = '';
}
