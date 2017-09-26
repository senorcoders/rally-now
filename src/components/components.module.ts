import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FilterHeaderComponent } from './filter-header/filter-header';
@NgModule({
	declarations: [HeaderComponent,
    FilterHeaderComponent],
	imports: [],
	exports: [HeaderComponent,
    FilterHeaderComponent]
})
export class ComponentsModule {}
