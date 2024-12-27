import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BtnPrimaryComponent } from '../../../components';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.css',
})
export class LandingHeaderComponent {
  constructor(private router: Router) {}

  public goToLogin(): any {
    // this.router.navigate(['/login']);
    console.log('Holaaaa');
  }
}
