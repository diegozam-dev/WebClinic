import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-icon',
  standalone: true,
  imports: [],
  templateUrl: './btn-icon.component.html',
  styleUrl: './btn-icon.component.css',
})
export class BtnIconComponent {
  @Input() size = 'MEDIUM';
  @Input({ required: true }) onClick: any;
}
