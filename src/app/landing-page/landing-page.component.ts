import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent, BtnIconComponent } from '../components';
import { Router } from '@angular/router';
import { ButtonSizes } from '../enums/buttonSizes.enum';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BtnPrimaryComponent, BtnIconComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  isMenuOpen = signal(false);
  currentYear = new Date().getFullYear();

  buttonSizes = ButtonSizes;

  constructor(private router: Router) {}

  public goToSignup(): void {
    // this.router.navigate(['/signup']);
    console.log('Holaaaa');
  }

  public goToLogin(): any {
    // this.router.navigate(['/login']);
    console.log('Holaaaa');
  }

  public onClickBtnMenu = (): void => {
    this.isMenuOpen.set(!this.isMenuOpen());
  };

  public onResize(eventObject: any) {
    const currentWindowWidth = eventObject.target.innerWidth;
    if (currentWindowWidth > 768) this.closeMenu();
  }

  public closeMenu() {
    this.isMenuOpen.set(false);
  }
}
