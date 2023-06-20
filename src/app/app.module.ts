import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { OrderDetailsServiceTsComponent } from './services/order-details.service.ts/order-details.service.ts.component';
import { OrderDetailsTsComponent } from './services/order-details.ts/order-details.ts.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConviewComponent } from './pages/conview/conview.component';
import { ConeditComponent } from './pages/conedit/conedit.component';
import { CartComponent } from './pages/menu/cart/cart.component';
import { RegiFormComponent } from './sharepage/regi-form/regi-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { IndexComponent } from './pages/index/index.component';
import { ViewservicesComponent } from './pages/viewservices/viewservices.component';
import { ParcelDetailsComponent } from './pages/parcel-details/parcel-details.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CustomerViewComponent } from './pages/customer-view/customer-view.component';
import { NewEmployeeComponent } from './admin/new-employee/new-employee.component';
import { ViewemployeelistComponent } from './admin/viewemployeelist/viewemployeelist.component';
import { OrderViewListComponent } from './pages/menu/order-view-list/order-view-list.component';
import { NewemployeeComponent } from './admin/addemployee/newemployee/newemployee.component';
import { ViewhomebranchComponent } from './admin/viewhomebranch/viewhomebranch.component';
import { NewbranchComponent } from './admin/newbranch/newbranch.component';
import { ViewbranchlistComponent } from './admin/viewbranchlist/viewbranchlist.component';
import { AddbranchesComponent } from './admin/addbranches/addbranches.component';
import { ViewAllOrderListComponent } from './pages/menu/view-all-order-list/view-all-order-list.component';
import { ViewCancelListComponent } from './pages/menu/view-cancel-list/view-cancel-list.component';
import { PendingOrderListComponent } from './pages/menu/pending-order-list/pending-order-list.component';
import { OrderDeliveredListComponent } from './pages/menu/order-delivered-list/order-delivered-list.component';
import { OrderReceivedListComponent } from './pages/menu/order-received-list/order-received-list.component';
import { OrderOnTheWayListComponent } from './pages/menu/order-on-the-way-list/order-on-the-way-list.component';






@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MenuComponent,
    MenupageComponent,
    OrderDetailsServiceTsComponent,
    OrderDetailsTsComponent,
    FooterComponent,
    NavbarComponent,
    ConviewComponent,
    ConeditComponent,
    CartComponent,
    RegiFormComponent,
    LoginFormComponent,
    AdminDashboardComponent,
    UserListComponent,
    AdminComponent,
    AddemployeeComponent,
    IndexComponent,
    ViewservicesComponent,
    ParcelDetailsComponent,
    ContactusComponent,
    CustomerViewComponent,
    NewEmployeeComponent,
    ViewemployeelistComponent,
    OrderViewListComponent,
    NewemployeeComponent,
    ViewhomebranchComponent,
    NewbranchComponent,
    ViewbranchlistComponent,
    AddbranchesComponent,
    ViewAllOrderListComponent,
    ViewCancelListComponent,
    PendingOrderListComponent,
    OrderDeliveredListComponent,
    OrderReceivedListComponent,
    OrderOnTheWayListComponent,
  
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
