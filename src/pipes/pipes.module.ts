import { NgModule } from '@angular/core';
import { CapitalizePipe } from './../pipes/capitalize/capitalize';
@NgModule({
	declarations: [CapitalizePipe],
	imports: [],
	exports: [CapitalizePipe]
})
export class PipesModule {}
