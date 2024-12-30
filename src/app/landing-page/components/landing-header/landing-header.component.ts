import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BtnPrimaryComponent } from '../../../components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [BtnPrimaryComponent, CommonModule],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.css',
})
export class LandingHeaderComponent {
  isMenuOpen = signal(false);

  constructor(private router: Router) {}

  public goToLogin(): any {
    // this.router.navigate(['/login']);
    console.log('Holaaaa');
  }

  public changeMenuState(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  public onResize(eventObject: any) {
    const currentWindowWidth = eventObject.target.innerWidth;
    if (currentWindowWidth > 768) this.isMenuOpen.set(false);
  }
}
