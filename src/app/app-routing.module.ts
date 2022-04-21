import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarketComponent } from './pages/market/market.component';
import { CollectionPointsComponent } from './pages/collection-points/collection-points.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AboutServiceComponent } from './pages/about-service/about-service.component';

const routes: Routes = [
	{
		component: HomeComponent,
		path: '',
		pathMatch: 'full',

	},
	{
		component: MarketComponent,
		path: 'market'
	},
	{
		component: CollectionPointsComponent,
		path: 'collection-points'
	},
	{
		component: AboutServiceComponent,
		path: 'about-service'
	},
	{
		component: ProfileComponent,
		path: 'profile',
		canActivate: [AuthenticationGuard]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
