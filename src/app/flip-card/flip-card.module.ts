import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';
import { FlipCardBackModule } from "./flip-card-back";
import { FlipCardFrontModule } from "./flip-card-front";
import { MatCardModule } from "@angular/material/card";



@NgModule({
	declarations: [
		FlipCardComponent, FlipCardFrontModule, FlipCardBackModule
	],
	imports: [
		CommonModule, MatCardModule,
	],
	exports: [
		FlipCardComponent, FlipCardFrontModule, FlipCardBackModule
	]
})
export class FlipCardModule { }
