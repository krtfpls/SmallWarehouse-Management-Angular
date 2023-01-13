import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register/register.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error/server-error.component';
import { SharedModule } from './_modules/shared.module';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { DocumentsListComponent } from './documents/documents-list/documents-list.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { DocumentsDetailComponent } from './documents/documents-detail/documents-detail.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { NumberInputComponent } from './_forms/number-input/number-input.component';
import { ConfirmDialogComponent } from './_modals/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    RegisterComponent,
    ProductsListComponent,
    NotFoundComponent,
    ServerErrorComponent,
    DocumentsListComponent,
    ProductsDetailComponent,
    TextInputComponent,
    DocumentsDetailComponent,
    ProductCreateComponent,
    NumberInputComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
