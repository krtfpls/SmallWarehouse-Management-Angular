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
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { DocumentsCreateComponent } from './documents/documents-create/documents-create.component';
import { DocumentLinesComponent } from './documents/document-lines/document-lines.component';
import { ProductsTableComponent } from './products/products-table/products-table.component';
import { QuantityModalComponent } from './modals/quantity-modal/quantity-modal.component';
import { DocumentCreateHeaderComponent } from './documents/document-create-header/document-create-header.component';
import { DatePickerComponent } from './_forms/date-picker/date-picker.component';
import { DocumentCreateLinesComponent } from './documents/document-create-lines/document-create-lines.component';
import { ListCustomerComponent } from './customers/list-customer/list-customer.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomerDashboardComponent } from './customers/customer-dashboard/customer-dashboard.component';
import { ListCategoryComponent } from './categories/list-category/list-category.component';
import { CategoryModalComponent } from './modals/category-modal/category-modal.component';
import { ProductsListAllComponent } from './products/products-list-all/products-list-all.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { ResendEmailComponent } from './register/resend-email/resend-email.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './register/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { VerifyEmailComponent } from './register/verify-email/verify-email.component';
import { ResetPasswordComponent } from './register/reset-password/reset-password.component';
import { LoMagImportComponent } from './importFiles/lo-mag-import/lo-mag-import.component';
import { VerifyProductsComponent } from './importFiles/verify-products/verify-products.component';
import { ImportComponent } from './importFiles/import/import.component';

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
    ConfirmDialogComponent,
    DocumentsCreateComponent,
    DocumentLinesComponent,
    ProductsTableComponent,
    QuantityModalComponent,
    DocumentCreateHeaderComponent,
    DatePickerComponent,
    DocumentCreateLinesComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    CustomerDashboardComponent,
    ListCategoryComponent,
    CategoryModalComponent,
    ProductsListAllComponent,
    CreateCategoryComponent,
    ResendEmailComponent,
    EditProfileComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    LoMagImportComponent,
    VerifyProductsComponent,
    ImportComponent
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
