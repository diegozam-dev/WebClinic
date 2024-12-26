import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../components/buttons/btn-primary/btn-primary.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
