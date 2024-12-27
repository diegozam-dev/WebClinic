import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.css',
})
export class BtnPrimaryComponent {
  @Input() isContrast = false;
  @Input() size = 'MEDIUM';
  @Input({ required: true }) onClick: any;
}
