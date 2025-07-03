import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  imports: [ FormsModule, CommonModule, HighlightDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // For *ngIf
  show = true;

  // For *ngFor
  fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  // For *ngSwitch
  color = '';

  // For ngClass/ngStyle
  isSpecial = false;

  protected title = 'angular-directives';
}
