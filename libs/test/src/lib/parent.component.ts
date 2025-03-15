import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';

@Component({
  selector: 'lib-parent',
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
})
export class ParentComponent {}
