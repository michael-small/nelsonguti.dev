import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent {
  @Input({ required: true }) title = '';
}
