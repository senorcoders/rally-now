import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FilterHeaderComponent } from './filter-header/filter-header';
import { RallyFooterComponent } from './rally-footer/rally-footer';
@NgModule({
	declarations: [HeaderComponent,
    FilterHeaderComponent,
    RallyFooterComponent],
	imports: [],
	exports: [HeaderComponent,
    FilterHeaderComponent,
    RallyFooterComponent]
})
export class ComponentsModule {}
