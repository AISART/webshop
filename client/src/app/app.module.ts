import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		CoreModule,
		HomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
