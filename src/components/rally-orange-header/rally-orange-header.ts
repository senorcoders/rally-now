import { Component } from '@angular/core';

/**
 * Generated class for the RallyOrangeHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rally-orange-header',
  templateUrl: 'rally-orange-header.html'
})
export class RallyOrangeHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello RallyOrangeHeaderComponent Component');
    this.text = 'Hello World';
  }

}
