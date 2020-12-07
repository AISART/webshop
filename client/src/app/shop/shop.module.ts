import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';

@NgModule({
	declarations: [ShopComponent, ProductItemComponent],
	exports: [
		ShopComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		SharedModule
	]
})
export class ShopModule {
}
