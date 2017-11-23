import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FilterHeaderComponent } from './filter-header/filter-header';
import { RallyFooterComponent } from './rally-footer/rally-footer';
import { RallyOrangeHeaderComponent } from './rally-orange-header/rally-orange-header';
@NgModule({
	declarations: [
    HeaderComponent,
    FilterHeaderComponent,
    RallyFooterComponent,
    RallyOrangeHeaderComponent
    ],
	imports: [
        
    ],
	exports: [
    HeaderComponent,
    FilterHeaderComponent,
    RallyFooterComponent,
    RallyOrangeHeaderComponent
    ],
   
})
export class ComponentsModule {}
