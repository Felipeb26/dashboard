import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrainmapComponent } from './pages/brainmap/brainmap.component';
import { CreateLoginComponent } from './pages/create-login/create-login.component';
import { DataComponent } from './pages/data/data.component';
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from './pages/login/login.component';
import { UserLogComponent } from './pages/user-log/user-log.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { AuthGuard } from './shared/authentication/auth.guard';
import { AuthComponent } from './shared/authentication/auth/auth.component';

const routes: Routes = [
	{
		path: "",
		component: AuthComponent,
		children: [
			{ path: "", component: HomeComponent, pathMatch: "full" },
			{ path: "user", component: UserLogComponent, },
			{ path: "data", component: DataComponent, },
			{ path: "entrada", component: ValoresComponent, },
			{ path: "mapa-mental", component: BrainmapComponent, },
		],
		canActivate: [AuthGuard]
	},
	{
		path: "",
		component: AuthComponent,
		children: [
			{ path: "", redirectTo: "login", pathMatch: 'full' },
			{ path: "login/create", redirectTo: "create", pathMatch: 'full' },
			{ path: "login", component: LoginComponent },
			{ path: "create", component: CreateLoginComponent }
		]
	}, {
		path: '404', component: NotFoundComponent,
	},
	{
		path: '**', redirectTo: '/404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
