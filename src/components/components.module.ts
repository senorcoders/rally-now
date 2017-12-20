import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FilterHeaderComponent } from './filter-header/filter-header';
import { RallyFooterComponent } from './rally-footer/rally-footer';
import { RallyOrangeHeaderComponent } from './rally-orange-header/rally-orange-header';
import { RallyNameHeaderComponent } from './rally-name-header/rally-name-header';
@NgModule({
	declarations: [
    HeaderComponent,
    FilterHeaderComponent,
    RallyFooterComponent,
    RallyOrangeHeaderComponent,
    RallyNameHeaderComponent
    ],
	imports: [
        
    ],
	exports: [
    HeaderComponent,
    FilterHeaderComponent,
    RallyFooterComponent,
    RallyOrangeHeaderComponent,
    RallyNameHeaderComponent
    ],
   
})
export class ComponentsModule {}
