import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { CmComponent } from "../../pages/cm/cm.component";
import { PlansComponent } from "../../pages/plans/plans.component";
import { UrbanpiperComponent } from "../../pages/urbanpiper/urbanpiper.component";
import { EmployeesComponent } from "../../pages/employees/employees.component";
import { MaterialModule } from "../../material.module";
import { IssuesComponent } from "../../pages/issues/issues.component";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    CmComponent,
    PlansComponent,
    UrbanpiperComponent,
    IssuesComponent,
    EmployeesComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule { }
