import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../components/buttons/btn-primary/btn-primary.component';
import { Router } from '@angular/router';
import { ButtonSize } from '../enums/buttonSize.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BtnPrimaryComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  buttonSize = ButtonSize;
  isMenuOpen = signal(false);

  constructor(private router: Router) {}

  public goToSignup(): void {
    // this.router.navigate(['/signup']);
    console.log('Holaaaa');
  }

  public goToLogin(): any {
    // this.router.navigate(['/login']);
    console.log('Holaaaa');
  }

  public changeMenuState(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  public onResize(eventObject: any) {
    const currentWindowWidth = eventObject.target.innerWidth;
    if (currentWindowWidth > 768) this.closeMenu();
  }

  public closeMenu() {
    this.isMenuOpen.set(false);
  }
}
