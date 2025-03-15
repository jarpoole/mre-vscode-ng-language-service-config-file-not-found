import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-child',
  imports: [CommonModule,],
  templateUrl: './child.component.html',
})
export class ChildComponent {}
