import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../components/buttons/btn-primary/btn-primary.component';
import { LandingHeaderComponent } from './components';
import { Router } from '@angular/router';
import { ButtonSize } from '../enums/buttonSize.enum';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BtnPrimaryComponent, LandingHeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  public buttonSize = ButtonSize;

  constructor(private router: Router) {}

  public goToSignup(): void {
    this.router.navigate(['/signup']);
  }
}
