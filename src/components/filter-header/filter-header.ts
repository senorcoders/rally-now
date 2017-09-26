import { Component } from '@angular/core';

/**
 * Generated class for the FilterHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'filter-header',
  templateUrl: 'filter-header.html'
})
export class FilterHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello FilterHeaderComponent Component');
    this.text = 'Hello World';
  }

}
