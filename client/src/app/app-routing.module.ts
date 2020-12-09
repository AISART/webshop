import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)},
	{path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}