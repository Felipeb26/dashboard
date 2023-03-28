import { CacheInterceptorService } from './services/cache-interceptor.service';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ToastrModule } from "ngx-toastr";
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataComponent } from './pages/data/data.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ValoresComponent } from './pages/valores/valores.component';
// Modules
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { MatNativeDateModule } from "@angular/material/core";
import { CardsComponent } from './components/cards/cards.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { TableComponent } from './components/table/table.component';
import { FlipCardModule } from "./flip-card/flip-card.module";
import { BrainmapComponent } from './pages/brainmap/brainmap.component';
import { CreateLoginComponent } from './pages/create-login/create-login.component';
import { UserLogComponent } from './pages/user-log/user-log.component';
import { AuthComponent } from './shared/authentication/auth/auth.component';

registerLocaleData(localePt);
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		LoginComponent,
		DataComponent,
		ValoresComponent,
		CurrencyComponent,
		BrainmapComponent,
		CreateLoginComponent,
		AuthComponent,
		UserLogComponent,
		TableComponent,
		CardsComponent,
	],
	imports: [
		BrowserModule,
		FlipCardModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatCardModule,
		MatMenuModule,
		ScrollingModule,
		DragDropModule,
		MatInputModule,
		FormsModule,
		MatDatepickerModule,
		MatNativeDateModule,
		HttpClientModule,
		MatCheckboxModule,
		ReactiveFormsModule,
		MatTableModule,
		ToastrModule.forRoot({
			preventDuplicates: true,
			closeButton: true,
			positionClass: "toast-top-right",
			timeOut: 2500,
			progressBar: true,
			progressAnimation: "decreasing"

		})
	],
	providers: [
		{ provide: LOCALE_ID, useValue: "pt-BR" },
		{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptorService, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
