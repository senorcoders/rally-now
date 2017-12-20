import { Component, Input } from '@angular/core';

@Component({
  selector: 'rally-name-header',
  templateUrl: 'rally-name-header.html'
})
export class RallyNameHeaderComponent {
  @Input() name: string;


  constructor() {
    
  }

}
