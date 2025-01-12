import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../components';
import { Location } from '@angular/common';
import { ButtonSizes } from '../enums/buttonSizes.enum';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export default class NotFoundComponent {
  buttonSizes = ButtonSizes;

  constructor(private location: Location) {}

  public goBack = (): void => {
    this.location.back();
  };
}
