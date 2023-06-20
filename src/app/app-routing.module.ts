import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConviewComponent } from './pages/conview/conview.component';
import { CartComponent } from './pages/menu/cart/cart.component';
import { RegiFormComponent } from './sharepage/regi-form/regi-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { IndexComponent } from './pages/index/index.component';
import { ConeditComponent } from './pages/conedit/conedit.component';
import { ViewservicesComponent } from './pages/viewservices/viewservices.component';
import { ParcelDetailsComponent } from './pages/parcel-details/parcel-details.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { NewEmployeeComponent } from './admin/new-employee/new-employee.component';
import { ViewemployeelistComponent } from './admin/viewemployeelist/viewemployeelist.component';
import { OrderViewListComponent } from './pages/menu/order-view-list/order-view-list.component';
import { AddbranchesComponent } from './admin/addbranches/addbranches.component';
import { NewbranchComponent } from './admin/newbranch/newbranch.component';
import { ViewbranchlistComponent } from './admin/viewbranchlist/viewbranchlist.component';
import { ViewhomebranchComponent } from './admin/viewhomebranch/viewhomebranch.component';
import { ViewAllOrderListComponent } from './pages/menu/view-all-order-list/view-all-order-list.component';
import { ViewCancelListComponent } from './pages/menu/view-cancel-list/view-cancel-list.component';
import { PendingOrderListComponent } from './pages/menu/pending-order-list/pending-order-list.component';
import { OrderDeliveredListComponent } from './pages/menu/order-delivered-list/order-delivered-list.component';
import { OrderReceivedListComponent } from './pages/menu/order-received-list/order-received-list.component';
import { OrderOnTheWayListComponent } from './pages/menu/order-on-the-way-list/order-on-the-way-list.component';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'viewService', component:ViewservicesComponent},

  {path:'viewAllBranches', component:ViewhomebranchComponent},
  {path:'index',component:IndexComponent},
  {path:'post/:postId/edit',component:ConeditComponent},
  {path:'post/:postId/view',component:ConviewComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'cart',component:CartComponent},
  
  {path:'regiForm',component:RegiFormComponent},
  {path:'OrderViewList',component:OrderViewListComponent},
  {path:'admins',component:AdminComponent,

  children:[
    {path:'index',component:IndexComponent},
    
    {path:'admindashboard', component:AdminDashboardComponent},
    // {path:'userList', component:UserListComponent},
    {path:'addemployee', component:AddemployeeComponent,
  
  
    children:[
      {path:'newEmployee', component:NewEmployeeComponent},
      {path:'', component:ViewemployeelistComponent},
      {path:'viewEmplist', component:ViewemployeelistComponent},
    ]
  
  },
  {path:'userList', component:UserListComponent},
  // {path:'allOrderList', component:ViewAllOrderListComponent},
  
   {path:'parcelDetail', component:ParcelDetailsComponent,
  
   children:[

    {path:'cart',component:CartComponent},
    // {path:'addParcell', component:ProductInformationComponent},

    {path:'OrderList', component:OrderViewListComponent},
    
    {path:'allOrderList', component:ViewAllOrderListComponent},
    {path:'cancelOrderList', component:ViewCancelListComponent},
    {path:'pendingOrderList', component:PendingOrderListComponent},
    {path:'deliverdOrderList', component:OrderDeliveredListComponent},
    {path:'recivedOrderList', component:OrderReceivedListComponent},
    {path:'onTheWayOrderList', component:OrderOnTheWayListComponent},
    {path:'', component:PendingOrderListComponent},
  ]
  
  },


{path:'branch', component:AddbranchesComponent,

  children:[
    {path:'newBranchadd', component:NewbranchComponent},
  {path:'', component:ViewhomebranchComponent},
  {path:'BranchList', component:ViewbranchlistComponent},
  
]
}
   
  ]
},  
  {path:'loginForm',component:LoginFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
